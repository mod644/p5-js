let capture;
let voids;
let bunny;
let hap;
let people;
let imagine;
let theta = 0;

function preload(){
  voids = loadImage('voids/void0.jpg');
  bunny = loadImage('voids/void1.jpg');
  hap = loadImage('voids/void2.jpg');
  people = loadImage('voids/void3.jpg');
  imagine = loadImage('voids/void4.jpg');
}

function setup() {
  createCanvas(794, 794, WEBGL);
  capture = createCapture(VIDEO);
  capture.hide();
}


function draw() {
  background(255);
  
  translate(-100, -50, 0);
  push();
  rotateZ(theta * mouseX * 0.001);
  rotateX(theta * mouseX * 0.001);
  rotateY(theta * mouseX * 0.002);
  strokeWeight(1);
  stroke(51);
  texture(capture);
  sphere(200);
  pop();
  
  translate(350, 0, 0);
  push();
  rotateZ(theta * 0.1);
  rotateX(theta * 0.1);
  rotateY(theta * 0.1);
  noStroke();
  texture(bunny);
  box(200, 200, 200);
  pop();
  
  translate(-550, -220, 0);
  push();
  rotateZ(theta * 0.1);
  rotateX(theta * 0.1);
  rotateY(theta * 0.1);
  noStroke();
  texture(voids);
  box(100, 100, 100);
  pop();
  
  translate(500, -30, 0);
  push();
  rotateZ(theta * 0.001);
  rotateX(theta *  0.001);
  rotateY(theta * mouseY *0.001);
  noStroke();
  texture(hap);
  box(100, 100, 100);
  pop();
  
  translate(-150, 550, 20);
  push();
  rotateZ(theta * 0.001);
  rotateX(theta * mouseY* 0.001);
  rotateY(theta *  0.001);
  noStroke();
  texture(people);
  plane(150);
  pop();
  
  translate(-250, 20, 0);
  push();
  rotateZ(theta * 0.01);
  rotateX(theta  * 0.01);
  rotateY(theta *  0.02);
  noStroke();
  texture(imagine);
  box(100, 100, 100);
  pop();
  
  theta += 0.05;
}