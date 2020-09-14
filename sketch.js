
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var ball;
var zone,zone2,zone3;
var ground;
var dustbin,dustbinImg;
function preload()
{
	//ballImg=loadImage("ball.png")	
    dustbinImg=loadImage("dustbingreen.png");
}

function setup() {
    createCanvas(1200, 500);
	//createCanvas(1200, 400);
	//rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	//Engine.run(engine);

	 
	 dustbin= createSprite(920,400,200,20);
	 dustbin.addImage(dustbinImg);
	 dustbin.scale=0.6;
	
	 ball = new Paper(200,450,40);
	

	ground=createSprite(10,500,2400,20);
	ground.shapeColor=color("yellow")
	
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });
	  Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(225);
  Engine.update(engine);
 
   ball.display();
   //ball.collide(ground);
  //keyPressed();
  Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
  
	}
}


