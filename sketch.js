
function preload(){
  //pre-load images
}

function setup(){
  createCanvas(400,400);
  //create sprites here
Runner1 = createSprite(200,180,400,20)
Runner1.addImage("Runner1",Runner1Image);
}

function draw() {
  background(0);

// Moving Background
path=createSprite(200,200)
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//code to reset the background
if(path.y > 400){
  path.y = height/2;
}
}
