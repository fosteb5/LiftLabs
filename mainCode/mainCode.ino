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

/*Complete Pin Use List
26 - Left ESC
25 - Right ESC
18 - Left Motor Servo
19 - Right Motor Servo
13 - Left Flap Servo
12 - Right Flap Servo
*/

/*Curently Unused Pins
15
2
0
4
16
17
5
21
RX
TX
22
23
13
12
14
27
33
32
35
34
VN
VP
*/


// flight path for the blimp
struct Waypoint {
    float latitude;
    float longitude;
    float alt;
};
// *** this is where we change and add waypoints ***
// use https://www.geoplaner.com/ to find the route
// its goes lat, long, alt(meters)
const Waypoint missionPath[] = {
    {42.9849, -81.2453, 30.0}, 
    {42.9900, -81.2500, 20.0}, 
    {43.0000, -81.2600, 0.5}   
}
// counter that keeps track of the current waypoint
int currentWaypoint = 0;

// adding the ability to add no fly zones (later we will add functionality to imediatly fly to the ground if entering the zone)
struct NoFlyZone {
    float lat;
    float lon;
    float radius; // Distance in meters from the center to stay away
};

// this is where we add the areas the blimp must not go by law
// they can be found at https://map.navdrone.ca/
// it goes lat, long, radius(meters)
const NoFlyZone restrictedAreas[] = {
    {43.03192, -81.14856, 10000.0}, // london airport, 10km radius
    {43.01306, -81.27440, 2000.0} // western hospital, 2km radius 
} // the conversion of km to lat is 1=111km, and for long is 1=111.32km(cos(latitude))


// creating the framework of the current flight mode
enum FlightMode {
  Land,          // Direct control via ESP-NOW
  Flight,      // Following waypoints (Lat, Long, Alt)
  HoldPos,    // Holding position to save energy
  EmergancyLand,  // Immediate descent (No-fly zone or Kill Switch)
  OFF              // Motors disarmed
};
// varble to hold the state
FlightMode currentMode = OFF;
//****PINS THAT ARE SET/USED****
//motor esc pin
const int leftESCPin = 26;
const int rightESCPin = 25;
//motor servos pins
const int leftMotorServoPin = 18;
const int rightMotorServoPin = 19;
//flap servo pins
const int leftFlapServoPin = 13;
const int rightFlapServoPin = 12;


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

// Servo Control for Motors
// declaring the servos (activating the library)
Servo leftServo;
Servo rightServo;
void setMotorServoAngle(int leftDegree, int rightDegree) {
  // Constrain to 0-180 to protect the MG995 gears
  int leftValid = constrain(leftDegree, 0, 180);
  int rightValid = constrain(rightDegree, 0, 180);

  leftServo.write(leftValid);
  rightServo.write(rightValid);
}

// Servo Control for flaps
// declaring the servos (activating the library)
Servo leftFlap;
Servo rightFlap;
void setMotorServoAngle(int leftFlapDegree, int rightFlapDegree) {
  // Constrain to 0-180 to protect the MG995 gears
  int leftFlapValid = constrain(leftFlapDegree, 0, 180);
  int rightFlapValid = constrain(rightFlapDegree, 0, 180);

  leftFlap.write(leftFlapValid);
  rightFlap.write(rightFlapValid);
}


void setup() {

  // this sets the motors and ensures that the esc's start properly
  pinMode(leftESCPin, OUTPUT);
  pinMode(rightESCPin, OUTPUT);

  // Arming: Send "Stop" signal for 3 seconds
  for (int i = 0; i < 150; i++) {
    setMotorSpeeds(0, 0); 
  }

  // setting the servo values to ensure proper function
  // MG995s use 50Hz and typically a 500us to 2500us range
  leftServo.setPeriodHertz(50);
  rightServo.setPeriodHertz(50);
  leftFlap.setPeriodHertz(50);
  rightFlap.setPeriodHertz(50);

  leftServo.attach(leftMotorServoPin, 500, 2500);
  rightServo.attach(rightMotorServoPin, 500, 2500);
  leftFlap.attach(leftFlapServoPin, 500, 2500);
  rightFlap.attach(rightFlapServoPin, 500, 2500);
}

void loop() {
  // put your main code here, to run repeatedly:

}
