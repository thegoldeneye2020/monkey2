var bananaimage,bananaImage,obstacleImage,obstacleGroup,scene,score;
var player_running,bananas,ground, invisibleGround;


var score=0;
var PLAY=1;
var END=0;
var gamestate =PLAY;

function preload(){
  bananas=loadImage("banana.png");
  player_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  backgroundimage=loadImage("jungle.jpg");
  stones=loadImage("stone.png");
}

function setup() {
  createCanvas(600, 400);
     scene = createSprite(0, 0,600,200);
scene.addAnimation("scene",backgroundimage);
  scene.scale=2;
scene.x=scene.width/2;
    
  monkey = createSprite(50,350,20,60);
monkey.addAnimation("monkey",player_running);
  monkey.scale=0.1;
  monkey.x=50;
 //console.log(monkey.y);
 
  ground=createSprite(50,380,600,20);
  ground.visible=false;
  invisibleGround = createSprite(50,390,600,10);
  invisibleGround.visible = false;
  
   bananaGroup = new Group();
  obstacleGroup=new Group(); 

}


function draw() {
  background(220);
     ground.velocityX = -6;
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
    monkey.velocityY=monkey.velocityY+0.8;
   monkey.collide(ground);
  
if(keyDown("space")&& monkey.y>=300){
      monkey.velocityY = -12 ;
     }
  
  scene.velocityX=-2;
  if (scene.x<0) {
    scene.x=scene.width/2;
  }
  food();
    obstacles();
if(bananaGroup.isTouching(monkey)){
      score=score+2 ;
  bananaGroup.destroyEach();
     }
if(obstacleGroup.isTouching(monkey)){
    monkey.scale=0.2;
     }
   drawSprites();
  
 
  stroke=("white");
  textsize=20;
  fill("white");
  text("Score: "+ score, 300,50);
   score =  score + Math.round(getFrameRate()/60);
 
    
}
  
function food(){
if (World.frameCount%80===0) {
var banana   = createSprite(600, 250,30,10);
 banana.y = Math.round(random(150,250));
banana.addImage("banana",bananas);
banana.scale=0.05;
banana.velocityX=-2;
banana.lifetime= 300; 
bananaGroup.add(banana);

  }
}

function obstacles(){
if (World.frameCount%300===0) {
 var obstacle = createSprite(600, 326,10,40);
    obstacle.addImage("obstacle",stones);
obstacle.scale = 0.15;
obstacle.velocityX = -2 ;
obstacle.lifetime=300;
  obstacleGroup.add(obstacle);
  }
    

        
}
