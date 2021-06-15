
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin,ground,paper
var world;

function preload(){
	roomImg=loadImage("room.jpg")
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);



	engine = Engine.create();
	world = engine.world;
	
	ground=new Ground(width/2,670,width,20);
	bottom=new Dustbin(1150,650,120,10);
    left=new Dustbin(1098,580,10,130)
	right=new Dustbin(1200,580,10,130)
	paper=new Paper(210,400,50,50)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(roomImg);
 
  textSize(25)
  fill("black")
  text("Class rules:",590,200)
  text("Keep the classroom clean by keeping ",590,225)
  text("the trash in trashcan",590,250)
  text("Clean classroom keeps clean environment",590,275)
  textSize(35)
  text("🍀🍀",590,310)

  ground.display();
  bottom.display();
  left.display();
  right.display()
  paper.display()


}

function keyPressed(){
	if (keyCode=== UP_ARROW){
      Matter.Body.applyForce(paper.body,paper.body.position,{x:141,y:-141})
	}

    //if((keyCode===RIGHT_ARROW)&& paper.x<=1200){
   // Matter.Body.setPosition(paper.body,paper.body.position,{x:210,y:400})
	 //}

}




