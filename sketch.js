var backgroundImage;
var snowI;
var boy, boyI
var iGround;

function preload() {
  backgroundImage = loadImage("snow1.jpg");
  snowI = loadImage("snow4.webp");
  boyI = loadImage("idle (1).png");
}

function setup() {
  createCanvas(800, 400);

  boy = createSprite(width/2, 300);
  boy.addImage(boyI);
  boy.scale = 0.25;

  iGround = createSprite(width/2, 400, width*2, 100);
  iGround.visible = false;
}

function draw() {
  background(backgroundImage);
  boy.velocityY += 0.8;
  boy.collide(iGround);
  if (keyIsDown(LEFT_ARROW)) {
    boy.x += -3;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    boy.x += 3;
  }
  if (keyIsDown(UP_ARROW) && boy.y > 275) {
    boy.velocityY = -10;
  }
  console.log(boy.y);
  createSnow(28,6);
  drawSprites();
}

function createSnow(time,iterations){
if (frameCount % time === 0) {
  for(let i = 0; i < iterations; i++){
    var snow = createSprite(random(0,800),0);
    snow.addImage(snowI);
    snow.scale = 0.09
    snow.velocityY = random(2,5)
    snow.lifetime = 150
  }
}
} 
