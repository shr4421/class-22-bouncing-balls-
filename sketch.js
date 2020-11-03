// name spacing
const Engine=Matter.Engine;//engine is like universe
const World=Matter.World;//world is like earth
const Bodies=Matter.Bodies;//bodies are objects on the earth

var engine1,world1;
var ball,ground,ball2;

function setup() {

  createCanvas(800,400);

  engine1=Engine.create();// creating engine1(univerese).
  world1=engine1.world;// created world 1 inside engine 1.
  var ground_options={ //giving properties to ground.
    isStatic:true
  }
  ground=Bodies.rectangle(400,390,800,20,ground_options);//created ground using bodies.
  World.add(world1,ground);//added this ground into world 1.
  var ball_options={
    restitution:0.8
  }

  ball=Bodies.circle(400,100,20,ball_options);
  World.add(world1,ball);
  var ball2_options={
    restitution:0.3
  }
  ball2=Bodies.circle(100,100,30,ball2_options);
  World.add(world1,ball2);
}

function draw() {
background("white");
Engine.update(engine1);
rectMode(CENTER);//changing x,y to center point.
fill("red");//giving color to ground .
rect(ground.position.x,ground.position.y,800,20);//drawing ground using rectangle.
fill("brown");
circle(ball.position.x,ball.position.y,20);
fill("yellow");
circle(ball2.position.x,ball2.position.y,30);

  drawSprites();
}