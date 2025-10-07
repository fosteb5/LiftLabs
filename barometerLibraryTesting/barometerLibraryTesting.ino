#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_BMP3XX.h>

Adafruit_BMP3XX bmp;

// Change if you use different I2C pins
const int I2C_SDA = 21;
const int I2C_SCL = 22;

// Baseline averaging
const int BASELINE_SAMPLES = 50;
float p0_hPa = NAN;  // baseline pressure at ground level (hPa)

// Simple retry for both common I2C addresses
bool beginBMP() {
  if (bmp.begin_I2C(0x77)) return true;
  if (bmp.begin_I2C(0x76)) return true;
  return false;
}

void configureSensor() {
  // A little filtering to steady readings
  bmp.setTemperatureOversampling(BMP3_OVERSAMPLING_8X);
  bmp.setPressureOversampling(BMP3_OVERSAMPLING_16X);
  bmp.setIIRFilterCoeff(BMP3_IIR_FILTER_COEFF_7);
  bmp.setOutputDataRate(BMP3_ODR_50_HZ);
}

// Compute altitude difference from baseline using the barometric formula
// h = 44330 * (1 - (P/P0)^(1/5.255))
float relativeAltitudeMeters(float p_hPa, float p0_hPa) {
  if (isnan(p_hPa) || isnan(p0_hPa) || p_hPa <= 0 || p0_hPa <= 0) return NAN;
  return 44330.0 * (1.0 - pow(p_hPa / p0_hPa, 0.1902949571836346)); // 1/5.255
}

void setup() {
  Serial.begin(115200);
  delay(200);

  Wire.begin(I2C_SDA, I2C_SCL);

  if (!beginBMP()) {
    Serial.println("BMP390 not found at 0x77 or 0x76. Check wiring.");
    while (1) delay(10);
  }

  configureSensor();

  // Take baseline pressure average at startup (sensor sitting at “ground level”)
  Serial.print("Calibrating baseline pressure with ");
  Serial.print(BASELINE_SAMPLES);
  Serial.println(" samples...");
  float sum_hPa = 0;
  int good = 0;

  for (int i = 0; i < BASELINE_SAMPLES; i++) {
    if (bmp.performReading()) {
      sum_hPa += bmp.pressure / 100.0; // Pa -> hPa
      good++;
    }
    delay(20);
  }
  if (good < BASELINE_SAMPLES / 2) {
    Serial.println("Baseline calibration too noisy/failed. Check sensor.");
  }
  p0_hPa = sum_hPa / max(good, 1);
  Serial.print("Baseline pressure p0 = ");
  Serial.print(p0_hPa, 2);
  Serial.println(" hPa");
  Serial.println("Ready.\n");
}

void loop() {
  if (!bmp.performReading()) {
    Serial.println("Reading failed");
    delay(200);
    return;
  }

  float tempC = bmp.temperature;               // °C
  float p_hPa = bmp.pressure / 100.0;          // Pa -> hPa
  float relAlt_m = relativeAltitudeMeters(p_hPa, p0_hPa);

  Serial.print("T = ");
  Serial.print(tempC, 2);
  Serial.print(" °C,  P = ");
  Serial.print(p_hPa, 2);
  Serial.print(" hPa,  Δh = ");
  Serial.print(relAlt_m, 2);
  Serial.println(" m");

  delay(250);
}
