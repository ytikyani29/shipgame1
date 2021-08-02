/*var marks = [35,38,42,45,43,34,46,41,48,32];
for(i = 0; i <= 9; i = i + 1){
  if(marks[i] >= 45){console.log(marks[i])}
}*/



var sea,seaImg;
var ship,shipImg1;
function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png"); 

}

function setup(){
  createCanvas(900,900);
  sea = createSprite(20,200,1,1)
  sea.addImage("sea",seaImg);
  sea.x = sea.width /10;
  sea.velocityX = -4;
  ship = createSprite (200,450,10,10)
  ship.addAnimation("ship",shipImg1);
  ship.scale = 0.5;

}

function draw() {
 background ("white");
 if(sea.x < 0){
   sea.x = sea.width/2;
 }
 drawSprites();
}
