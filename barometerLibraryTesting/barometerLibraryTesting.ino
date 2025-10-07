#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_BMP3XX.h>

Adafruit_BMP3XX bmp;

// ESP32 default I²C pins
const int SDA_PIN = 21;
const int SCL_PIN = 22;

void setup() {
  Serial.begin(115200);
  delay(500);
  Serial.println("\nStarting BMP390 simple read...");

  Wire.begin(SDA_PIN, SCL_PIN);

  // Try both possible I²C addresses
  if (!bmp.begin_I2C(0x77) && !bmp.begin_I2C(0x76)) {
    Serial.println("ERROR: BMP390 not found. Check wiring and address.");
    while (1) delay(10);
  }

  Serial.println("BMP390 detected.");

  // Use default oversampling (fast enough for slow 1 Hz reading)
  bmp.setTemperatureOversampling(BMP3_OVERSAMPLING_8X);
  bmp.setPressureOversampling(BMP3_OVERSAMPLING_4X);
  bmp.setIIRFilterCoeff(BMP3_IIR_FILTER_COEFF_3);
}

void loop() {
  if (!bmp.performReading()) {
    Serial.println("Reading failed!");
  } else {
    float tempC = bmp.temperature;         // °C
    float pressure_hPa = bmp.pressure / 100.0; // convert Pa → hPa
    // altitude relative to standard sea-level pressure 1013.25 hPa
    float altitude_m = bmp.readAltitude(1013.25);

    Serial.print("Temp: ");
    Serial.print(tempC, 2);
    Serial.print(" °C,  Pressure: ");
    Serial.print(pressure_hPa, 2);
    Serial.print(" hPa,  Altitude: ");
    Serial.print(altitude_m, 2);
    Serial.println(" m");
  }

  delay(1000);  // slow down to 1 Hz
}

