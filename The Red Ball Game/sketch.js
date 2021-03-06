//THE RED BALL GAME (the game of unfairness)
//created by: Kevin Ferreira
//Midterm Project

var ballX;  //RED BALL X-COORDINATE
var ballY;  //RED BALL Y-COORDINATE
var levelNumber;  //LEVEL NUMBER COUNTER

var spike1X;  //SPIKES 1-10 X-COORDINATES (FOR EACH LEVEL)
var spike2X;
var spike3X;
var spike4X;
var spike5X;
var spike6X;
var spike7X;
var spike8X;
var spike9X;
var spike10X;

var spike1Y;  //SPIKES 1-10 Y-COORDINATES (FOR EACH LEVEL)
var spike2Y;
var spike3Y;
var spike4Y;
var spike5Y;
var spike6Y;
var spike7Y;
var spike8Y;
var spike9Y;
var spike10Y;

var textLine1;  //LINES OF TEXT 1-4
var textLine2;
var textLine3;
var textLine4;

var brick;  //VARIABLE FOR BRICK TO CHANGE COORDINATES

var torch1;  //VARIABLE FOR TORCHES 1-2 TO CHANGE COORDINATES
var torch2;

function setup(){

  //INITIAL COORDINATES

  //TORCHES

  torch1 = 175;
  torch2 = 375;

  //RED BALL
  
  ballX = 30;
  ballY = 40;

  //SPIKES
  
  spike1X = 100;
  spike2X = -50;
  spike3X = -50;
  spike4X = -50;
  spike5X = -50;
  spike6X = -50;
  spike7X = -50;
  spike8X = -50;
  spike9X = -50;
  spike10X = -50;
  
  spike1Y = 50;
  spike2Y = 0;
  spike3Y = 50;
  spike4Y = 0;
  spike5Y = 50;
  spike6Y = 0;
  spike7Y = 50;
  spike8Y = 0;
  spike9Y = 50;
  spike10Y = 0;

  //SCROLLING TEXT

  textLine1 = 30;
  textLine2 = 60;
  textLine3 = 90;
  textLine4 = 120;

  //BRICKS

  brick = 25;
  
  //LEVEL NUMBER COUNTER

  levelNumber = 1;

  //CREATING CANVAS
  createCanvas(500,50);
  background(200);
  
}

