  var ho,mi,sec;  
   var hoAngle,miAngle,secAngle; 
    
    
    function setup() {
  createCanvas(800,400);
 angleMode(DEGREES);
}

function draw() {
  background(255,255,255); 

translate(200,200);
rotate(-90);

   ho = hour();
  mi = minute();
  sec = second(); 

secAngle = map(sec,0,60,0,360); 
miAngle = map(mi,0,60,0,360);
hoAngle = map(ho % 12,0,12,0,360);

push();
rotate(secAngle); 
strokeWeight(7);
stroke(255,0,0);
line(0,0,100,0);
pop();

push();
rotate(miAngle);
stroke(0,255,0);
strokeWeight(7);
line(0,0,75,0);
pop();

push();
rotate(hoAngle);
stroke(0,0,255);
strokeWeight(7);
line(0,0,50,0);
pop();

strokeWeight(10);
noFill();

stroke(255,0,0);
arc(0,0,300,300,0,secAngle);

stroke(0,255,0);
arc(0,0,280,280,0,miAngle);

stroke(0,0,255);
arc(0,0,260,260,0,hoAngle);

  drawSprites();
}