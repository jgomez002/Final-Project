
var char1;
var openscene;
var ttext;
var diatext;
var textbox;
var enterbox; 
var room1;
var scene;
var scene1;
var video;


function preload (){
	openscene = loadImage ('data/openscreen.png')
	titletext = loadFont ('data/Sabo-Filled.otf')
	diatext = loadFont ('data/ConnectionIi-2wj8.otf')
	textbox = loadImage ('data/frame.png')
	enterbox = loadAnimation ('data/enter_01.png','data/enter_02.png')
	room1 = loadImage ('data/room.png')
	char1 = loadImage ('data/ch_002.png')
	charm = loadAnimation ('data/ch_001.png','data/ch_004.png')

}

function setup() {
createCanvas (windowWidth*3/4, windowHeight); 
	background(0);
}


function draw() {
scene1();
enterbox.frameDelay = 15;
animation(enterbox, width*2/5, height*3/4);
textFont(diatext);
stroke(0);
textSize(20);
textAlign(CENTER);
text("just wait 10 seconds",width*2/5, height*3/4+100 );
textSize(50);
fill(255);
stroke(0);
strokeWeight(5);
textFont(titletext);
text ("hello??", width*4/5,200);
image (textbox,width*4/5,200, 400,250); 
//scene2();
if (millis()>10000){
  scene2();
}
	/*
if (millis()>30000){
scene3();
*/
}

function scene1 (){
imageMode (CENTER);
image(openscene, width/2, height/2, width,height);
}
	
function scene2(){
background (0);
if (millis()>10000 && millis ()<13000){
animation (charm, width/2,height/2);	
charm.frameDelay = 15;
		}
if (millis()>13000 && millis ()<30000){
image (char1, width/2, height/2);
}
if (millis()>14000 && millis ()<16000){
textFont(diatext);
fill (255);
stroke(0);
textSize(20);
textAlign(CENTER);
text("who is there?",width/2, height*3/4+100 );
}
if (millis()>16000 && millis ()<18000){
textFont(diatext);
fill (255);
stroke(0);
textSize(20);
textAlign(CENTER);
text("I know you're there?",width/2, height*3/4+100 );
	}
if (millis()>18000 && millis ()<22000){
textFont(diatext);
fill (255);
stroke(0);
textSize(20);
textAlign(CENTER);
text("look I'll just assume this is a werid dream",width/2, height*3/4+100 );
	}
if (millis()>22000 && millis ()<26000){
		video = createCapture(VIDEO);
		 //video.hide();
	textFont(diatext);
fill (255);
stroke(0);
textSize(20);
textAlign(CENTER);
		text("ohh I can sense and kinda of see you now..",width/2, height*3/4+100 );
}
if (millis()>26000 && millis ()<30000){
video = createCapture(VIDEO);
video.hide();
textFont(diatext);
fill (255);
stroke(0);
textSize(20);
textAlign(CENTER);
		text("Well... hi I guess, can you help me out?.",width/2, height*3/4+100);
	}
if (millis()>30000){
textFont(titletext);
fill (255);
stroke(0);
textSize(20);
textAlign(CENTER);
	text("part 1 Finished",width/2, height/2);
	text("prt 2: dream sequence",width/2, height/2+30);	
}
}

/* function scene3 (){
	background (0);
if (millis()>30000){
textFont(ttext);
fill (255);
stroke(0);
textSize(20);
textAlign(CENTER);
	text("part 1 Finished",width/2, height/2);
	text("prt 2: dream sequence",width/2, height/2+30);	
}	
}
*/

	





	

