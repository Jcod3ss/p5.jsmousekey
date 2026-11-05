let x = 320;
let y = 240;
//colors
let red = 255;
let green = 100;
let blue = 150;


let aWasPressed = false;
let bWasPressed = false;
let xwasPressed = false;

let shape= 0;
let brushSize= 30;

let rainbow = false;
//canvas
function setup(){
  createCanvas(640, 480);
  background(20);
  rectMode(CENTER);
}

function draw(){
  let moving = false;
  let pad = navigator.getGamepads()[0];
  if(pad){
   //move left joystick
    if(abs(pad.axes[0])> 0.2){
      x = x + pad.axes[0]*6
      moving = true;
    }
  if(abs(pad.axes[1])>0.2){
    y = y + pad.axes[1]*6;
    moving = true;
  }
    //stay drawing inside canvas
  x = constrain(x, 0, width);
    y = constrain(y, 0, height);
   
    //b button changes drawing color
    let bPressed = pad.buttons[1].pressed;
    if(bPressed && !bWasPressed){
      newColor();
    }
 bWasPressed = bPressed;
   // a button changes shape
    let aPressed = pad.buttons[0].pressed;
    if(aPressed && !aWasPressed){
     shape = (shape + 1)% 2;
      //background(20);
    }
  
  aWasPressed = aPressed;
    
    // x button changes brush size
    let xPressed = pad.buttons[3].pressed;
    if(xPressed && !xWasPressed){
      brushSize += 10;
      
      //reset brushSize
      if(brushSize > 70){
        brushSize = 20;
      }
    }
    xWasPressed = xPressed;
    
  }else {
   //use mouse without controller
    x = mouseX;
    y = mouseY;
    moving = mouseIsPressed;//(mouseX !== pmouseX || mouseY !== pmouseY);
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
  text("press b to chage shape", 20,105);
  text("press x to change brushSize", 20,128)
  text("dragg mouse", 20, 150);
  text("space bar clears canvas", 20, 170);
}

function drawSqaure(){
  push();
  translate(x,y);
  
  fill(
  (frameCount * 5)% 255,
    (frameCount * 3)% 255,
    (frameCount * 7)% 255
  );
 
  noStroke();
  
  if (shape === 0){
    rect(0,0,brushSize,brushSize);
  }else{
    ellipse(0,0,brushSize,brushSize);
  }
  pop();
}

function newColor(){
  red = random(255);
  green = random(255);
  blue = random(255);
}
 
function keyPressed() {

  if (key === " ") {
    background(20);
   
}
}