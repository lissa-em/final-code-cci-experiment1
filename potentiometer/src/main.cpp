#include <Arduino.h>

int dial_1 = A0;          // Potentiometer connected to analog pin A0
int dialValue = 0;         // Variable to store the potentiometer value
int mappedValue = 0;       // Variable to store the mapped value

void setup() {
  Serial.begin(9600);      // Start serial communication at 9600 baud rate
}

void loop() {
  dialValue = analogRead(dial_1);            // Read the potentiometer value (0-1023)
  
  // Map the dial value to a range of 0-20
  mappedValue = map(dialValue, 0, 915, 0, 20);  
  
  Serial.println(mappedValue);                    // Send the mapped value over Serial
  
  // Optionally add a small delay to prevent flooding the serial monitor
  delay(100);  
}
