// Simplest possible ESC test for ESP32
// Arms, runs low for 3 s, then stops

int escPin = 26;

void setup() {
  pinMode(escPin, OUTPUT);

  // Arm ESC
  for (int i = 0; i < 175; i++) {        // about 3.5 s
    digitalWrite(escPin, HIGH);
    delayMicroseconds(1000);             // 1 ms pulse = throttle min
    digitalWrite(escPin, LOW);
    delayMicroseconds(19000);            // total 20 ms frame (50 Hz)
  }

  // Run low throttle for 3 s
  for (int i = 0; i < 150; i++) {        // about 3 s
    digitalWrite(escPin, HIGH);
    delayMicroseconds(1200);             // ≈10 % throttle
    digitalWrite(escPin, LOW);
    delayMicroseconds(18800);
  }

  // Stop (back to min)
  for (int i = 0; i < 100; i++) {
    digitalWrite(escPin, HIGH);
    delayMicroseconds(1000);
    digitalWrite(escPin, LOW);
    delayMicroseconds(19000);
  }
}

void loop() {
  // nothing
}
