// this will be the new and complete code for the blimp, this will encompass all of the libs
// this will import all off the libraries that are needed for the code
#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_BMP3XX.h>
#include <HardwareSerial.h>
#include <TinyGPSPlus.h> // used to make the gps function
#include <Adafruit_MPU6050.h>
#include <ESP32Servo.h> // used to make the servo function
#include <Ultrasonic.h> // needed to calculate distannce with the ultrasonic


//setting pins
//motor esc pin
const int leftESCPin = 26;
const int rightESCPin = 25;
// Functions used to control the Blimp
// Motor Control

void setMotorSpeeds(int leftPercent, int rightPercent) {
  // Constrain inputs to ensure they stay within the -100 to 100 range
  leftPercent = constrain(leftPercent, -100, 100);
  rightPercent = constrain(rightPercent, -100, 100);

  // mapping -100 - 100 to the proper values needed to control the motor
  int leftUs = map(leftPercent, -100, 100, 1000, 2000);
  int rightUs = map(rightPercent, -100, 100, 1000, 2000);

  // Send pulses to both pins simultaneously
  // We start both HIGH at the same time
  digitalWrite(leftESCPin, HIGH);
  digitalWrite(rightESCPin, HIGH);

  // We turn them LOW based on which pulse finishes first
  if (leftUs < rightUs) {
    delayMicroseconds(leftUs);
    digitalWrite(leftESCPin, LOW);
    delayMicroseconds(rightUs - leftUs);
    digitalWrite(rightESCPin, LOW);
    // Finish the rest of the 20ms frame (20000us)
    delayMicroseconds(20000 - rightUs);
  } else {
    delayMicroseconds(rightUs);
    digitalWrite(rightESCPin, LOW);
    delayMicroseconds(leftUs - rightUs);
    digitalWrite(leftESCPin, LOW);
    // Finish the rest of the 20ms frame (20000us)
    delayMicroseconds(20000 - leftUs);
  }
}


void setup() {

  // this sets the motors and ensures that the esc's start properly
  pinMode(leftESCPin, OUTPUT);
  pinMode(rightESCPin, OUTPUT);

  // Arming: Send "Stop" signal for 3 seconds
  for (int i = 0; i < 150; i++) {
    setMotorSpeeds(0, 0); 
  }
}

void loop() {
  // put your main code here, to run repeatedly:

}
