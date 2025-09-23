#include <Ultrasonic.h>

// Define pins
#define TRIG_PIN 15
#define ECHO_PIN 2

// Create ultrasonic object
Ultrasonic ultrasonic(TRIG_PIN, ECHO_PIN);

void setup() {
  Serial.begin(9600);
}

void loop() {
  // Get distance in centimeters
  long distanceCM = ultrasonic.read();

  Serial.print("Distance: ");
  Serial.print(distanceCM);
  Serial.println(" cm");

  delay(500); // wait half a second
}
