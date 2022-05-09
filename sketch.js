
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var groundObj;
var leftSide;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 1000);


	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	var ground_options = {
		isStatic: true
	}

		groundObj = new Ground (width/2,670,width,20);
		leftSide = new Ground(1100,600,20,120);

		ball = Bodies.circle(200,200,10,ball_options);
		World.add(world,ball);
		rectMode(CENTER);
		ellipseMode(RADIUS);

	Engine.run(engine);
  
}


function draw() {
  rect(groundObj.position.x, groundObj.position.y,groundObj.width,groundObj.height);
  //background(40);
  text('im not sure why nothing is showing',500,500);
  groundObj.show();
  leftSide.show();
  ball.show();
  Engine.update(engine);

}


function keyPressed(){
	if(keyCode === UP_ARROW){
			Matter.Body.applyForce(ball, {x:0, y:0}, {x: 0.05, y: 0.05});
		  }
			  
}


  