function draw(){

  //BACKGROUND OF BRICKS

  background(200);
  fill(150);
  rect(0,16.666666666,500,2);
  rect(0,33.333333333,500,2);

  rect(-25+brick,0,2,16.666666666);
  rect(25+brick,0,2,16.666666666);
  rect(75+brick,0,2,16.666666666);
  rect(125+brick,0,2,16.666666666);
  rect(175+brick,0,2,16.666666666);
  rect(225+brick,0,2,16.666666666);
  rect(275+brick,0,2,16.666666666);
  rect(325+brick,0,2,16.666666666);
  rect(375+brick,0,2,16.666666666);
  rect(425+brick,0,2,16.666666666);
  rect(475+brick,0,2,16.666666666);

  rect(-25+brick,33.333333333,2,16.666666666);
  rect(25+brick,33.333333333,2,16.666666666);
  rect(75+brick,33.333333333,2,16.666666666);
  rect(125+brick,33.333333333,2,16.666666666);
  rect(175+brick,33.333333333,2,16.666666666);
  rect(225+brick,33.333333333,2,16.666666666);
  rect(275+brick,33.333333333,2,16.666666666);
  rect(325+brick,33.333333333,2,16.666666666);
  rect(375+brick,33.333333333,2,16.666666666);
  rect(425+brick,33.333333333,2,16.666666666);
  rect(475+brick,33.333333333,2,16.666666666);

  rect(0+brick,16.666666666,2,16.666666666);
  rect(50+brick,16.666666666,2,16.666666666);
  rect(100+brick,16.666666666,2,16.666666666);
  rect(150+brick,16.666666666,2,16.666666666);
  rect(200+brick,16.666666666,2,16.666666666);
  rect(250+brick,16.666666666,2,16.666666666);
  rect(300+brick,16.666666666,2,16.666666666);
  rect(350+brick,16.666666666,2,16.666666666);
  rect(400+brick,16.666666666,2,16.666666666);
  rect(450+brick,16.666666666,2,16.666666666);
  rect(500+brick,16.666666666,2,16.666666666);

  //LEVEL SIGN

  fill(181, 101, 29);
  rect(7.5,2.5,70,25);

  fill(102, 61, 25);
  rect(37.5,27.5,10,25);

  //TORCHES

  fill(165,42,42);
  rect(torch1,17.5,7.5,15);
  rect(torch2,17.5,7.5,15);

  fill(255,228,196);
  rect(torch1,15,7.5,2.5);
  rect(torch2,15,7.5,2.5);

  fill(255,165,0);
  rect(torch1,10,7.5,5);
  rect(torch2,10,7.5,5);

  //LEVEL COUNTER FOR SIGN

  fill(0);
  textSize(18);
  textStyle(BOLD);
  text("Level " + levelNumber, 12, 21.5);
  textStyle(NORMAL);

  //RED BALL

  fill(220,20,60);
  noStroke();
  ellipse(ballX,ballY,20,20);

  if (keyIsDown(LEFT_ARROW)){
    ballX -= 3.5;
  }
  if (keyIsDown(RIGHT_ARROW)){
    ballX += 3.5;
  }
  
  if (ballX <= 0){
    ballX = 0;
  }

  //SPIKES

  fill(100);
  triangle(spike1X,spike1Y,spike1X+20,spike1Y,spike1X+10,30);
  triangle(spike2X,spike2Y,spike2X+20,spike2Y,spike2X+10,20);
  triangle(spike3X,spike3Y,spike3X+20,spike3Y,spike3X+10,30);
  triangle(spike4X,spike4Y,spike4X+20,spike4Y,spike4X+10,20);
  triangle(spike5X,spike5Y,spike5X+20,spike5Y,spike5X+10,30);
  triangle(spike6X,spike6Y,spike6X+20,spike6Y,spike6X+10,20);
  triangle(spike7X,spike7Y,spike7X+20,spike7Y,spike7X+10,30);
  triangle(spike8X,spike8Y,spike8X+20,spike8Y,spike8X+10,20);
  triangle(spike9X,spike9Y,spike9X+20,spike9Y,spike9X+10,30);
  triangle(spike10X,spike10Y,spike10X+20,spike10Y,spike10X+10,20);

  //TITLE SCREEN/LEVEL 1
  
  if (levelNumber == 1){
    brick = 25;
    if (ballX == 30){
      background(0);
      textSize(25);
      textStyle(BOLD);
      fill(220,20,60);
      text("THE RED BALL GAME",110,25);
      textStyle(NORMAL);
      textSize(12.5);
      fill(255);
      text('PRESS "RIGHT ARROW KEY" TO START',125,40);
    }
    if (ballX >= 500){
      ballX = 0;
      levelNumber += 1;
      spike1X = random(100,460);
      spike2X = random(100,460);

      torch1 = random(100,275);
      torch2 = random(300,480);
    }
  }

  //LEVEL 2 (random spikes, message 2)
  
  if (levelNumber == 2){
    brick = 0;
    if (ballX <= 50){
      background(0);
      textSize(15);
      fill(255);
      text("YOU DON'T KNOW WHAT YOU GOT YOURSELF INTO.",50,30);
    }
    if (ballX >= 500){
      ballX = 0;
      levelNumber += 1;
      spike1X = random(100,460);
      spike2X = random(100,460);
      spike3X = random(100,460);

      torch1 = random(100,275);
      torch2 = random(300,480);
    }
  }

  //LEVEL 3 (random spikes, message 3)
  
  if (levelNumber == 3){
    brick = 25;
    if (ballX <= 50){
      background(0);
      textSize(20);
      fill(255);
      text("YOU KNOW THERE'S NO POINT... RIGHT?",50,30);
    }
    if (ballX >= 500){
      ballX = 0;
      levelNumber += 1;
      spike1X = random(100,460);
      spike2X = random(100,460);
      spike3X = random(100,460);
      spike4X = random(100,460);

      torch1 = random(100,275);
      torch2 = random(300,480);
    }
  }

  //LEVEL 4 (random spikes, message 4)
  
  if (levelNumber == 4){
    brick = 0;
    if (ballX <= 50){
      background(0);
      textSize(20);
      fill(255);
      text("WHY ARE YOU EVEN TRYING?",100,30);
    }
    if (ballX >= 500){
      ballX = 0;
      levelNumber += 1;
      spike1X = random(100,460);
      spike2X = random(100,460);
      spike3X = random(100,460);
      spike4X = random(100,460);
      spike5X = random(100,460);

      torch1 = random(100,275);
      torch2 = random(300,480);
    }
  }

  //LEVEL 5 (random spikes, message 5)
  
  if (levelNumber == 5){
    brick = 25;
    if (ballX <= 50){
      background(0);
      textSize(20);
      fill(255);
      text("JUST GIVE UP ALREADY...",100,30);
    }
    if (ballX >= 500){
      ballX = 0;
      levelNumber += 1;
      spike1X = random(100,460);
      spike2X = random(100,460);
      spike3X = random(100,460);
      spike4X = random(100,460);
      spike5X = random(100,460);
      spike6X = random(100,460);

      torch1 = random(100,275);
      torch2 = random(300,480);
    }
  }

  //LEVEL 6 (random spikes, message 6)
  
  if (levelNumber == 6){
    brick = 0;
    if (ballX <= 50){
      background(0);
      textSize(20);
      fill(255);
      text("CONGRATULATIONS! YOU WON!",100,30);
    }
    if (ballX >= 500){
      ballX = 0;
      levelNumber += 1;
      spike1X = random(100,460);
      spike2X = random(100,460);
      spike3X = random(100,460);
      spike4X = random(100,460);
      spike5X = random(100,460);
      spike6X = random(100,460);
      spike7X = random(100,460);

      torch1 = random(100,275);
      torch2 = random(300,480);
    }
  }

  //LEVEL 7 (random spikes, message 7)
  
  if (levelNumber == 7){
    brick = 25;
    if (ballX <= 50){
      background(0);
      textSize(20);
      fill(255);
      text("YEAH... JUST KIDDING.",100,30);
    }
    if (ballX >= 500){
      ballX = 0;
      levelNumber += 1;
      spike1X = random(100,460);
      spike2X = random(100,460);
      spike3X = random(100,460);
      spike4X = random(100,460);
      spike5X = random(100,460);
      spike6X = random(100,460);
      spike7X = random(100,460);
      spike8X = random(100,460);

      torch1 = random(100,275);
      torch2 = random(300,480);
    }
  }

  //LEVEL 8 (random spikes, message 8)
  
  if (levelNumber == 8){
    brick = 0;
    if (ballX <= 50){
      background(0);
      textSize(15);
      fill(255);
      text("REACHING THE END? YEAH, I DON'T THINK SO.",50,30);
    }
    if (ballX >= 500){
      ballX = 0;
      levelNumber += 1;
      spike1X = random(100,460);
      spike2X = random(100,460);
      spike3X = random(100,460);
      spike4X = random(100,460);
      spike5X = random(100,460);
      spike6X = random(100,460);
      spike7X = random(100,460);
      spike8X = random(100,460);
      spike9X = random(100,460);

      torch1 = random(100,275);
      torch2 = random(300,480);
    }
  }

  //LEVEL 9 (random spikes, message 9)
  
  if (levelNumber == 9){
    brick = 25;
    if (ballX <= 50){
      background(0);
      textSize(20);
      fill(255);
      text("JUST STOP ALREADY, THIS IS SAD...",50,30);
    }
    if (ballX >= 500){
      ballX = 0;
      levelNumber += 1;
      spike1X = random(100,460);
      spike2X = random(100,460);
      spike3X = random(100,460);
      spike4X = random(100,460);
      spike5X = random(100,460);
      spike6X = random(100,460);
      spike7X = random(100,460);
      spike8X = random(100,460);
      spike9X = random(100,460);
      spike10X = random(100,460);

      torch1 = random(100,275);
      torch2 = random(300,480);
    }
  }

  //LEVEL 10 (congratulations screen)
  
  if (levelNumber == 10){
    brick = 0;
    if (ballX >= 500){
      winScreen();
    }
  }

  //SPIKE CONSTRAINTS FOR RED BALL

  //SPIKE 1
  
  if ((ballX-10) < (spike1X+20) && (ballX+10) > (spike1X+20) && ballY == (spike1Y-10)){
    gameOver();
  }
  if ((ballX+10) > (spike1X) && (ballX-10) < (spike1X) && ballY == (spike1Y-10)){
    gameOver();
  }

  //SPIKE 2
  
  if ((ballX-10) < (spike2X+20) && (ballX+10) > (spike2X+20) && ballY == (spike2Y+10)){
    gameOver();
  }
  if ((ballX+10) > (spike2X) && (ballX-10) < (spike2X) && ballY == (spike2Y+10)){
    gameOver();
  }

  //SPIKE 3
  
  if ((ballX-10) < (spike3X+20) && (ballX+10) > (spike3X+20) && ballY == (spike3Y-10)){
    gameOver();
  }
  if ((ballX+10) > (spike3X) && (ballX-10) < (spike3X) && ballY == (spike3Y-10)){
    gameOver();
  }

  //SPIKE 4
  
  if ((ballX-10) < (spike4X+20) && (ballX+10) > (spike4X+20) && ballY == (spike4Y+10)){
    gameOver();
  }
  if ((ballX+10) > (spike4X) && (ballX-10) < (spike4X) && ballY == (spike4Y+10)){
    gameOver();
  }

  //SPIKE 5
  
  if ((ballX-10) < (spike5X+20) && (ballX+10) > (spike5X+20) && ballY == (spike5Y-10)){
    gameOver();
  }
  if ((ballX+10) > (spike5X) && (ballX-10) < (spike5X) && ballY == (spike5Y-10)){
    gameOver();
  }

  //SPIKE 6
  
  if ((ballX-10) < (spike6X+20) && (ballX+10) > (spike6X+20) && ballY == (spike6Y+10)){
    gameOver();
  }
  if ((ballX+10) > (spike6X) && (ballX-10) < (spike6X) && ballY == (spike6Y+10)){
    gameOver();
  }

  //SPIKE 7
  
  if ((ballX-10) < (spike7X+20) && (ballX+10) > (spike7X+20) && ballY == (spike7Y-10)){
    gameOver();
  }
  if ((ballX+10) > (spike7X) && (ballX-10) < (spike7X) && ballY == (spike7Y-10)){
    gameOver();
  }

  //SPIKE 8
  
  if ((ballX-10) < (spike8X+20) && (ballX+10) > (spike8X+20) && ballY == (spike8Y+10)){
    gameOver();
  }
  if ((ballX+10) > (spike8X) && (ballX-10) < (spike8X) && ballY == (spike8Y+10)){
    gameOver();
  }

  //SPIKE 9
  
  if ((ballX-10) < (spike9X+20) && (ballX+10) > (spike9X+20) && ballY == (spike9Y-10)){
    gameOver();
  }
  if ((ballX+10) > (spike9X) && (ballX-10) < (spike9X) && ballY == (spike9Y-10)){
    gameOver();
  }

  //SPIKE 10
  
  if ((ballX-10) < (spike10X+20) && (ballX+10) > (spike10X+20) && ballY == (spike10Y+10)){
    gameOver();
  }
  if ((ballX+10) > (spike10X) && (ballX-10) < (spike10X) && ballY == (spike10Y+10)){
    gameOver();
  }

  //LEVEL 1 (random spike for switching sides)
  
  if (levelNumber == 1){
    if (keyIsDown(UP_ARROW)){
      if (ballY == 40){
        ballY = 10;
        spike1X = random(100,460);
      }
    }
    if (keyIsDown(DOWN_ARROW)){
      if (ballY == 10){
        ballY = 40;
        spike1X = random(100,460);
      }
    }
  }

  //LEVEL 2 (random spikes for switching sides)
  
  if (levelNumber == 2){
    if (keyIsDown(UP_ARROW)){
      if (ballY == 40){
      ballY = 10;
      spike1X = random(100,460);
      spike2X = random(100,460);
      }
    }
    if (keyIsDown(DOWN_ARROW)){
      if (ballY == 10){
      ballY = 40;
      spike1X = random(100,460);
      spike2X = random(100,460);
      }
    }
  }

  //LEVEL 3 (random spikes for switching sides)
  
  if (levelNumber == 3){
    if (keyIsDown(UP_ARROW)){
      if (ballY == 40){
      ballY = 10;
      spike1X = random(100,460);
      spike2X = random(100,460);
      spike3X = random(100,460);
      }
    }
    if (keyIsDown(DOWN_ARROW)){
      if (ballY == 10){
      ballY = 40;
      spike1X = random(100,460);
      spike2X = random(100,460);
      spike3X = random(100,460);
      }
    }
  }

  //LEVEL 4 (random spikes for switching sides)
  
  if (levelNumber == 4){
    if (keyIsDown(UP_ARROW)){
      if (ballY == 40){
      ballY = 10;
      spike1X = random(100,460);
      spike2X = random(100,460);
      spike3X = random(100,460);
      spike4X = random(100,460);
      }
    }
    if (keyIsDown(DOWN_ARROW)){
      if (ballY == 10){
      ballY = 40;
      spike1X = random(100,460);
      spike2X = random(100,460);
      spike3X = random(100,460);
      spike4X = random(100,460);
      }
    }
  }

  //LEVEL 5 (random spikes for switching sides)

  if (levelNumber == 5){
    if (keyIsDown(UP_ARROW)){
      if (ballY == 40){
      ballY = 10;
      spike1X = random(100,460);
      spike2X = random(100,460);
      spike3X = random(100,460);
      spike4X = random(100,460);
      spike5X = random(100,460);
      }
    }
    if (keyIsDown(DOWN_ARROW)){
      if (ballY == 10){
      ballY = 40;
      spike1X = random(100,460);
      spike2X = random(100,460);
      spike3X = random(100,460);
      spike4X = random(100,460);
      spike5X = random(100,460);
      }
    }
  }

  //LEVEL 6 (random spikes for switching sides)
  
  if (levelNumber == 6){
    if (keyIsDown(UP_ARROW)){
      if (ballY == 40){
      ballY = 10;
      spike1X = random(100,460);
      spike2X = random(100,460);
      spike3X = random(100,460);
      spike4X = random(100,460);
      spike5X = random(100,460);
      spike6X = random(100,460);
      }
    }
    if (keyIsDown(DOWN_ARROW)){
      if (ballY == 10){
      ballY = 40;
      spike1X = random(100,460);
      spike2X = random(100,460);
      spike3X = random(100,460);
      spike4X = random(100,460);
      spike5X = random(100,460);
      spike6X = random(100,460);
      }
    }
  }

  //LEVEL 7 (random spikes for switching sides) 

  if (levelNumber == 7){
    if (keyIsDown(UP_ARROW)){
      if (ballY == 40){
      ballY = 10;
      spike1X = random(100,460);
      spike2X = random(100,460);
      spike3X = random(100,460);
      spike4X = random(100,460);
      spike5X = random(100,460);
      spike6X = random(100,460);
      spike7X = random(100,460);
      }
    }
    if (keyIsDown(DOWN_ARROW)){
      if (ballY == 10){
      ballY = 40;
      spike1X = random(100,460);
      spike2X = random(100,460);
      spike3X = random(100,460);
      spike4X = random(100,460);
      spike5X = random(100,460);
      spike6X = random(100,460);
      spike7X = random(100,460);
      }
    }
  }

  //LEVEL 8 (random spikes for switching sides)
  
  if (levelNumber == 8){
    if (keyIsDown(UP_ARROW)){
      if (ballY == 40){
      ballY = 10;
      spike1X = random(100,460);
      spike2X = random(100,460);
      spike3X = random(100,460);
      spike4X = random(100,460);
      spike5X = random(100,460);
      spike6X = random(100,460);
      spike7X = random(100,460);
      spike8X = random(100,460);
      }
    }
    if (keyIsDown(DOWN_ARROW)){
      if (ballY == 10){
      ballY = 40;
      spike1X = random(100,460);
      spike2X = random(100,460);
      spike3X = random(100,460);
      spike4X = random(100,460);
      spike5X = random(100,460);
      spike6X = random(100,460);
      spike7X = random(100,460);
      spike8X = random(100,460);
      }
    }
  }

  //LEVEL 9 (random spikes for switching sides)
  
  if (levelNumber == 9){
    if (keyIsDown(UP_ARROW)){
      if (ballY == 40){
      ballY = 10;
      spike1X = random(100,460);
      spike2X = random(100,460);
      spike3X = random(100,460);
      spike4X = random(100,460);
      spike5X = random(100,460);
      spike6X = random(100,460);
      spike7X = random(100,460);
      spike8X = random(100,460);
      spike9X = random(100,460);
      }
    }
    if (keyIsDown(DOWN_ARROW)){
      if (ballY == 10){
      ballY = 40;
      spike1X = random(100,460);
      spike2X = random(100,460);
      spike3X = random(100,460);
      spike4X = random(100,460);
      spike5X = random(100,460);
      spike6X = random(100,460);
      spike7X = random(100,460);
      spike8X = random(100,460);
      spike9X = random(100,460);
      }
    }
  }

  //LEVEL 10 (random spikes for switching sides)
  
  if (levelNumber == 10){
    if (keyIsDown(UP_ARROW)){
      if (ballY == 40){
      ballY = 10;
      spike1X = random(100,460);
      spike2X = random(100,460);
      spike3X = random(100,460);
      spike4X = random(100,460);
      spike5X = random(100,460);
      spike6X = random(100,460);
      spike7X = random(100,460);
      spike8X = random(100,460);
      spike9X = random(100,460);
      spike10X = random(100,460);
      }
    }
    if (keyIsDown(DOWN_ARROW)){
      if (ballY == 10){
      ballY = 40;
      spike1X = random(100,460);
      spike2X = random(100,460);
      spike3X = random(100,460);
      spike4X = random(100,460);
      spike5X = random(100,460);
      spike6X = random(100,460);
      spike7X = random(100,460);
      spike8X = random(100,460);
      spike9X = random(100,460);
      spike10X = random(100,460);
      }
    }
  }
}

