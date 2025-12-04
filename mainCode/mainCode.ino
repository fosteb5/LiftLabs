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
 
 // establishing the GPS module
 HardwareSerial GPS_serial(1); // setting the serial to read
 static const int GPS_RX_PIN = 16; // RX pin for the gps
 static const int GPS_TX_PIN = 17; // TX pin for the gps

// establishing the gyroscope module
Adafruit_MPU6050 mpu;
float pitch = 0, roll = 0; // setting floats to hold the pitch and roll of the blimp/module

// establishing the servo's
Servo myServo;
static const int servoLeftMotor = 18;
int min = 500; // in micro seconds
int max = 2500; // in micro seconds
 
void setup() {
  // put your setup code here, to run once:

}

void loop() {
  // put your main code here, to run repeatedly:

}
