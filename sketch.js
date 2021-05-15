var backgroundImage;
var snowI;

function preload() {
  backgroundImage = loadImage("snow1.jpg");
  snowI = loadImage("snow4.webp");
}

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(backgroundImage);
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


