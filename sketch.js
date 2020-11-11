var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rectangle1, rectangle2,rectangle3;
var engine,world,ground;
var ground;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	engine=Engine.create ();
	world=engine.world;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

   packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
   World.add(world, packageBody);

rectangle2= createSprite (500,610,20,100)
rectangle3= createSprite (300,610,20,100)
rectangle1= createSprite (400,650,200,20)


var ground_options=
{
	isStatic:true
}

   groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	ground=Bodies.rectangle(200,390,200,20,ground_options)
	World.add(world,ground)

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	
}


function draw() {
background ("black")
Engine.update(engine);
packageSprite.x= packageBody.position.x 
packageSprite.y= packageBody.position.y 



drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
Matter.Body.setStatic(packageBody,false) 
}
}



