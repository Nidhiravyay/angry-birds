const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,ground,pig1,log1,box3,box4,pig2,log2,box5,log3,log4,bird;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,520,70,70);
    box2 = new Box(920,520,70,70);
    ground = new Ground(600,height,1200,20)
    pig1 = new Pig(810,520); 
    log1 = new Log(810,480,300,PI/2);
    box3 = new Box(700,450,70,70);
    box4 = new Box(920,450,70,70);
    pig2 = new Pig(810,450);
    log2 = new Log(810,380,300,PI/2); 
    box5 = new Box(810,380,70,70);
    log3 = new Log(810,350,150,PI/4); 
    log4 = new Log(860,350,150,-PI/4);
    bird = new Bird(300,300,50,50);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display(); 
    log2.display();
    box5.display(); 
    log3.display();
    log4.display();
    bird.display(); 
} 