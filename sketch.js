//namespacing the values of the Physics engine
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//adding values to the variables
var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    //loading the background image
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    //creating the canvas
    var canvas = createCanvas(1200,400);
    //creating the physics world
    engine = Engine.create();
    world = engine.world;

    //creating the objects required in the game like ground,boxes,pigs,logs and a bird and giving them specific parameteres which was mentioned in the constructor of their respective class
    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(100,100);

    //log6 = new Log(230,180,80, PI/2);
    //creating the slingshot where the constraint will be applied between the slingshot(a point) and the bird body
    slingshot = new SlingShot(bird.body,{x:200, y:100});
}

function draw(){
    //adding the background image
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    //applying the display function for all the object we have created for the game
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

//defining the function mouse dragged which will display the constraint between the body and point on the canvas
function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}

//defining the function mouse released in which the fly function given to the slingshot will be applied
function mouseReleased(){
    slingshot.fly();
}