class Game {
    constructor() {
      ninjaImg = loadImage("blueninja1.png");
  
      ninja_blackimg = loadImage("assets/ninjas/blackninja1.png");
      ninja_greenimg = loadImage("assets/ninjas/greenninja1.png");
      ninja_redimg = loadImage("assets/ninjas/redninja1.png");
      ninja_blueimg = loadImage("assets/ninjas/blueninja1.png");
  
      this.pinkbutton = createButton("choose");
      // this.blackbutton.position(105, 574);
      // this.blackbutton.style("background-color", "black");
      // blackbutton.size(100, 50);
  
      this.redbutton = createButton("choose");
      // this.redbutton.position(320, 574);
      // this.redbutton.style("background-color", "red");
      // redbutton.size(100, 50);
  
      this.greenbutton = createButton("choose");
      // this.greenbutton.position(555, 574);
      // this.greenbutton.style("background-color", "green");
      // greenbutton.size(100, 50);
  
      this.bluebutton = createButton("choose");
      // this.bluebutton.position(770, 574);
      // this.bluebutton.style("background-color", "blue");
      // bluebutton.size(100, 50);
  
      // this.playButton = createButton("Play");
      // this.playButton.position(displayWidth * 0.3, 674);
      // playButton.size(100, 50);
    }
  
    display() {
      brick = createSprite(width / 2, height / 2);
      ninja2 = createSprite(300, 100, 100, 100);
      ninja2.addImage(ninjaImg);
  
      // //creating ninjas
      ninja_black = createSprite(150, 500, 90, 90);
      ninja_black.addImage(ninja_blackimg);
      ninja_black.scale = 1.5;
  
      ninja_red = createSprite(375, 500, 90, 90);
      ninja_red.addImage(ninja_redimg);
      ninja_red.scale = 1.5;
  
      ninja_green = createSprite(600, 500, 90, 90);
      ninja_green.addImage(ninja_greenimg);
      ninja_green.scale = 1.5;
  
      ninja_blue = createSprite(825, 500, 90, 90);
      ninja_blue.addImage(ninja_blueimg);
      ninja_blue.scale = 1.5;
  
      // this.blackbutton = createButton("choose");
      this.pinkbutton.position(105, 574);
      this.pinkbutton.style("background-color", "pink");
      this.pinkbutton.size(100, 50);
  
      // this.redbutton = createButton("choose");
      this.redbutton.position(320, 574);
      this.redbutton.style("background-color", "red");
      this.redbutton.size(100, 50);
  
      // this.greenbutton = createButton("choose");
      this.greenbutton.position(555, 574);
      this.greenbutton.style("background-color", "green");
      this.greenbutton.size(100, 50);
  
      // this.bluebutton = createButton("choose");
      this.bluebutton.position(770, 574);
      this.bluebutton.style("background-color", "blue");
      this.bluebutton.size(100, 50);
  
      // this.custombutton.hide();
      // this.startbutton.hide();
      // this.logo.hide();
  
      this.pinkbutton.mousePressed(() => {
        //   this.custombutton.hide();
        //   this.startbutton.hide();
        //   this.logo.hide();
        this.hideElements();
        playerninja = createSprite(400, 50, 50, 50);
        playerninja.addImage(ninja_blackimg);
  
        fun.display();
      });
  
      this.greenbutton.mousePressed(() => {
        //   this.custombutton.hide();
        //   this.startbutton.hide();
        //   this.logo.hide();
        this.hideElements();
        playerninja = createSprite(400, 50, 50, 50);
        playerninja.addImage(ninja_greenimg);
  
        fun.display();
      });
  
      this.redbutton.mousePressed(() => {
        //   this.custombutton.hide();
        //   this.startbutton.hide();
        //   this.logo.hide();
        this.hideElements();
        playerninja = createSprite(400, 50, 50, 50);
        playerninja.addImage(ninja_redimg);
  
        fun.display();
      });
  
      this.bluebutton.mousePressed(() => {
        //   this.custombutton.hide();
        //   this.startbutton.hide();
        //   this.logo.hide();
        this.hideElements();
        playerninja = createSprite(400, 50, 50, 50);
        playerninja.addImage(ninja_blueimg);
  
        fun.display();
      });
  
      drawSprites();
  
      //drawSprites();
    }
  
    hideElements() {
      this.redbutton.hide();
      this.bluebutton.hide();
      this.greenbutton.hide();
      this.pinkbutton.hide();
      ninja_black.visible = false;
      ninja_blue.visible = false;
      ninja_green.visible = false;
      ninja_red.visible = false;
      brick.visible = false;
      ninja2.visible = false;
    }
  }
  