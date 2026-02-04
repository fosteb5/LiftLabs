#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_BMP3XX.h>

Adafruit_BMP3XX bmp;

const int SDA_PIN = 21;
const int SCL_PIN = 22;

float p0_hPa = NAN;   // baseline pressure at start (hPa)

// simple altitude from baseline
static inline float relAlt_m(float p_hPa, float p0_hPa) {
  if (p_hPa <= 0 || p0_hPa <= 0) return NAN;
  return 44330.0f * (1.0f - powf(p_hPa / p0_hPa, 0.190294957f));
}

// take an average for given milliseconds
float avgPressure(uint32_t ms_collect) {
  uint32_t t0 = millis();
  float sum = 0;
  int n = 0;
  while (millis() - t0 < ms_collect) {
    if (bmp.performReading()) {
      sum += bmp.pressure / 100.0f;   // Pa → hPa
      n++;
    }
    delay(50);   // ~20 samples per second
  }
  return (n > 0) ? (sum / n) : NAN;
}

void setup() {
  Serial.begin(115200);
  delay(300);
  Serial.println("\nBMP390 – baseline + 5 s averaged readings");

  Wire.begin(SDA_PIN, SCL_PIN);

  if (!bmp.begin_I2C(0x77) && !bmp.begin_I2C(0x76)) {
    Serial.println("ERROR: BMP390 not found. Check wiring.");
    while (1) delay(10);
  }
  Serial.println("BMP390 detected.");

  bmp.setTemperatureOversampling(BMP3_OVERSAMPLING_8X);
  bmp.setPressureOversampling(BMP3_OVERSAMPLING_16X);
  bmp.setIIRFilterCoeff(BMP3_IIR_FILTER_COEFF_7);

  Serial.print("Calibrating baseline for 20 s ... ");
  p0_hPa = avgPressure(20000);
  Serial.print("baseline p0 = ");
  Serial.print(p0_hPa, 2);
  Serial.println(" hPa");
}

void loop() {
  float p_hPa = avgPressure(5000);            // 5 s average
  float tempC = bmp.temperature;              // last sample’s temperature
  float dH = relAlt_m(p_hPa, p0_hPa);          // meters above baseline

  Serial.print("Temp: "); Serial.print(tempC, 2); Serial.print(" °C  ");
  Serial.print("P: ");   Serial.print(p_hPa, 2);  Serial.print(" hPa  ");
  Serial.print("Δh: ");  Serial.print(dH, 2);     Serial.println(" m");
}

