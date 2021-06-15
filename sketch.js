var name="ayush kumar nayak"
console.log(name)

var num=2
console.log(num)

var bool=true

console.log(bool)

var object
console.log(object)

object=null
console.log(object)

var array1=[1,2,3,4,5]
console.log(array1[1])
array1.push(6)
console.log(array1)
array1.push(7)
console.log(array1)
array1.pop()
console.log(array1.length)

var array2=["hello",2,false]
console.log(array2)

var array3=[[1,2],[3,4],[5,6]]
console.log(array3[0][1])

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var box1, pig1;
var backgroundImg, platform;
var gameState="onSling"
function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup() {
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600, height, 1200, 20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700, 320, 70, 70);
    box2 = new Box(920, 320, 70, 70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810, 260, 300, PI / 2);

    box3 = new Box(700, 240, 70, 70);
    box4 = new Box(920, 240, 70, 70);
    pig3 = new Pig(810, 220);

    log3 = new Log(810, 180, 300, PI / 2);

    box5 = new Box(810, 160, 70, 70);
    log4 = new Log(760, 120, 150, PI / 7);
    log5 = new Log(870, 120, 150, -PI / 7);

    bird = new Bird(200,50);
    log6 = new Log(100, 100, 100, PI / 2);

    
slingshot=new Slingshot(bird.body,{x:200,y:50})
//chain1=new Chain(pig1.body,pig3.body)

}

function draw() {
    background(backgroundImg);
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
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
    log6.display();
    slingshot.display()
    //chain1.display()

   
}
function mouseDragged(){
    if(gameState!=="launched")
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingshot.fly()
    gameState="launched"
}
function keyPressed(){
    if(keyCode===32){
        slingshot.attach(bird.body)
    }
}
