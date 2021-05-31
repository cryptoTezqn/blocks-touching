var fixedRec1, movingRec;
var fixedRec2,fixedRec3,fixedRec4;
function setup() {
  //creating canves
  createCanvas(800,400);
  //creating fixedRec and movingRec ans making the color green
fixedRec1 = createSprite(200,200,50,80);
movingRec = createSprite(400,200,80,30);
movingRec.shapeColor = "green";
fixedRec1.shapeColor = "green";
fixedRec2 = createSprite(200,100,50,50);
fixedRec2.shapeColor = "green";
fixedRec3 = createSprite(300,100,50,50);
fixedRec3.shapeColor = "green";
fixedRec4 = createSprite(400,100,50,50);
fixedRec4.shapeColor = "green";
}

function draw() {
  background(255,255,255);  
  //having the movingrec follow mouse y and x
  movingRec.x = World.mouseX;
  movingRec.y = World.mouseY;
  //detecting when the fixed rec and moving rec is about to collide from left and right and top and bottom ad when it has collided making it red
  if(isTouching(movingRec,fixedRec2)){
    fixedRec2.shapeColor = "blue";
    movingRec.shapeColor = "blue";
  }
  else{
    fixedRec2.shapeColor = "green";
    movingRec.shapeColor = "green";
  }
  drawSprites();
}
