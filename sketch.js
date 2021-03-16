var bullet,wall;
var speed,weighgt,thickness;

function setup() {
  createCanvas(1600,400);

speed=random(80,100);
weight=random(30,52);
thickness=random(22,83);

bullet = createSprite(50,200,70,40);
wall = createSprite(1200,200,thickness,height/2);

bullet.shapeColor = "white"
wall.shapeColor = color(80,80,80);
bullet.velocityX = speed;
}

function draw() {
  background("black");  
  
  if(hascollided(bullet,wall))
  {
    bullet.velocityX = 0;
    var damage =0.5*weight*speed*speed/thickness*thickness*thickness;
    if(damage>10)
    {
      bullet.shapeColor=color(255,0,0)
    }
    if(damage<10)
    {
      bullet.shapeColor=color(0,250,0)
   }
   }
   drawSprites();
  } 
  function hascollided(lbullet,lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>= wallLeftEdge){
    return true  
  } else{
    return false;
  }
  }