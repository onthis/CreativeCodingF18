#define ARDUINO
#define MIDI_CC_MODULATION 0x01
#define MIDI_CC_BREATH 0x02
#define MIDI_CC_VOLUME 0x07
#define MIDI_CC_BALANCE 0x08
#define MIDI_CC_PAN 0x0A
#define MIDI_CC_EXPRESSION 0x0B
#define MIDI_CC_EFFECT1 0x0C
#define MIDI_CC_EFFECT2 0x0D
#define MIDI_CC_GENERAL1 0x0E
#define MIDI_CC_GENERAL2 0x0F
#define MIDI_CC_GENERAL3 0x10
#define MIDI_CC_GENERAL4 0x11
#define MIDI_CC_GENERAL5 0x12
#define MIDI_CC_GENERAL6 0x13
#define MIDI_CC_GENERAL7 0x14
#define MIDI_CC_GENERAL8 0x15
#define MIDI_CC_GENERAL9 0x16
#define MIDI_CC_GENERAL10 0x17
#define MIDI_CC_GENERAL11 0x18
#define MIDI_CC_GENERAL12 0x19
#define MIDI_CC_GENERAL13 0x1A
#define MIDI_CC_GENERAL14 0x1B
#define MIDI_CC_GENERAL15 0x1C
#define MIDI_CC_GENERAL16 0x1D
#define MIDI_CC_GENERAL17 0x1E
#define MIDI_CC_GENERAL18 0x1F
#define MIDI_CC_GENERAL1_FINE 0x2E
#define MIDI_CC_GENERAL2_FINE 0x2F
#define MIDI_CC_GENERAL3_FINE 0x30
#define MIDI_CC_GENERAL4_FINE 0x31
#define MIDI_CC_GENERAL5_FINE 0x32
#define MIDI_CC_GENERAL6_FINE 0x33
#define MIDI_CC_GENERAL7_FINE 0x34
#define MIDI_CC_GENERAL8_FINE 0x35
#define MIDI_CC_GENERAL9_FINE 0x36
#define MIDI_CC_GENERAL10_FINE 0x37
#define MIDI_CC_GENERAL11_FINE 0x38
#define MIDI_CC_GENERAL12_FINE 0x39
#define MIDI_CC_GENERAL13_FINE 0x3A
#define MIDI_CC_GENERAL14_FINE 0x3B
#define MIDI_CC_GENERAL15_FINE 0x3C
#define MIDI_CC_GENERAL16_FINE 0x3D
#define MIDI_CC_GENERAL17_FINE 0x3E
#define MIDI_CC_GENERAL18_FINE 0x3F
#define MIDI_CC_SUSTAIN 0x40
#define MIDI_CC_REVERB 0x5B
#define MIDI_CC_CHORUS 0x5D
#define MIDI_CC_CONTROL_OFF 0x79
#define MIDI_CC_NOTES_OFF 0x78
#define NOTE_C0 0x00 // 0
#define NOTE_C1 0x12 // 18
#define NOTE_C2 0x24 // 36
#define NUM_DI 12  // number of digital inputs, can be from 0 to 18
#define NUM_AI 6   // Number of analogue inputs, can be from 0 to 6
#define MIDI_CHANNEL 1
#define NOTE NOTE_C0 // first note
#define DIGITAL_PIN_ORDER 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 // digital pin order
#define ANALOGUE_PIN_ORDER A0, A1, A2, A3, A4, A5 // analogue pin order
#define LED_PIN 13
#define MIDI_CC MIDI_CC_GENERAL1
#define DEBOUNCE
#define DEBOUNCE_LENGTH 2
#define ANALOGUE_FILTER
#ifdef FASTADC
#define FILTER_AMOUNT 3
#else
#define FILTER_AMOUNT 2
#endif
#define ANALOGUE_INPUT_CHANGE_TIMEOUT 250000

byte digitalInputMapping[NUM_DI] = {DIGITAL_PIN_ORDER};  // array containing a mapping of digital pins
byte analogueInputMapping[NUM_AI] = {ANALOGUE_PIN_ORDER};  // array containing a mapping of analogue pins
byte digitalInputs[NUM_DI];  // the current state of the digital inputs
byte analogueInputs[NUM_AI];  // the current value of the analogue inputs
byte tempDigitalInput;  // variable to hold temporary digital reads
byte tempAnalogueInput;  // variable to hold temporary analogue values
byte i = 0;
byte digitalOffset = 0;
byte analogueDiff = 0;  // variable to hold difference between current and new analogue input values
boolean analogueInputChanging[NUM_AI];  // flag to indicate that an analogue input is changing
unsigned long analogueInputTimer[NUM_AI];  // time the analogue input was last moved

#ifdef DEBUG
unsigned long loopTime = 0;
unsigned long serialSendTime = 0;
#endif

void setup()
{
  #ifdef FASTADC
    sbi(ADCSRA,ADPS2) ;     // set prescale to 16
    cbi(ADCSRA,ADPS1) ;
    cbi(ADCSRA,ADPS0) ;
  #endif
  Serial.begin(115200);
  for (i = 0; i < NUM_DI; i++)   // initialize each input
  {
    pinMode(digitalInputMapping[i], INPUT);    // set the pin direction to input
    if (digitalInputMapping[i] != LED_PIN)
    {
      digitalWrite(digitalInputMapping[i], HIGH);   // enable the pull-up resistor
    }
    digitalInputs[i] = digitalRead(digitalInputMapping[i]);   // initialize the digital state with a read
  }
  
  
  for (i = 0; i < NUM_AI; i++)  // initialize each analogue input channel
  {
    pinMode(analogueInputMapping[i], INPUT);      // set the pin direction to input
    analogueInputs[i] = analogRead(analogueInputMapping[i]);    // initialize the analogue value with a read
    analogueInputChanging[i] = false;   // no analogue inputs are active
    analogueInputTimer[i] = 0;
  }
  #ifdef DEBUG
    serialSendTime = millis();
  #endif
}

