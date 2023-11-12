class Sprite {
  constructor(spriteX, spriteY, imgSprite){
    this.spriteWidth = 30;
    this.spriteHeight = 30;
    this.spriteX = spriteX;
    this.spriteY = spriteY;
    this.imgSprite = imgSprite;
    this.index = 0;
  }
  
  display(){
    image(this.imgSprite, this.spriteX, this.spriteY, this.spriteWidth, this.spriteHeight);
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
  // if (frameCount % 30 === 0) {
  //   this.index = (this.index + 1) % this.imgSprite.length;
  // }
    }
  }
}