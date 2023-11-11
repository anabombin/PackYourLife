class Sprite {
  constructor(spriteX, spriteY,animation){
    this.spriteWidth = 30;
    this.spriteHeight = 30;
    this.spriteX = spriteX;
    this.spriteY = spriteY;
    this.animation = animation;
    this.index = 0;
  }
  
  display(){
    fill(50, 50, 200);
    rect(this.spriteX, this.spriteY, this.spriteWidth, this.spriteHeight);
    image(this.animation, this.spriteX, this.spriteY, this.spriteWidth, this.spriteHeight);
  }
  
  move(){
      if (keyIsDown) {
        if (keyIsDown(LEFT_ARROW) && this.spriteX > 50) {
    this.spriteX -= 2;
  } else if (keyIsDown(RIGHT_ARROW) && this.spriteX < 350) {
    this.spriteX += 2;
  } else if (keyIsDown(UP_ARROW) && this.spriteY > 50) {
    this.spriteY -= 2;
  } else if (keyIsDown(DOWN_ARROW) && this.spriteY < 350) {
    this.spriteY += 2;
  }
        // if (this.spriteX % 3 == 0 && this.index == 0){
        //   this.index = 1;
        // } else if (this.spriteX % 3 == 0 && this.index == 1){
        //   this.index = 0;
        // }
    }
  }
}