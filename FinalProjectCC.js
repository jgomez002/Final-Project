//images
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
//dialouge elements
var dia1 = [];
var diaframe;
var dia2 = [];
var dia3 = [];
var dia4 = [];
var dia5 = [];
var t = 0;
var w,h;
var index=0;
//sounds
var cute;
var creepy;
var goodbye;



function preload (){
	openscene = loadImage ('data/openscreen1.png')
	titletext = loadFont ('data/Sabo-Filled.otf')
	diatext = loadFont ('data/ConnectionIi-2wj8.otf')
	textbox = loadImage ('data/frame-2.png')
	enterbox = loadAnimation ('data/enter_001.png','data/enter_002.png')
	room1 = loadImage ('data/room.png')
	char1 = loadImage ('data/ch_002.png')
	charm = loadAnimation ('data/ch_001.png','data/ch_004.png')
	dia1 = loadStrings('data/dia1.txt');
	diaframe = loadImage ('data/frame04.png');
	dia2 = loadStrings ('data/dia2.txt');
	dia3 = loadStrings('data/dia3.txt');
	dia4 = loadStrings('data/dia4.txt');
	dia5 = loadStrings('data/dia5.txt');
	flowerforyou = loadImage('data/flowerforyou.gif');
	cute = loadSound('data/sound1.mp3');
	creppy = loadSound('data/sound2.mp3');
	goodbye = loadSound('data/sound4.mp3');
}

function setup() {
createCanvas (windowWidth, windowHeight); 
	background(0);
//video = createCapture(VIDEO);
video = createCapture(
    {
      audio: false,
      video: {
        width: w,
        height: h,
      },
    }
	);
	video.hide();
}


function keyPressed()
{
	if (keyCode == BACKSPACE){
		console.log("sucess");
		print(dia4);
		creppy.stop();
		goodbye.play();
	}
	
	if (keyCode === RETURN){
		console.log("sucess");
		print(dia3);
		creppy.play();
	}		
	if (keyCode === DELETE){
		
		console.log("sucess");
		print(dia3);
	}		
	if (key === 'f' ){
		console.log("sucess");
		save('flowerforyou.gif');
		save('dia5.txt');
		
}
}
	
console.log('hehe that enter button doesnt work');

function draw() {
//print(dia1);
if (millis()>0 && millis()<10000){
cute.play();
scene1();

enterbox.frameDelay = 27;
animation(enterbox, width*2/5-30, height*3/4);
textFont(diatext);
stroke(0);
textSize(20);
textAlign(CENTER);
text("just wait 10 seconds",width*2/5-30, height*3/4+100 );
textSize(45);
fill(0);
noStroke();
//strokeWeight(5);
textFont(titletext);
text ("hello??", width*5/7,200);
fill (255);
text("hello??",width*5/7-4,200)
image (textbox,width*5/7,190, 400,250); 
//scene2();
}
if (millis()>10000 && millis()<30000){
	cute.stop();
  scene2();
}
if (millis()>30000){
	scene3();
	/*
if (millis()>30000){
scene3();
*/
}

function scene1 (){
imageMode (CENTER);
image(openscene, width/2, height/2, width*3/4,height);
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
	
	
/*
	for (var i=0; i<15;i++){
		text(dia1[i],width/2, height*3/4+100);
		i++;
	}
*/
				 

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
if (millis()>22000 && millis ()<25000){
		
		image(video,width/8,height/2,500,400);
	textFont(diatext);
fill (255);
stroke(0);
textSize(20);
textAlign(CENTER);
		text("ohh I can sense and kinda of see you now..",width/2, height*3/4+100 );
	
}
if (millis()>25000 && millis ()<28000){
	//image(video,)
textFont(diatext);
fill (255);
stroke(0);
textSize(20);
textAlign(CENTER);
		text("Well... hi I guess, can you help me out?.",width/2, height*3/4+100);
	}
if (millis()>28000 && millis ()<30000){
	fill(0);
	rectMode(CENTER);
	rect(width/2,height/2,windowWidth,windowHeight);
}
/*
if (millis()>30000){
textFont(titletext);
fill (255);
stroke(0);
textSize(20);
textAlign(CENTER);
	text("part 1 Finished",width/2, height/2);
	text("prt 2: dream sequence",width/2, height/2+30);	
}
*/
}

function scene3(){
imageMode (CENTER);
image(room1,width/2,height/2,width*3/4,height);	
image(diaframe,width/2,height*5/6,width*3/5,150);
//video = createCapture(VIDEO);
textFont(diatext);
fill (255);
stroke(0);
textSize(25);
textAlign(CENTER);
if (millis()>30000 && millis()<30750){
	
	text(dia2[0],width/2,height*5/6);
}	
	if(millis()>30750 && millis()<3700){
			text(dia2[1],width/2,height*5/6);
		
	}
if(millis()>31700 && millis()<33000){
			text(dia2[2],width/2,height*5/6);
	}
if(millis()>33000 && millis()<34700){
			text(dia2[3],width/2,height*5/6);
	}	
if(millis()>34700 && millis()<35200){
			text(dia2[4],width/2,height*5/6);
	image(video,707,360,65,40);
	//video.show()
	}	
if(millis()>35200 && millis()<36000){
			text(dia2[5],width/2,height*5/6);
	image(video,707,360,65,40);
	//video.show()
	}
if(millis()>36000 && millis()<37000){
			text(dia2[6],width/2,height*5/6);
	image(video,707,360,65,40);
	//video.show()
	}	
if(millis()>37000 && millis()<38000){
			text(dia2[9],width/2,height*5/6);
	image(video,707,360,65,40);
	//video.show()
	}	
if(millis()>38000 && millis()<8700){
			text(dia2[10],width/2,height*5/6);
	image(video,707,360,65,40);
	//video.show()
	}
if(millis()>38700 && millis()<39700){
			text(dia2[11],width/2,height*5/6);
	video.hide();
}	
if(millis()>39700 && millis()<40900){
			text(dia2[12],width/2,height*5/6);
	
}
if(millis()>40900 && millis()<42700){
			text(dia2[13],width/2,height*5/6);
}
if(millis()>42700 && millis()<44000){
			text(dia2[14],width/2,height*5/6);
}
	if(millis()>44000 && millis()<45500){
			text(dia2[15],width/2,height*5/6);
}
if(millis()>15500 && millis()<17000){
			text(dia2[16],width/2,height*5/6);
	  video.hide();

  
}
if(millis()>47000 && millis()<48700){
			text(dia2[17],width/2,height*5/6);
}
if(millis()>48700){
	textSize(30);
		text("Open console.log to keep talking to me!!",width/2,height*5/6);
		textSize(15);
		text("press return",width/2,height*5/6+25);
	
}	
}

}



	





	