function mousePressed(){  //RESET GAME WITH MOUSE CLICK
  setup();
}

function gameOver(){  //GAME OVER SCREEN

  //SCROLLING HAHAHAHAHAHAHAHAHAHAHA

  background(0);
  fill(255);
  textSize(30);
  textLine1 -= 5;
  textLine2 -= 5;
  textLine3 -= 5;
  textLine4 -= 5;
  text("HAHAHAHAHAHAHAHAHAHAHAH",10,textLine1);
  text("AHAHAHAHAHAHAHAHAHAHAHA",10,textLine2);
  text("HAHAHAHAHAHAHAHAHAHAHAH",10,textLine3);
  text("AHAHAHAHAHAHAHAHAHAHAHA",10,textLine4);

  if (textLine1 == 0){
    textLine1 = textLine4+30;
  }
  if (textLine2 == 0){
    textLine2 = textLine1+30;
  }
  if (textLine3 == 0){
    textLine3 = textLine2+30;
  }
  if (textLine4 == 0){
    textLine4 = textLine3+30;
  }

  //TRY AGAIN BUTTON

  fill(255);
  rect(200,10,95,30);

  fill(0);
  textSize(15);
  text("try again?",215,30);

  //CONSTRAINTS TO KEEP BALL IN PLACE

  spike1X = ballX;
  spike2X = ballX;

  if (ballX > spike1X){
    ballX = spike1X;
  }

  if (ballX < spike1X){
    ballX = spike1X;
  }

}

function winScreen(){  //CONGRATULATIONS SCREEN
  background(0);
  fill(255);
  text("wow, you actually won",150,20);
  textSize(10);
  text("click to play again... if you dare",175,40);
  ballX = 1000000;
}