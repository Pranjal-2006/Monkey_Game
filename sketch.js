
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime = 0
var score

function preload(){
  
  //loading images
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  //creating canvas
  createCanvas(400,400)
  
  //creating monkey
monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  //creating ground
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  //creating invisible Ground
  invisibleGround = createSprite(80,351,900,10);
  invisibleGround.visible = false;
  
  //creating groups
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
}


function draw() {
  //creating background
  background("white");
  
  //scoring
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score, 500, 50);
  
  //survival time
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time:"+ survivalTime, 100, 50)
  
  
  
  //press Space to jump
  if(keyDown("space")&& monkey.y >= 100) {
    monkey.velocityY = -10;
  }
  
  //giving monkey gravity
  monkey.velocityY = monkey.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  monkey.collide(invisibleGround);
  
  //drawing functions
  food();
  obstacles();

 drawSprites(); 
}
//creating food(banana)
function food(){
  if(frameCount%80 === 0){
    var banana = createSprite(400, 180, 20,20);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 134;
    
    FoodGroup.add(banana);
  }
}

//creating obstacles
function obstacles(){
  
   if(frameCount%300 === 0){
     var stone = createSprite(400, 330, 10, 20);
     stone.velocityX = -6;
     stone.addImage(obstaceImage);
     stone.scale = 0.1;
     stone.lifetime = 200;
     
     obstacleGroup.add(stone)
   }
}





