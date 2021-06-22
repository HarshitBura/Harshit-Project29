const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon;
var blockO1, blockO2,blockO3,blockO4,blockO5,blockO6,blockO7,blockO8,blockO9,block10,blockO11,blockO12,blockO13,blockO14,blockO15,blockO6;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  var polygon_options={

    restitution:0,
    friction:1,
    density:1.2
    }
  polygon = Bodies.circle(300,200,20,polygon_options);

  World.add(world,polygon);

  ground = new Ground();
  stand1 = new Stand(700,200,250,10);
  stand2 = new Stand(700,380,250,10);
 
  blockO1 = new Block(610,355,30,40);
  blockO2 = new Block(640,355,30,40);
  blockO3 = new Block(670,355,30,40);
  blockO4 = new Block(700,355,30,40);
  blockO5 = new Block(730,355,30,40);
  blockO6 = new Block(760,355,30,40);
  blockO7 = new Block(790,355,30,40);
  blockO8 = new Block(640,315,30,40);
  blockO9 = new Block(670,315,30,40);
  blockO10 = new Block(700,315,30,40);
  blockO11= new Block(730,315,30,40);
  blockO12= new Block(760,315,30,40);
  blockO13= new Block(670,275,30,40);
  blockO14= new Block(700,275,30,40);
  blockO15= new Block(730,275,30,40);
  blockO16= new Block(700,235,30,40);
  //level one
  block1 = new Block(610,185,30,40);
  block2 = new Block(640,185,30,40);
  block3 = new Block(670,185,30,40);
  block4 = new Block(700,185,30,40);
  block5 = new Block(730,185,30,40);
  block6 = new Block(760,185,30,40);
  block7 = new Block(790,185,30,40);
  //level two
  block8 = new Block(640,145,30,40);
  block9 = new Block(670,145,30,40);
  block10 = new Block(700,145,30,40);
  block11 = new Block(730,145,30,40);
  block12 = new Block(760,145,30,40);
  //level three
  block13 = new Block(670,105,30,40);
  block14 = new Block(700,105,30,40);
  block15 = new Block(730,105,30,40);
  //top
  block16 = new Block(700,65,30,40);

slingShot = new Launcher(polygon,{x:300,y:200});
  

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  blockO1.display();
  blockO2.display();
  blockO3.display();
  blockO4.display();
  blockO5.display();
  blockO6.display();
  blockO7.display();
 fill("yellow");
 blockO8.display();
 blockO9.display();
 blockO10.display();
 blockO11.display();
 blockO12.display();
 blockO13.display();
 blockO14.display();
 blockO15.display();
 blockO16.display();
 slingShot.display();
 imageMode(CENTER);
 image(polygon_img,polygon.position.x,polygon.position.y,40,40);
}
function mouseDragged(){
  Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY})
}


//create mouseReleased function here
function mouseReleased(){
slingShot.fly()
  }