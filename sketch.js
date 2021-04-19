var bgImg, bg;
var catImg1,catImg2, catImg3;
var mouseImg1, mouseImg2, mouseImg3;
var tom,jerry;

function preload() {
    //load the images here
    bgImg = loadImage("garden.png");
    catImg1 = loadImage("cat1.png");
    catImg2 = loadAnimation("cat2.png","cat3.png");
    catImg3 = loadAnimation("cat4.png");
    mouseImg1 = loadImage("mouse1.png");
    mouseImg2= loadAnimation("mouse2.png","mouse3.png");
    mouseImg3 = loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    bg = createSprite(500,400);
    bg.addImage(bgImg);

    //create tom and jerry sprites here
    tom = createSprite(850,650);
    tom.addImage(catImg1);
    tom.addAnimation("catRunning",catImg2);
    tom.addAnimation("cat",catImg3);
    tom.scale = 0.15;
    jerry = createSprite(200,650);
    jerry.addImage(mouseImg1);
    jerry.addAnimation("mouseTeasing",mouseImg2);
    jerry.addAnimation("mouse",mouseImg3);
    jerry.scale = 0.1;

    console.log(jerry.width+"--"+tom.width);

}   

function draw() {

    background(255);
   
     //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < tom.width/2 - jerry.width/2){
        tom.velocityX = 0;
        tom.x = 300;
        jerry.changeAnimation("mouse");
        tom.changeAnimation("cat");
       }
      
       drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
   if(keyDown("left")){
      tom.velocityX= -3;
      tom.changeAnimation("catRunning");
      jerry.changeAnimation("mouseTeasing");
   }

}
