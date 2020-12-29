var bullet,wall;
var thickness,speed,weight;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
weight=random(25,30);
 thickness=random(22,83);
bullet = createSprite(500,200,50,10);
wall = createSprite(1200,200,thickness,100);

bullet.velocityX = speed;
}

function draw() {
  background("black");


  if(hascollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed*speed/(thickness *thickness *thickness);


    if(damage>10)
     {
       wall.shapeColor=color(255,0,0);

     }

     if(damage<10)
     {
       wall.shapeColor=color(0,255,0);
     }
  }


  
  drawSprites();
  
hascollided(bullet,wall);
}

function hascollided(lbullet,lwall)
{
  
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }  
  return false;
}

