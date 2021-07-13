class Welcome {
    constructor() {
      // this.logoImage =
      //   "https://raw.githubusercontent.com/vishalgaddam873/p5-multiplayer-car-race-game/master/assets/logo.png";
      this.logoImage = "assets/ninjas/ninja_logo2.jpg";
      this.logo = createImg(this.logoImage);
  
      this.htpbutton = createButton("How To Play");
  
      //this.Option1Button.style.background = "url('assets/ninja_logo2.jpg')";
      //this.Option1Button.src = "assets/ninja_logo2.jpg";
      this.custombutton = createButton("Customize");
      this.startbutton = createButton("Start");
      // this.startbutton.src = "assets/start.jpg";
      // this.startbutton.style.background = "url('assets/start.jpg')";
    }
  
    hideElements() {
      this.htpbutton.hide();
      this.custombutton.hide();
      this.startbutton.hide();
      this.logo.hide();
    }
  
    setElementPosition() {
      this.logo.position(width / 2, 10);
      //this.logo1.position(width / 4, 10);
  
      this.htpbutton.position(250, 280);
      this.custombutton.position(250, 400);
      // this.Option1ButtonButton.src = "assets/ninja_logo2.jpg";
      this.startbutton.position(250, 520);
      //this.startbutton.src = "assets/start.jpg";
      //this.startbutton.style.background = "url('assets/start.jpg')";
    }
  
    setElementStyle() {
      //   this.Option1Button.class("customButton");
      //   this.Option2Button.class("customButton");
      //  this.Option1ButtonButton.src = "assets/ninja_logo2.jpg";
    }
  
    handleOnpress() {
      //   this.Option1Button.mousePressed(() => {
      //     this.hideElements();
      //     game.display();
      //   });
  
      //   this.Option2Button.mousePressed(() => {
      //     this.hideElements();
      //     student.display();
      //   });
      this.startbutton.mousePressed(() => {
        //   this.custombutton.hide();
        //   this.startbutton.hide();
        //   this.logo.hide();
        this.hideElements();
        game.display();
      });
      this.htpbutton.mousePressed(() => {
        //   this.custombutton.hide();
        //   this.startbutton.hide();
        //   this.logo.hide();
        this.hideElements();
        game.display();
      });
      this.custombutton.mousePressed(() => {
        //   this.custombutton.hide();
        //   this.startbutton.hide();
        //   this.logo.hide();
        this.hideElements();
        game.display();
      });
    }
  
    display() {
      //this.setElementStyle();
      this.setElementPosition();
      this.handleOnpress();
    }
  }
  