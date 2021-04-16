function setup() {
  createCanvas(400,400);
 angleMode(DEGREES)
}

function draw() {
  background(0,0,0);  
 translate(200,200)
rotate (-90);
s = second();
m = minute();
h = hour();
sAngle = map(s,0,60,0,360);
mAngle = map(m,0,60,0,360);
hAngle = map(h%12,0,12,0,360);
push();
rotate(sAngle);
strokeWeight(7);
stroke("blue");
line(0,0,100,0);
pop();

push();
rotate(mAngle);
strokeWeight(8);
stroke("yellow");
line(0,0,75,0);
pop();

push();
rotate(hAngle);
strokeWeight(9);
stroke("red");
line(0,0,50,0);
pop(); 

strokeWeight(10);
    noFill();
stroke(255,0,0);

}