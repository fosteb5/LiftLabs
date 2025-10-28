// ESP32 UART2 dual-protocol sniffer: detects NMEA ('$') or UBX (0xB5 0x62)
// GPS TX -> GPIO26 (RX), GPS RX not needed for this test
HardwareSerial GPSser(2);
const int RX_PIN = 26;
const int TX_PIN = -1;

const long BAUDS[] = {9600, 38400, 57600, 4800, 115200};
int idx = 0; bool locked = false; bool ubx = false; unsigned long last = 0;
uint8_t prev = 0;

void startAt(long b){
  GPSser.end(); delay(50);
  GPSser.begin(b, SERIAL_8N1, RX_PIN, TX_PIN);
  Serial.print("Listening at "); Serial.println(b);
}

void setup(){
  delay(300);
  Serial.begin(115200);
  Serial.println("\nDual-protocol GPS sniffer (RX=GPIO26)");
  startAt(BAUDS[idx]); last = millis();
}

void loop(){
  if(!locked && millis()-last > 3000){
    idx = (idx+1) % (sizeof(BAUDS)/sizeof(BAUDS[0]));
    startAt(BAUDS[idx]); last = millis();
  }
  while(GPSser.available()){
    uint8_t c = GPSser.read();

    if(!locked){
      // NMEA?
      if(c == '$'){ locked = true; ubx = false;
        Serial.print("NMEA detected at "); Serial.println(BAUDS[idx]);
      }
      // UBX? (sync chars 0xB5 0x62)
      if(prev == 0xB5 && c == 0x62){ locked = true; ubx = true;
        Serial.print("UBX detected at "); Serial.println(BAUDS[idx]);
      }
      prev = c;
      continue;
    }

    if(ubx){
      // Print UBX as hex bytes
      if(c < 16) Serial.print('0');
      Serial.print(c, HEX);
      Serial.print(' ');
      // add a newline occasionally for readability
      static int cnt=0; if(++cnt % 32 == 0) Serial.println();
    } else {
      // Forward NMEA ASCII
      Serial.write(c);
    }
  }
}
