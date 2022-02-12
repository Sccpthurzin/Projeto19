var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var estadodejogo = "play"



function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");

}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  ghost = createSprite(200,200,50,50);
  ghost.addImage(ghostImg);
  ghost.scale=0.3;

  climbersGroup = createGroup ();
  
}

function draw() {
  background(200);
  if (estadodejogo== "play"){

    if(tower.y > 400){
      tower.y = 300
    }

    if (keyDown("space")){
    
    ghost.velocityY = -1;
    
    }
    
    if (keyDown(RIGHT_ARROW)){
      ghost.x = ghost.x+3;

    }

    if (keyDown(LEFT_ARROW)){
       ghost.x = ghost.x-3;

    }

    //Gravidade
    ghost.velocityY = ghost.velocityY+0.5;

    criarportas();
    grades();
      
   if (ghost.y>600 ){

    ghost.destroy ();

     estadodejogo="fim"
   }
   if (estadodejogo=="fim"){
    stroke("yellow"); 
    fill("yellow"); 
    textSize(30); 
    text("Fim de Jogo", 300,300)
    tower.velocityY=0;
    
   }

  }


    ghost.collide(climbersGroup);


drawSprites();
}

function criarportas(){

if (frameCount % 240 === 0) {
    door = createSprite(200, -50);
    door.velocityY = 1;
    door.addImage(doorImg);
    door.x = Math.round (random(150,400))
    door.lifetime=710;
    ghost.depth = door.depth
    ghost.depth=ghost.depth+1;

}


}

function grades(){

if (frameCount % 240 === 0) {
    climber = createSprite(200,10);
    climber.velocityY = 1;
    climber.addImage(climberImg);
    climber.x = door.x
    climber.lifetime=710; 
    climbersGroup.add(climber);
    
}

}