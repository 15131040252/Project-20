var car;
var wall;
var speed , weight;
var deformation;

function setup()
{
  createCanvas(1600 , 400);
  car = createSprite(25 , 200 , 50 , 50);
  wall = createSprite(1200 , 200 , 70 , 300);

  speed = Math.round(random(50 , 110));
  weight = Math.round(random(1000 , 3000));
  
  console.log(speed);
  console.log(weight);
}

function draw()
{

  background("black");
  car.velocityX=speed;
  deformation = (0.5*speed*speed*weight)/22500
  console.log(deformation);

  if(collision(wall , car))
  {
    car.velocityX=0;
    if(deformation<100)
    {
      wall.shapeColor="green";
    }
    if(deformation>180)
    {
      wall.shapeColor="red";
    }
    if(deformation>100 && deformation<180)
    {
      wall.shapeColor="yellow";
    }
  }

  drawSprites();
}

function collision(object1 , object2)
{
  if(object1.x-object2.x<object1.width/2+object2.width/2)
  return true;
  else 
  return false;

  
}