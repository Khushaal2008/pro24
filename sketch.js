
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	



	Engine.run(engine);
	dust = new dustbin(720,570,20,150)
	dust1 = new dustbin(855,633,250,20)
	dust2 = new dustbin(970,570,20,150)
	Paper = new paper(100,640,10)
	surface = new Ground(width/2,650,width,10)
	
}


function draw() {
 
  background("blue");
  dust.display();
  dust1.display();
  dust2.display();
  Paper.display();
  surface.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(Paper.body,Paper.body.position,{x:16,y:-13})
	} 
}

