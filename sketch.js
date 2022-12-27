var plane, planeimg;
var cloud1, cloud1img, cloud2,cloud2img;
var bird1img, bird2img;
var invisibleGround;
var gameState="serve";
var obstaclesGroup;

function preload(){
 planeimg=loadImage("planecopy.png");
 cloud1img=loadImage("cloud.png");
 cloud2img=loadImage("nubes.png");
 bird1img=loadImage("bird.png");
 bird2img=loadImage("birds2.png");

}

function setup() {
 createCanvas(600,360);
 plane = createSprite(95,150);
 plane.addImage(planeimg);
 plane.scale=0.1;
// invisibleGround = createSprite(270,360,windowWidth,10);
}

function draw() {
    background("Deepskyblue");
    text("X "+mouseX+","+"Y "+mouseY,mouseX,mouseY);
    //invisibleGround.visible=!true;

    /*if (keyDown("space") && plane.y>=128) {
    plane.velocityY = -15;
    }
    plane.velocityY = plane.velocityY + 0.6;

    if(plane.isTouching(invisibleGround)){
        gamestate="gameOver";

    }

    /*if(gameState="gameOver"){
        
    }*/
    obstacles();

    drawSprites();
    
}

function obstacles(){
 if(frameCount%65 == 0){
    var bird1 = createSprite(550,165,10,30);
    //Holi Angy en este linea colocaste un obstacle1 cuando no tienes esto declarado lo adecuado seria bird1.velocityX=-4;
    //obstacle1.velocityX=-4;
    bird1.velocityX=-4;

    //si quieres un motivimiento de sprites aleatorios en Y ocupas :3
    bird1.y=Math.round(random(10,360));
    var rando = Math.round(random(1,2));
    switch(rando){
     case 1: bird1.addImage(bird1img);
             break;
    case 2: bird1.addImage(bird2img);
             break;

    default:break;
    }
    bird1.lifetime = 250;
    bird1.scale = 1 ;
    bird1.depth = plane.depth;
    plane.depth = plane.depth+1;
    obstaclesGroup.add(bird1);
 }
}

