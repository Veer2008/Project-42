var hasDocked=false;

function preload(){
  bgImg=loadImage("spacebg.jpg")
  issImg=loadImage("iss.png")
  craftImg=loadImage("spacecraft1.png")
  craftleft=loadImage("spacecraft3.png")
  craftright=loadImage("spacecraft4.png")
  craftup=loadImage("spacecraft2.png")



}

function setup() {
  createCanvas(1200,600);
  iss=createSprite(500,200)
  iss.addImage(issImg)
  spacecraft=createSprite(300,400)
  spacecraft.addImage(craftImg)
  spacecraft.scale=0.2
}

function draw() {
  background(bgImg);  
  if(!hasDocked){
    spacecraft.x=spacecraft.x+random(-1,1)
    if(keyDown("UP_ARROW")){
      spacecraft.addImage(craftup);
      spacecraft.y=spacecraft.y-1;
    }
    if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(craftImg);
      spacecraft.y=spacecraft.y+2;
    }
    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(craftleft);
      spacecraft.x=spacecraft.x-2;
    }
    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(craftright);
      spacecraft.x=spacecraft.x+2;
    }
  }
  if(spacecraft.y <= (iss.y+90) && spacecraft.x <= (iss.x-10)){
    hasDocked=true;
    textSize(30);
    fill("white")
    text("docking Successful",400,500)
  }
  drawSprites();
  text(mouseX+","+mouseY,mouseX,mouseY)
}