var kick
var kickSound
var snare
var snareSound
var hat
var hatSound
var clap
var clapSound

var studio

var block

class Block {

  constructor(x, y, image, sound) {

    this.x = x;
    this.y = y;

    this.width = 300;
    this.height = 300;

    this.image = image;
    this.sound = sound;

    this.count = 0;

  }

  draw() {

    this.count++;

    push();

      translate(this.x, this.y);

      if (this.count < 20) 

        scale(200 - this.count/20);
      	image(this.image, 0, 0, 250, 250);

    pop();

  }

  check(otherx, othery) {

    if (otherx > this.x && otherx < this.x + this.width){

      if (othery > this.y && othery < this.y + this.height){

        return true;

      }
    }
  }

  play() {

    this.sound.play();

    this.count = 0;

  }
}

function preload() {

	// KICK
  kick = loadImage("assets/kick.png");
	kickSound = loadSound("assets/kick.wav");

	// SNARE
  snare = loadImage("assets/snare.png");
	snareSound = loadSound("assets/snare.wav");

	// HIHAT
  hat = loadImage("assets/hat.png");
	hatSound = loadSound("assets/hat.wav");

	// CLAP
  clap = loadImage("assets/clap.png");
	clapSound = loadSound("assets/clap.wav");

  //STUDIO
  studio = loadImage("assets/studio.jpg");

}


function setup() {

  createCanvas(windowWidth, windowHeight);

  // INITIAL SOUND
  kickSound.play();

  // BLOCKS SETUP
  block = new Block(width/2, height/2+50, kick, kickSound);
  block2 = new Block(width/2-400, height/2+50, snare, snareSound);
  block3 = new Block(width/2, height/2-350, hat, hatSound);
  block4 = new Block(width/2-400, height/2-350, clap, clapSound);

}

function draw() {

  // STUDIO IMAGE
  image(studio, 0, 0, windowWidth, windowHeight);

  // DRAWING BLOCKS
  block.draw();
  block2.draw();
  block3.draw();
  block4.draw();

}

function mousePressed() {

  // CHECK MOUSE PRESSED FOR KICK
	if (block.check(mouseX,mouseY)) {
		block.play()
	}

  // CHECK MOUSE PRESSED FOR SNARE
	if (block2.check(mouseX,mouseY)) {
    	block2.play()
  }

  // CHECK MOUSE PRESSED FOR HIHAT
  if (block3.check(mouseX,mouseY)) {
      block3.play()
  }

  // CHECK MOUSE PRESSED FOR CLAP
  if (block4.check(mouseX,mouseY)) {
      block4.play()
  }

}