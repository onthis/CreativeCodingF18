// MR SUN (OPTICAL ILLUSION?)

// WORKED ON WITH MO

var xPos;
var yPos;
var r;
var g;
var b;

function setup() {

	createCanvas(600,600);
	rectMode(CENTER);

}

function draw() {

	background(135,206,250);

	myShape(mouseX,mouseY);

	noStroke();

}

function myShape(xPos, yPos){

	// FADING ARRAY OF GREEN SPOTS by MO

	for(var j = 0; j < 10; j++){

		var yOffset = (55*j) + 50;

		var green = map(j, 0, 9, 255, 230);

		for(var i = 0; i < 10; i++){

			var xOffset = (55*i) + 50;

			var red = map(i, 0, 9, 25, 0);

			fill(red,green,0);

			ellipse(xOffset, yOffset, 30, 30);
		}
	}

	// ROTATING ELLIPSES by KEVIN

	push();

	translate(300,300);

  	for (var i = 0; i < 20; i++) {

  		fill(r,g,b);

    	ellipse(mouseX-300, mouseY-300, 20, 80);

    	rotate(PI/10);

    }

    pop();

    // SUN BODY by MO & KEVIN

	fill(255,255,0);

	ellipse(300,300,100,100);

	// WHITE PARTS OF SUN by MO & KEVIN

	fill(255);

	rect(285,285,20,40);
	rect(315,285,20,40);

	// BLACK PARTS OF SUN by MO & KEVIN

	fill(0);

	rect(285,285,10,30);
	rect(315,285,10,30);
	ellipse(300,325,40,10);

}

function mouseMoved(){

	r = random(255);
	g = random(255);
	b = 0;

}