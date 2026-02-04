#include <Wire.h>
#include <Adafruit_MPU6050.h>
#include <Adafruit_Sensor.h>

Adafruit_MPU6050 mpu;

float pitch = 0, roll = 0;
unsigned long lastTime;

void setup() {
  Serial.begin(115200);
  Wire.begin(21, 22);
  if (!mpu.begin()) {
    Serial.println("MPU6050 not found!");
    while (1) delay(10);
  }
  lastTime = millis();
}

void loop() {
  sensors_event_t a, g, t;
  mpu.getEvent(&a, &g, &t);

  unsigned long now = millis();
  float dt = (now - lastTime) / 1000.0; // seconds
  lastTime = now;

  // ---- Gyro integration (rad/s → deg/s) ----
  float gyroX = g.gyro.x * 57.2958;
  float gyroY = g.gyro.y * 57.2958;

  pitch += gyroX * dt;
  roll  += gyroY * dt;

  // ---- Accel angle ----
  float accelPitch = atan2(a.acceleration.y, a.acceleration.z) * 57.2958;
  float accelRoll  = atan2(-a.acceleration.x,
                           sqrt(a.acceleration.y*a.acceleration.y +
                                a.acceleration.z*a.acceleration.z)) * 57.2958;

  // ---- Complementary filter ----
  pitch = 0.98 * pitch + 0.02 * accelPitch;
  roll  = 0.98 * roll  + 0.02 * accelRoll;

  Serial.print("Pitch: "); Serial.print(pitch);
  Serial.print("  Roll: "); Serial.println(roll);

  delay(20);
}


