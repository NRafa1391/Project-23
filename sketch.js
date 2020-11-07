var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var dropZone1, dropZone2, dropZone3;
var dropZone1Body, dropZone2Body, dropZone3Body;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5, {restitution:0, isStatic:true});
	World.add(world, packageBody);

	dropZone1Body = Bodies.rectangle(width/2, 653, 200, 20, {isStatic:true});
	World.add(world, dropZone1Body);

	dropZone2Body = Bodies.rectangle(495, 630, 15, 60, {isStatic:true});
	World.add(world, dropZone2Body);

	dropZone3Body = Bodies.rectangle(305, 630, 15, 60, {isStatic:true});
	World.add(world, dropZone3Body);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 dropZone1 = createSprite(400, 653, 200, 20);
	 dropZone1.shapeColor = color("red");
	World.add(world, dropZone1);

	dropZone2 = createSprite(495, 630, 15, 60);
	dropZone2.shapeColor = color("red");
	World.add(world, dropZone2);

	dropZone3 = createSprite(305, 630, 15, 60);
	dropZone3.shapeColor = color("red");
	World.add(world, dropZone3);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  dropZone1.x = dropZone1Body.position.x;
  dropZone1.y = dropZone1Body.position.y;

  dropZone2.x = dropZone2Body.position.x;
  dropZone2.y = dropZone2Body.position.y;

  dropZone3.x = dropZone3Body.position.x;
  dropZone3.y = dropZone3Body.position.y;
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	 Matter.Body.setStatic(packageBody, false);  
  }
}