void loop() {
  #ifdef DEBUG
    loopTime = micros();
  #endif
    tempDigitalInput = digitalRead(digitalInputMapping[i]);   // read the current state of the digital input and store it for now
    if (digitalInputs[i] != tempDigitalInput)    // check if the last state is different to the current state
    {
      #ifdef DEBOUNCE
      delay(DEBOUNCE_LENGTH);     // wait for a short period of time then take another reading
      if (tempDigitalInput == digitalRead(digitalInputMapping[i]))     // if the second reading is the same as the initial reading it's true
      {
      #endif
        digitalInputs[i] = tempDigitalInput;    // record the new input state
        if (digitalInputs[i] == 0)       // move from high to low
        {
          if (digitalInputMapping[i] != LED_PIN)      // all the digital inputs use pullup resistors except LED
          {
            noteOn(MIDI_CHANNEL, NOTE + digitalOffset, 0x7F); // channel 1, middle C, maximum velocity
          }
          else
          {
            noteOff(MIDI_CHANNEL, NOTE + digitalOffset); // channel 1, middle C
          }
        }
        else    // move from low to high
        {
          if (digitalInputMapping[i] != LED_PIN)   // all the digital inputs use pullup resistors, except LED
          {
            noteOff(MIDI_CHANNEL, NOTE + digitalOffset); // channel 1, middle C
          }
          else
          {
            noteOn(MIDI_CHANNEL, NOTE + digitalOffset, 0x7F); // channel 1, middle C, maximum velocity
          }
        }
      #ifdef DEBOUNCE
      }
      #endif
    }
  }
  
  for (i = 0; i < NUM_AI; i++)
  {
    tempAnalogueInput = analogRead(analogueInputMapping[i]) / 8;    // read the analogue input pin and divide it by 8
    #ifdef ANALOGUE_FILTER
    analogueDiff = abs(tempAnalogueInput - analogueInputs[i]);    // absolute value of the difference between the curent and new values 
    if ((analogueDiff > 0 && analogueInputChanging[i] == true) || analogueDiff >= FILTER_AMOUNT)      // continue if the threshold was exceeded
    {
      if (analogueInputChanging[i] == false || analogueDiff >= FILTER_AMOUNT)
      {
        analogueInputTimer[i] = micros();         // reset the last time the input was moved
        analogueInputChanging[i] = true;         // the analogue input is moving
      }
      else if (micros() - analogueInputTimer[i] > ANALOGUE_INPUT_CHANGE_TIMEOUT)
      {
        analogueInputChanging[i] = false;
      }
      if (analogueInputChanging[i] == true)       // only send data if we know the analogue input is moving
      {
        analogueInputs[i] = tempAnalogueInput;        // record the new analogue value
        controlChange(MIDI_CHANNEL, MIDI_CC + i, analogueInputs[i]);       // send the analogue value out on the MIDI
      }
    }
    #else
    if (analogueInputs[i] != tempAnalogueInput)
    {
      analogueInputs[i] = tempAnalogueInput;        // record the new analogue value
      controlChange(MIDI_CHANNEL, MIDI_CC + i, analogueInputs[i]);      // send the analogue value out on the MIDI
    }
    #endif
  }
  #ifdef DEBUG
  loopTime = micros() - loopTime;
  if (millis() - serialSendTime > 1000)   // print the loop time once per second
  {
    Serial.print("Loop execution time (us): ");
    Serial.println(loopTime);
    serialSendTime = millis();
  }
  #endif
}

void noteOn(byte channel, byte pitch, byte velocity) {   // send a MIDI note
  channel += 0x90 - 1;
  if (channel >= 0x90 && channel <= 0x9F)   // ensure we're between channels 1 and 16
  {
    #ifdef DEBUG
      Serial.print("Button pressed: ");
      Serial.println(pitch);
    #else
      Serial.write(channel);
      Serial.write(pitch);
      Serial.write(velocity);
    #endif
  }
}

void noteOff(byte channel, byte pitch) { // send a MIDI note
  channel += 0x80 - 1;
  if (channel >= 0x80 && channel <= 0x8F)  // ensure we're between channels 1 and 16
  {
    #ifdef DEBUG
      Serial.print("Button released: ");
      Serial.println(pitch);
    #else 
      Serial.write(channel);
      Serial.write(pitch);
      Serial.write((byte)0x00);
    #endif
  }
}

void controlChange(byte channel, byte control, byte value) {  // send MIDI message
  channel += 0xB0 - 1;
  if (channel >= 0xB0 && channel <= 0xBF)    // ensure we're between channels 1 and 16
  {
    #ifdef DEBUG
      Serial.print(control - MIDI_CC);
      Serial.print(": ");
      Serial.println(value);
    #else
      Serial.write(channel);
      Serial.write(control);
      Serial.write(value);
    #endif
  }
}
