
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new paper(200,450,70);
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	
	//Create the Bodies Here.
    paper1 = new paper(500,300);
   
    boxPosition=width/2-1006
    boxY=610;
 
 
    boxleftSprite=createSprite(boxPosition, boxY, 20,100);
    boxleftSprite.shapeColor=color(255,0,0);
 
    boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
    World.add(world, boxLeftBody);
 
    boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
    boxBase.shapeColor=color(255,0,0);
 
    boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
    World.add(world, boxBottomBody);
 
    boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
    boxleftSprite.shapeColor=color(255,0,0);
 
    boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
    World.add(world, boxRightBody);

}

	var render = Render.create({
	  element: document.body,
	  Engine: Engine,
	  options: {
	    width: 1600,
	    height: 700,
	    wireframes: false
	  }
	})

	Engine.run(Engine);
	Render.run(render);
  


function draw() {
  rectMode(CENTER);
  background(230);
 
  
  paperObject.display();
  groundObject.display();
  dustbinObj.display();

  
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});

    
  	}
}





