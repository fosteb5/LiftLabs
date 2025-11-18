#include <HardwareSerial.h>
#include <TinyGPSPlus.h>

// Use UART1 on ESP32 for GPS
HardwareSerial GPS_Serial(1);
TinyGPSPlus gps;

// GT-U7 connections to ESP32
static const int GPS_RX_PIN = 16;  // ESP32 receives on this pin  (connect to GT-U7 TXD)
static const int GPS_TX_PIN = 17;  // ESP32 transmits on this pin (connect to GT-U7 RXD)

unsigned long lastPrint = 0;

void setup() {
  // USB serial to your computer
  Serial.begin(115200);
  delay(1000);

  Serial.println();
  Serial.println("=== GT-U7 GPS Test on ESP32 ===");
  Serial.println("Using TinyGPSPlus to parse data...");
  Serial.println("Wiring:");
  Serial.println("  GT-U7 VCC -> ESP32 5V");
  Serial.println("  GT-U7 GND -> ESP32 GND");
  Serial.println("  GT-U7 TXD -> ESP32 GPIO 16 (RX2)");
  Serial.println("  GT-U7 RXD -> ESP32 GPIO 17 (TX2)");
  Serial.println();

  // Start UART1 for GPS at 9600 baud
  GPS_Serial.begin(9600, SERIAL_8N1, GPS_RX_PIN, GPS_TX_PIN);
  Serial.println("GPS UART started at 9600 baud");
  Serial.println("Waiting for GPS data... (go near a window or outside)");
}

void loop() {
  // Read data from GPS and feed TinyGPSPlus
  while (GPS_Serial.available()) {
    char c = GPS_Serial.read();

    // Optional: echo raw NMEA to Serial Monitor.
    // Uncomment this line if you want to see the raw sentences:
    // Serial.write(c);

    gps.encode(c);
  }

  // Once per second, print parsed info
  unsigned long now = millis();
  if (now - lastPrint >= 1000) {
    lastPrint = now;

    Serial.println();
    Serial.println("---- Parsed GPS Data ----");

    if (gps.location.isValid()) {
      Serial.print("Lat: ");
      Serial.print(gps.location.lat(), 6);
      Serial.print("  Lon: ");
      Serial.print(gps.location.lng(), 6);
    } else {
      Serial.print("Lat/Lon: INVALID");
    }

    Serial.println();

    Serial.print("Alt: ");
    if (gps.altitude.isValid()) {
      Serial.print(gps.altitude.meters());
      Serial.print(" m");
    } else {
      Serial.print("n/a");
    }

    Serial.print("   Sats: ");
    if (gps.satellites.isValid()) {
      Serial.print(gps.satellites.value());
    } else {
      Serial.print("n/a");
    }

    Serial.print("   HDOP: ");
    if (gps.hdop.isValid()) {
      Serial.print(gps.hdop.hdop());
    } else {
      Serial.print("n/a");
    }

    Serial.println();
    Serial.println("-------------------------");
  }
}
