#include <TinyGPS++.h>
#include <HardwareSerial.h>

#define SERIAL_MON_BAUD 9600
#define GPS_BAUD        9600
#define GPS_RX_PIN      16   // GPS TX -> ESP32 16
#define GPS_TX_PIN      17   // GPS RX <- ESP32 17 (optional)

TinyGPSPlus gps;
HardwareSerial SerialGPS(2);

unsigned long lastInfo = 0;

void setup() {
  Serial.begin(SERIAL_MON_BAUD);
  delay(50);
  Serial.println();
  Serial.println(F("ESP32 DevKit V1 + NEO-6M (UART2 on 16/17)"));
  Serial.println(F("Raw NMEA will stream below. Waiting for fix..."));

  SerialGPS.begin(GPS_BAUD, SERIAL_8N1, GPS_RX_PIN, GPS_TX_PIN);
}

void loop() {
  // Stream raw NMEA and feed parser
  while (SerialGPS.available() > 0) {
    char c = SerialGPS.read();
    Serial.write(c);   // raw NMEA echo for sanity
    gps.encode(c);
  }

  // Every second: show parsed status
  if (millis() - lastInfo >= 1000) {
    lastInfo = millis();

    Serial.println(F("\n--- GPS STATUS ---"));
    if (gps.location.isValid()) {
      Serial.print(F("Lat: ")); Serial.println(gps.location.lat(), 6);
      Serial.print(F("Lng: ")); Serial.println(gps.location.lng(), 6);
      Serial.print(F("Age(ms): ")); Serial.println(gps.location.age());
    } else {
      Serial.println(F("Location: INVALID (no fix yet)"));
    }

    if (gps.date.isValid() && gps.time.isValid()) {
      Serial.print(F("UTC: "));
      Serial.print(gps.date.year()); Serial.print('-');
      print2(gps.date.month()); Serial.print('-');
      print2(gps.date.day()); Serial.print(' ');
      print2(gps.time.hour()); Serial.print(':');
      print2(gps.time.minute()); Serial.print(':');
      print2(gps.time.second()); Serial.println();
    } else {
      Serial.println(F("UTC time/date: not valid yet"));
    }

    if (gps.satellites.isValid()) {
      Serial.print(F("Satellites: "));
      Serial.println(gps.satellites.value());  // need ~4+ for 3D fix
    } else {
      Serial.println(F("Satellites: unknown"));
    }

    if (gps.hdop.isValid()) {
      Serial.print(F("HDOP: "));
      Serial.println(gps.hdop.hdop(), 1);      // <= 2.0 is good
    } else {
      Serial.println(F("HDOP: unknown"));
    }

    // TinyGPS++ stats help diagnose parsing vs reception
    Serial.print(F("Chars: ")); Serial.print(gps.charsProcessed());
    Serial.print(F("  Sentences: ")); Serial.print(gps.sentencesWithFix());
    Serial.print(F("  CSumFail: ")); Serial.println(gps.failedChecksum());
  }
}

static void print2(uint32_t v) {
  if (v < 10) Serial.print('0');
  Serial.print(v);
}
