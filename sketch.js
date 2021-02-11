
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer,stone,rubber,ground,iron;
var sand1,sand2,sand3,sand4,sand5,sand6;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  ground = new Ground(350,600,1000,10)
	hammer = new Hammer(100,100,150,20)
  stone = new Stone(250,550,150,150)
  rubber = new Rubber(675,550,150,150)
  sand1 = new Sand(650,500,1)
  sand2 = new Sand(625,500,1)
  sand3 = new Sand(500,500,1)
  sand4 = new Sand(615,500,1)
  sand5 = new Sand(500,500,1)
  sand6 = new Sand(615,500,1)
  iron = new Iron(100,550,100,50)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightYellow");

  ground.display();
  stone.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  iron.display();
  hammer.display();
  
  drawSprites();
 
}



