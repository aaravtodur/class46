
function preload(){
ninja_blackimg = loadImage("assets/ninjas/blackninja1.png")
ninja_redimg = loadImage("assets/ninjas/redninja1.png")
ninja_greenimg = loadImage("assets/ninjas/greenninja1.png")
ninja_blueimg = loadImage("assets/ninjas/blueninja1.png")
}

function setup() {
  createCanvas(1000,750);
 
  this.blackbutton = createButton('choose')
  this.blackbutton.position(105 , 574);
  this.blackbutton.style("background-color", "red"); 
  blackbutton.size(100,50);  
  

  this.redbutton = createButton('choose')
  this.redbutton.position(320 , 574);
  this.redbutton.style("background-color", "red"); 
  redbutton.size(100,50);  

  this.greenbutton = createButton('choose')
  this.greenbutton.position(555 , 574);
  this.greenbutton.style("background-color", "red"); 
  greenbutton.size(100,50);  

  this.bluebutton = createButton('choose')
  this.bluebutton.position(770 , 574);
  this.bluebutton.style("background-color", "red"); 
  bluebutton.size(100,50);  

  this.playButton = createButton('Play')
  this.playButton.position(displayWidth*0.3 , 674);
  playButton.size(100,50); 

  //creating ninjas
  ninja_black = createSprite(150, 500, 90, 90); 
  ninja_black.addImage(ninja_blackimg)
  ninja_black.scale = 1.5;
  

  ninja_red = createSprite(375 , 500 , 90, 90)
  ninja_red.addImage(ninja_redimg)
  ninja_red.scale = 1.5;
  
  ninja_green = createSprite(600 ,500 , 90, 90)
  ninja_green.addImage(ninja_greenimg)
  ninja_green.scale = 1.5;


  ninja_blue = createSprite(825 , 500 , 90, 90)
  ninja_blue.addImage(ninja_blueimg)
  ninja_blue.scale = 1.5;

 ninja_black.visible = false
 ninja_blue.visible = false
 ninja_red.visible = false
 ninja_green.visible = false 

 

  
}


function draw() {
  background("orange"); 
  
  this.htpbutton = createButton('How To Play')
  this.htpbutton.position( 250, 280);
  htpbutton.size(500,70);
  this.htpbutton.style("background-color", "yellow"); 

  this.custombutton = createButton('Customize')
  this.custombutton.position( 250, 400);
  custombutton.size(500,70);
  this.custombutton.style("background-color", "yellow"); 

  this.startbutton = createButton('Start')
  this.startbutton.position( 250, 520);
  startbutton.size(500,70);
  this.startbutton.style("background-color", "yellow"); 

  //creating title text
  textSize(100);
  fill("black")
  text("Ninja On Hunt" , 150 , 100);
  textFont("calibari");

  if (startbutton.mousePressed) {
    this.blackbutton.show();
    this.redbutton.show();
    this.greenbutton.show();
    this.bluebutton.show();
    this.playButton.show();
    this.htpbutton.hide()
    this.custombutton.hide()
    this.startbutton.hide()
    ninja_black.visible = true
    ninja_blue.visible = true
    ninja_red.visible = true
    ninja_green.visible = true 
     
    };
  
 
  

      drawSprites();
  
     
   }

  


