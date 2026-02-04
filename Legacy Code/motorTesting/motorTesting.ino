// Simple ESC ramp test on ESP32
// - Arms ESC at startup
// - Then loops: ramp up -> hold -> ramp down

int escPin = 26;

// 50 Hz frame = 20 ms
const int FRAME_US   = 20000;

// Pulse widths (adjust if needed)
const int PULSE_MIN  = 1000;   // minimum throttle
const int PULSE_MAX  = 2000;   // maximum throttle

void sendPulse(int pulseWidthUs) {
  digitalWrite(escPin, HIGH);
  delayMicroseconds(pulseWidthUs);
  digitalWrite(escPin, LOW);
  delayMicroseconds(FRAME_US - pulseWidthUs);
}

void setup() {
  pinMode(escPin, OUTPUT);

  // Arm ESC: hold minimum for about 3.5 s (175 * 20 ms)
  for (int i = 0; i < 175; i++) {
    sendPulse(PULSE_MIN);
  }
}

void loop() {
  // ----- Ramp up: 1000 -> 2000 over ~5 s -----
  // 1000 steps * 20 ms ≈ 20 s, so we use fewer steps:
  // 1000 -> 2000 in 250 steps = 250 * 20 ms = 5000 ms (5 s)
  for (int pulse = PULSE_MIN; pulse <= PULSE_MAX; pulse += 4) {
    sendPulse(pulse);
  }

  // ----- Hold full throttle for ~1 s -----
  // 50 * 20 ms = 1000 ms
  for (int i = 0; i < 50; i++) {
    sendPulse(PULSE_MAX);
  }

  // ----- Ramp down: 2000 -> 1000 over ~5 s -----
  for (int pulse = PULSE_MAX; pulse >= PULSE_MIN; pulse -= 4) {
    sendPulse(pulse);
  }

  // Optional: hold at min for ~1 s before repeating
  for (int i = 0; i < 50; i++) {
    sendPulse(PULSE_MIN);
  }

  // Then loop repeats
}

