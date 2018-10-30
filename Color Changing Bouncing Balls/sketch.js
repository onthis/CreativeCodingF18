var myBall;
var myBall2;
var myBall3;

function setup() {

	createCanvas(500,500);

	myBall = new Ball(50,100,2,3,75,color(200,5,220));
	myBall2 = new Ball(200,150,2,4,65,color(100,0,50));
	myBall3 = new Ball(400,20,4,5,50,color(200,200,100));


}

function draw() {

	background(200);

	myBall.animate();
	myBall2.animate();
	myBall3.animate();

	myBall.displayBall();
	myBall2.displayBall();
	myBall3.displayBall();

}

function Ball(xVal,yVal,velXVal,velYVal,size,myColor){

	this.x = xVal;
	this.y = yVal;

	this.xVel = velXVal;
	this.yVel = velYVal;

	this.size = size;
	this.sizeStep = 1;

	this.color = myColor;

	this.animate = function(){
		this.x += this.xVel;
		this.y += this.yVel;

		if(this.x <= 0 || this.x > width){
			this.xVel *= -1;
			this.r = random(0,255);
			this.g = random(0,255);
			this.b = random(0,255);

			this.color = color(this.r, this.g, this.b);
		}

		if(this.y <= 0 || this.y > height){
			this.yVel *= -1;
			this.r = random(0,255);
			this.g = random(0,255);
			this.b = random(0,255);

			this.color = color(this.r, this.g, this.b);
		}

		this.size += this.sizeStep;
		if(this.size >= 80 || this.size <= 40){
			this.sizeStep *= -1;
		}

	}

	this.displayBall = function(){
		fill(this.color);
		ellipse(this.x,this.y,this.size,this.size);
	}

};