const Engine=Matter.Engine; 
const World=Matter.World; 
const Bodies=Matter.Bodies;

var snow =[]

function preload(){
  bgImg= loadImage ("images/bgImg.jpeg");
}

function setup() {
  createCanvas(900,900);
  snowflake=new Snowflake(100,200,30,10);
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(bgImg); 
  Engine.update(engine);
  if (frameCount %60 === 0) 
  {
    snow.push(new Snowflake(random(width/2-30, width/2+30),10,10));
  }

  for (var k = 0; k < snow.length; k++) {
    snow[k].display();
  }


  drawSprites();
}
