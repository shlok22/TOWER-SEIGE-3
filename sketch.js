const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var player, slingShot;
var ground;
var score = 0;
var bg = "sprites/bg1.jpg"

function preload() {
    getbackgroundimage();  
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70); 
    box5 = new Box(810,160,70,70);
    player = new Player(100,100);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(player.body,{x:200, y:100});
}

function draw(){
    if(backgroundImg){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    box3.display();
    box4.display();
    box5.display();
    

    player.display();
    
    //log6.display();
    slingshot.display();    
}
}

function mouseDragged(){
    Matter.Body.setPosition(player.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
async function getbackgroundimage(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON = await response.json()
    var datetime = responseJSON.datetime
    var hour = datetime.slice(11,13)
    if(hour>=06&&hour<=19){
        bg= "sprites/bg1.jpg"
    }
    else{
        bg = "sprites/bg2.png"
    }
backgroundImg= loadImage(bg)
}
