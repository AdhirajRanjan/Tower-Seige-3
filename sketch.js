const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var backgroundImg;
var bg;

var score = 0

function preload()
{
  readTime()
}

function setup() {
  engine = Engine.create()
  world = engine.world;

  var canvas = createCanvas(800,400);

  stand1 = new Ground(610,203,200,5)
  stand = new Ground(390,283,250,5)

  blocks1 = new Box(550,180,30,40)
  blocks2 = new Box(580,180,30,40)
  blocks3 = new Box(610,180,30,40)
  blocks4 = new Box(640,180,30,40)
  blocks5 = new Box(670,180,30,40)

  blocks6 = new Box(580,140,30,40)
  blocks7 = new Box(610,140,30,40)
  blocks8 = new Box(640,140,30,40)

  blocks9 = new Box(610,100,30,40)

  block1 = new Box(300,260,30,40)
  block2 = new Box(330,260,30,40)
  block3 = new Box(360,260,30,40)
  block4 = new Box(390,260,30,40)
  block5 = new Box(420,260,30,40)
  block6 = new Box(450,260,30,40)
  block7 = new Box(480,260,30,40)
 
  block8 = new Box(330,220,30,40)
  block9 = new Box(360,220,30,40)
  block10 = new Box(390,220,30,40)
  block11 = new Box(420,220,30,40)
  block12 = new Box(450,220,30,40)

  block13 = new Box(360,180,30,40)
  block14 = new Box(390,180,30,40)
  block15 = new Box(420,180,30,40)
  
  block16 = new Box(390,140,30,40)
  
  polygon = Matter.Bodies.polygon(100,200,5,20)
  polygonimg=loadImage("Pentagon.png")
  World.add(world, polygon);


  slingShot = new Chain(polygon, {x:100,y:200})
}

function draw() {
  if (backgroundImg)
  background(backgroundImg);

  text("SCORE: "+score,700,40)


  

  stand1.display()
  stand.display()

  block1.score()
  block2.score()
  block3.score()
  block4.score()
  block5.score()
  block6.score()
  block7.score()
  block8.score()
  block9.score()
  block10.score()
  block11.score()
  block12.score()
  block13.score()
  block14.score()
  block15.score()
  block16.score()
  
  blocks1.score()
  blocks2.score()
  blocks3.score()
  blocks4.score()
  blocks5.score()
  blocks6.score()
  blocks7.score()
  blocks8.score()
  blocks9.score()
  
  fill("blue")
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display() 
  block6.display()
  block7.display()

  fill("gold")
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()

  fill("lightblue")
  block13.display()
  block14.display()
  block15.display()

  fill("red")
  block16.display()

  fill("blue")
  blocks1.display()
  blocks2.display()
  blocks3.display()
  blocks4.display()
  blocks5.display()

  fill("gold")
  blocks6.display()
  blocks7.display()
  blocks8.display()

  fill("lightblue")
  blocks9.display()


  slingShot.display()

  imageMode(CENTER)
  image(polygonimg,polygon.position.x,polygon.position.y,50,50)

  
  Engine.update(engine)
  
  drawSprites();
}

function mouseDragged() 
{
    Matter.Body.setPosition(polygon, {x:mouseX,y:mouseY})
}

function mouseReleased() 
{
    slingShot.fly();
}

function keyPressed()
{
  if (keyCode === 32)
  {
    slingShot.attach(polygon)
  }
}


async function readTime()
{
    var result = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var resultJSON= await result.json()
    var dt = resultJSON.datetime
    var hour = dt.slice(11,13)
    if (hour>=06&&hour<=18)
    {
        bg = "bg.png"
    }
    else
    {
        bg = "bg2.png"
    }
    backgroundImg= loadImage(bg)
    console.log(hour)
}