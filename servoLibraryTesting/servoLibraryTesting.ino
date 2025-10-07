#include <ESP32Servo.h>

Servo myServo;

// Pick a safe PWM pin (NOT 1, 3, 34–39). 18 is good.
const int SERVO_PIN = 18;

// Most hobby servos accept ~500–2500 µs. Start conservative; widen if needed.
int usMin = 500;   // microseconds at 0°
int usMax = 2500;  // microseconds at 180°

void setup() {
  Serial.begin(115200);
  delay(300);
  Serial.println("\nESP32Servo basic test");

  // 50 Hz for standard servos
  myServo.setPeriodHertz(50);
  // Attach with explicit pulse range
  if (!myServo.attach(SERVO_PIN, usMin, usMax)) {
    Serial.println("Failed to attach servo (pin in use?)");
    while (1) delay(10);
  }

  // Move to center, hold a moment
  myServo.write(90);
  Serial.println("Center (90°)");
  delay(1500);
}

void loop() {
  // Move to 0°, 90°, 180° with gentle pauses
  goAngle(0);    delay(1000);
  goAngle(90);   delay(1000);
  goAngle(180);  delay(1000);

  // Slow sweep 0→180→0 for noise/calibration
  sweep(0, 180, 2);  // step 2°
}

void goAngle(int deg) {
  deg = constrain(deg, 0, 180);
  myServo.write(deg);
  Serial.print("Angle: "); Serial.print(deg); Serial.println("°");
}

void sweep(int startDeg, int endDeg, int stepDeg) {
  if (startDeg > endDeg) stepDeg = -abs(stepDeg);
  else stepDeg = abs(stepDeg);

  for (int a = startDeg; (stepDeg > 0) ? (a <= endDeg) : (a >= endDeg); a += stepDeg) {
    myServo.write(a);
    delay(20); // ~50 Hz update -> smooth
  }
}
