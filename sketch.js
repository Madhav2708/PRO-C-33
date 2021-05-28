const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var snowImg, bgImg, engine, world, boyImg, boy;

var snowfall = [];

function preload(){

  snowImg = loadImage("snow4.webp");
  bgImg = loadImage("snow1.jpg");
  boyImg = loadImage("boy22.png");

}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  boy=createSprite(300,350,20,40);
  
  boy.addImage(boyImg);
  boy.scale = 0.7

}

function draw() {
  background(bgImg); 
  
  Engine.update(engine);

  if(frameCount%5===0){

    snowfall.push(snowFall=new Snowfall());

  }

  for(var i = 0; i<snowfall.length; i++){

    snowfall[i].display();

  }
  
  drawSprites();
}