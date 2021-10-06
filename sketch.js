
function preload(){
  //pre-load images
  track = loadImage("path.png");
  run = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(track);
  path.velocityY = 4;
  path.scale = 1.2;

  Lboundary = createSprite(75,200,50,400);
  Lboundary.visible = false;

  Rboundary = createSprite(325,200,50,400);
  Rboundary.visible = false;

  
 
  boy = createSprite(200,300,50,75);
  boy.addAnimation("running", run);
  boy.scale = 0.07;
  boy.collide(Lboundary);
  boy.collide(Rboundary);

}

function draw() {
  background(0);
  
  boy.x = mouseX;
 
  if(path.y > 400){
   path.y = height/2;
  }
  
  drawSprites();
}
