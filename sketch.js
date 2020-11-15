
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject,rod,rod1,rod2,ground;
var engine,world

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	paperObject = new paper(100,200,40);

	rod = new Dustbin(1000,450,200,20);
	rod1 = new Dustbin(900,400,20,100);
	rod2 = new Dustbin(1100,400,20,100);

	ground = new Ground(width/2,470,width,20);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  paperObject.display();
  rod1.display();
  rod.display();
  rod2.display();
  ground.display();

  fill("white");
  stroke("white");
  textSize(20);
  text("Press Up arrow key to throw the paper into dustbin",200,100);


}

function keyPressed (){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x:85 , y:-85});
	}
}


