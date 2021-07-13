var ninjaImg;
var ninja_black,
  ninja_blue,
  ninja_red,
  ninja_green,
  brick,
  ninja2,
  brick1,
  brick2,
  blackninja,
  greenninja,
  redninja,
  blueninja,
  playerninja;

function preload() {
  ninja_blackimg = loadImage("assets/ninjas/blackninja1.png");
  ninja_redimg = loadImage("assets/ninjas/redninja1.png");
  ninja_greenimg = loadImage("assets/ninjas/greenninja1.png");
  ninja_blueimg = loadImage("assets/ninjas/blueninja1.png");
}

function setup() {
  createCanvas(1000, 750);
  welcome = new Welcome();
  game = new Game();
  fun = new Fun();
}

function draw() {
  background("orange");

  welcome.display();

  drawSprites();
}
