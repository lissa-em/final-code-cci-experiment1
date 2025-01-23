#include <Arduino.h>

int dial_1 = A0;          // Potentiometer connected to analog pin A0
int dialValue = 0;         // Variable to store the potentiometer value
int mappedValue = 0;       // Variable to store the mapped value

void setup() {
  Serial.begin(9600);      
}

void loop() {
    
 
  dialValue = analogRead(dial_1);     

  Serial.print("Dial Value: ");
  Serial.print(dialValue); // Show raw analog value
  Serial.print("  Mapped Value: ");             
       
  
  // Map the dial value to a range of 0-20
  mappedValue = map(dialValue, 0, 850, 0, 20); 

  Serial.println(mappedValue); 

  delay(100); 
}
