
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1,bob2,bob3,bob4,bob5
var c1,c2,c3,c4,c5
var bobD;
var bobstartX,bobstartY

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Roof(width/2,height/4,width/7,20);
		
		

	bobD=40;
	bobstartX=width/2;
	bobstartY=height/4+400;

	bob1 = new Bob(bobstartX-bobD*2,bobstartY,bobD)
	bob2 = new Bob(bobstartX-bobD,bobstartY,bobD)
	bob3 = new Bob(bobstartX,bobstartY,bobD);
	bob4= new Bob(bobstartX+bobD,bobstartY,bobD);
	bob5 = new Bob(bobstartX+bobD*2,bobstartY,bobD)
	


	

	c1 = new Chain(bob1.body,roof.body,-bobD*2,0)
	c2= new Chain(bob2.body,roof.body,-bobD,0)
	c3= new Chain(bob3.body,roof.body,0,0)
	c4 = new Chain(bob4.body,roof.body,bobD,0);
	c5= new Chain(bob5.body,roof.body,bobD*2,0)


  
}


function draw() {
	background(220);
	Engine.update(engine)

 

	roof.display();
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	c1.display();
	c2.display();
	c3.display();
	c4.display();
	c5.display();

}



function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
	  console.log("Hello");

	}
}


