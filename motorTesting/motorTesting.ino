// ESC ramp test for ESP32 on pin 26
// - Arms ESC at power-up
// - Then loops: ramp forward -> hold -> ramp to neutral
//               ramp reverse -> hold -> ramp to neutral

int escPin = 26;

// Pulse timing
const int FRAME_US       = 20000;  // 20 ms frame = 50 Hz

// Throttle pulse widths (adjust if needed for your ESC)
const int PULSE_MIN      = 1000;   // full reverse (or full stop on forward-only ESC)
const int PULSE_NEUTRAL  = 1500;   // neutral / stop (center)
const int PULSE_MAX      = 2000;   // full forward

// Timing for ramps and holds
const int RAMP_TIME_MS   = 5000;   // 5 seconds ramp
const int HOLD_TIME_MS   = 1000;   // 1 second hold

void sendPulse(int pulseWidthUs) {
  digitalWrite(escPin, HIGH);
  delayMicroseconds(pulseWidthUs);
  digitalWrite(escPin, LOW);
  delayMicroseconds(FRAME_US - pulseWidthUs);
}

// Ramp from startPulse -> endPulse over durationMs
void rampPulse(int startPulse, int endPulse, int durationMs) {
  int frameMs = FRAME_US / 1000;         // 20 ms
  int steps   = durationMs / frameMs;    // e.g. 5000 / 20 = 250 steps
  if (steps <= 0) steps = 1;

  float delta = (float)(endPulse - startPulse) / steps;
  float pulse = startPulse;

  for (int i = 0; i < steps; i++) {
    sendPulse((int)pulse);
    pulse += delta;
  }

  // Make sure we end exactly at endPulse
  sendPulse(endPulse);
}

// Hold a fixed pulse for durationMs
void holdPulse(int pulseWidthUs, int durationMs) {
  int frameMs = FRAME_US / 1000;         // 20 ms
  int frames  = durationMs / frameMs;    // e.g. 1000 / 20 = 50 frames
  if (frames <= 0) frames = 1;

  for (int i = 0; i < frames; i++) {
    sendPulse(pulseWidthUs);
  }
}

void armEsc() {
  // Simple arm: hold minimum for ~3.5 s (like your original code)
  for (int i = 0; i < 175; i++) {
    sendPulse(PULSE_MIN);
  }

  // Then go to neutral for a short time
  for (int i = 0; i < 100; i++) {
    sendPulse(PULSE_NEUTRAL);
  }
}

void setup() {
  pinMode(escPin, OUTPUT);
  armEsc();
}

void loop() {
  // ---- Forward direction ----
  rampPulse(PULSE_NEUTRAL, PULSE_MAX, RAMP_TIME_MS); // ramp up 5 s
  holdPulse(PULSE_MAX, HOLD_TIME_MS);                // hold 1 s
  rampPulse(PULSE_MAX, PULSE_NEUTRAL, RAMP_TIME_MS); // ramp back to neutral

  // Small pause at neutral (optional)
  holdPulse(PULSE_NEUTRAL, 500);

  // ---- Reverse direction ----
  rampPulse(PULSE_NEUTRAL, PULSE_MIN, RAMP_TIME_MS); // ramp down to reverse over 5 s
  holdPulse(PULSE_MIN, HOLD_TIME_MS);                // hold 1 s
  rampPulse(PULSE_MIN, PULSE_NEUTRAL, RAMP_TIME_MS); // ramp back to neutral

  // Small pause at neutral
  holdPulse(PULSE_NEUTRAL, 1000);
}
