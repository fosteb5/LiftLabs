#include <TinyGPS++.h>
#include <HardwareSerial.h>
// testing this library
TinyGPSPlus gps;
HardwareSerial SerialGPS(2);  // use UART2 (pins 16 RX, 17 TX)

void setup() {
  Serial.begin(115200); // debug via USB
  SerialGPS.begin(9600, SERIAL_8N1, 16, 17); // GPS: RX=16, TX=17
  Serial.println("GPS starting...");
}

void loop() {
  while (SerialGPS.available() > 0) {
    gps.encode(SerialGPS.read());
    if (gps.location.isUpdated()) {
      Serial.print("Lat: "); Serial.println(gps.location.lat(), 6);
      Serial.print("Lng: "); Serial.println(gps.location.lng(), 6);
    }
  }
}