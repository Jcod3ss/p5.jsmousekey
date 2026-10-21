let x = 320;
let y = 240;
let red = 255;
let green = 100;
let blue = 150;
let aWasPressed = false;
let bWasPressed = false;

function setup(){
  createCanvas(640, 480);
  background(20);
  rectMode(CENTER);
}
function draw(){
  let moving = false;
  let pad = navigator.getGamepads()[0];
  if(pad){
    if(abs(pad.axes[0])> 0.2){
      x = x + pad.axes[0]*6
      moving = true;
    }
  if(abs(pad.axes[1])>0.2){
    y = y + pad.axes[1]*6;
    moving = true;
  }
  x = constrain(x, 0, width);
    y = constrain(y, 0, height);
    
    let bPressed = pad.buttons[1].pressed;
    if(bPressed && !bWasPressed){
      newColor();
    }
 bWasPressed = bPressed;
    let aPressed = pad.buttons[0].pressed;
    if(aPressed && !aWasPressed){
      background(20);
    }
  aWasPressed = aPressed;
  }
  
if(moving){
  drawSqaure();
}
  //intructions
  fill(255);
  textSize(16);
  textAlign(LEFT);
  text("move left joystick", 20,55);
  text("press a to change color", 20, 80);
  text("press b to clear canvas", 20,105);


function drawSqaure(){
  push();
  translate(x,y);
  rotate(random(TWO_PI));
  fill(red,green,blue);
  rect(0,0,30,30);
  pop();
}

function newColor(){
  red = random(255);
  green = random(255);
  blue = (255);
  
}
}