
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 var balls_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
 }
Matter.Bodies.circle(500,500,400)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 groundObj.display();
 groundObj=new ground(width/2,670,width,20);
 leftSide = new ground(1100,600,20,120);
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,500,5)
	}
}

