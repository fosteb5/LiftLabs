// QUICK TEST: ramp up/down in a loop
const int ESC_PIN = 26;
const int CH = 0, HZ = 50, BITS = 16;
const int MIN_US = 1000, MID_US = 1400;

uint32_t usToDuty(int us){
  uint32_t top = (1u<<BITS)-1;
  return (uint32_t)((uint64_t)us * top / (1000000UL/HZ));
}

void setup() {
  ledcSetup(CH, HZ, BITS);
  ledcAttachPin(ESC_PIN, CH);

  // Arm
  ledcWrite(CH, usToDuty(MIN_US)); delay(3500);
}

void loop() {
  // Ramp up
  for (int u = MIN_US; u <= MID_US; u += 2) {
    ledcWrite(CH, usToDuty(u)); delay(10);
  }
  delay(1500); // hold

  // Ramp down
  for (int u = MID_US; u >= MIN_US; u -= 2) {
    ledcWrite(CH, usToDuty(u)); delay(10);
  }
  delay(1000);
}
