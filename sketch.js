var bg,bgimage
var bow,bowimage
var rb,gb,bb,pb,rb1,gb1,bb1,pb1,RBG,BBG,GBG,PBG
var arrow,arrowimage
var score=0
function preload(){
 //load your images here 
 bgimage = loadImage("background0.png")
  bowimage=loadImage("bow0.png")
  rb1=loadImage("red_balloon0.png")
  gb1=loadImage("green_balloon0.png")
  bb1=loadImage("blue_balloon0.png")
  pb1=loadImage("pink_balloon0.png")
  arrowimage=loadImage("arrow0.png")
}

function setup() {
  createCanvas(600, 600);
  
  //add code here
  bg = createSprite(0,0,600,600)
  bg.addImage(bgimage)
  bg.scale = 3
  
  bow=createSprite(480,220,20,50)
  bow.addImage(bowimage)
  
  arrow=createSprite(360,100,5,10)
  arrow.addImage(arrowimage)
  arrow.x=bow.x
  arrow.y=bow.y
  arrow.scale=0.3
  arrow.visible=false
  
    RBG=new Group()
  BBG=new Group()
  GBG=new Group()
  PBG=new Group()
}

function draw() {
  bg.velocityX =-3
  if(bg.x<0){
    bg.x=bg.width/2
  }
  bow.y=World.mouseY
  if(keyDown("space")){
    arrow.velocityX=-6
    arrow.x=bow.x
    arrow.y=bow.y
    arrow.visible=true
  }
  var rand=Math.round(random(1,4))
  if(frameCount%80==0){
    if(rand==1){
      RB()
    }
    else if(rand==2){
      GB()
    }
    else if(rand==3){
      BB()
    }
    else{
      PB()
    }
  }
 if(arrow.isTouching(RBG)){
   RBG.destroyEach()
   score=score+2
 } 
   if(arrow.isTouching(BBG)){
   BBG.destroyEach()
   score=score+4
 } 
   if(arrow.isTouching(GBG)){
   GBG.destroyEach()
   score=score+6
 } 
   if(arrow.isTouching(PBG)){
   PBG.destroyEach()
   score=score+8
 } 
drawSprites()
  //add code here
  text("score"+score,500,100)
}
function RB(){
  rb=createSprite(0,250,10,10)
  rb.addImage(rb1)
  rb.scale=0.1
  rb.velocityX=3
  rb.y=Math.round(random(20,270))
  rb.lifetime=150
  RBG.add(rb)
}
function GB(){
  gb=createSprite(0,250,10,10)
  gb.addImage(gb1)
  gb.scale=0.1
  gb.velocityX=3
  gb.y=Math.round(random(20,270))
  gb.lifetime=150
  GBG.add(gb)
}
function BB(){
  bb=createSprite(0,250,10,10)
  bb.addImage(bb1)
  bb.scale=0.1
  bb.velocityX=3
  bb.y=Math.round(random(20,270))
  bb.lifetime=150
 BBG.add(bb) 
}
function PB(){
  pb=createSprite(0,250,10,10)
  pb.addImage(pb1)
  pb.scale=1.2
  pb.velocityX=3
  pb.y=Math.round(random(20,270))
  pb.lifetime=150
 PBG.add(pb) 
}