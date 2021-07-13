class Fun {
    constructor() {
      this.brickImage = "assets/bricks/brittlebrick1.png";
    }
    display() {
      
        console.log(frameCount);
        brick1 = createSprite(100, 100, 50, 50);
        //brick1.addImage(this.brickImage);
        brick1.velocityY = 1;
   
  
      brick2 = createSprite(300, 200, 50, 50);
  
      playerninja.velocityX = 1;
  
      drawSprites();
    }
  }
  