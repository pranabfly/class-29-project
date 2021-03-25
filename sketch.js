var car,wall;
var speed,weight;
var thickness,bullet;

function setup() {
  createCanvas(1600,400);
 car = createSprite(50, 200, 50, 50);
 wall = createSprite(1500,200,60,height/2)
 thickness = createSprite(1200 , 200, thickness , height/2)


  speed = random(223,320)
  weight = random(30,52)
  thickness = random(22,83)

  car.velocityX = speed;
  car.shapeColor = "red";

  wall.shapeColor = "green";
}

function draw() {
  background(255,255,255);  
  if(hasCollided(bullet , wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed* speed/(thickness *thickness *thickness);

    if(damage>10)
    {
      wall.shapeColor = color(255,0,0);
    }

    if(damage<10)
    {
      wall.shapeColor = color(0,255,0);
    }



  drawSprites();
}

function hasCollided(lbullet , lwall)
{
  bulletRightEdge = lbullet.x +lbullet.width;
  wallLeftEdge = lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;

}
