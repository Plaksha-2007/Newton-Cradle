
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1, rope2, rope3, rope4, rope5;
var backImage, notesImage;

function preload()
{
	backImage = loadImage("lab.jpg");
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(800,500,80);
	bob2 = new Bob(700,500,80);
	bob3 = new Bob(600,500,80);
	bob4 = new Bob(500,500,80);
	bob5 = new Bob(400,500,80);
	roof = new Ground(600, 100, 490, 40);
	rope1 = new Rope(bob1.body,roof.body,100*2,0);
	rope2 = new Rope(bob2.body,roof.body,50*2,0);
	rope3 = new Rope(bob3.body,roof.body,0*2,0);
	rope4 = new Rope(bob4.body,roof.body,-50*2,0);
	rope5 = new Rope(bob5.body,roof.body,-100*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backImage);
  textSize(20);
  textFont('Georgia');
  fill(0);
  textAlign(CENTER);
  text("Press UP arrow to move the A bob!",600,650);
  text("Press DOWN arrow to move the A - E bob!",600,680);
  text("Press RIGHT arrow to move the A - D - E bob!",600,710);
  text("Press LEFT arrow to move the A - B - E bob!",600,740);
  text("Press SPACE to move the A - B - D - E bob!",600,770);
  text("Press UP arrow to move the A bob!",600,650);
  text("Press DOWN arrow to move the A - E bob!",600,680);
  text("Press RIGHT arrow to move the A - D - E bob!",600,710);
  text("Press LEFT arrow to move the A - B - E bob!",600,740);
  text("Press SPACE to move the A - B - D - E bob!",600,770);
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  textFont('Georgia');
  fill(0);
  textAlign(CENTER);
  text("A                 B                   C                   D                 E", 604,107);
  drawSprites();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
	   Matter.Body.applyForce(bob5.body, bob5.body.position,{x:-0.2,y:-0.2});
	}
	if(keyCode===DOWN_ARROW){
		Matter.Body.applyForce(bob5.body, bob5.body.position,{x:-0.2,y:-0.2});
		Matter.Body.applyForce(bob1.body, bob1.body.position,{x:0.2,y:-0.2});
	}
	if(keyCode===RIGHT_ARROW){
		Matter.Body.applyForce(bob5.body, bob5.body.position,{x:-0.2,y:-0.2});
		Matter.Body.applyForce(bob1.body, bob1.body.position,{x:0.2,y:-0.2});
		Matter.Body.applyForce(bob2.body, bob1.body.position,{x:0.2,y:-0.2});
	}
	if(keyCode===LEFT_ARROW){
		Matter.Body.applyForce(bob5.body, bob5.body.position,{x:-0.2,y:-0.2});
		Matter.Body.applyForce(bob1.body, bob1.body.position,{x:0.2,y:-0.2});
		Matter.Body.applyForce(bob4.body, bob1.body.position,{x:-0.2,y:-0.2});
	}
	if(keyCode===32){
		Matter.Body.applyForce(bob5.body, bob5.body.position,{x:-0.2,y:-0.2});
		Matter.Body.applyForce(bob1.body, bob1.body.position,{x:0.2,y:-0.2});
		Matter.Body.applyForce(bob4.body, bob1.body.position,{x:-0.2,y:-0.2});
		Matter.Body.applyForce(bob2.body, bob1.body.position,{x:0.2,y:-0.2});
	}

   }
   
   

