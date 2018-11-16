var myData;
var url;

var lat;

var space_station;
var starry_night;
var stargazing;

var myX;
var movingVar;

function setup() {

	createCanvas(600,600);

	//LOADING IMAGES
	space_station = loadImage("assets/space_station.png");
	starry_night = loadImage("assets/starrynight.png");
	couple = loadImage("assets/couple.png");

	url = "http://api.open-notify.org/iss-now.json";

	setInterval(queryNewData, 10);

	myX = -190;
	movingVar = 0.1;
    
}

function draw(){

	//STARRY NIGHT IMAGE
	image(starry_night,myX,0,800,600);

	myX += movingVar;

	if(myX <= -200){
		movingVar *= -1;
	}
	if(myX >= 0){
		movingVar *= -1;
	}

	//COUPLE SITTING ON HILL IMAGE
	image(couple,0,350,600,250);
	
	//LATITUDE RANGES FROM -80 TO 80
	var mappedPos = map(lat, -80, 80, -300, width+300);

	//SPACE STATION IMAGE
	image(space_station, mappedPos, height/6, space_station.width/15, space_station.height/15);

}

//CALLBACK FUNCTION FROM LOADJSON
function callBack(myData){

	console.log(myData);

	lat = myData.iss_position.latitude;
	console.log(lat);

}

function queryNewData(){

	myData = loadJSON(url, callBack);

}