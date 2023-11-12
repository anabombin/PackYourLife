class Clouds {
  constructor(img) {
    this.cloudX = random(200, 600); 
    this.cloudY = random(height);
    this.cloudW = random(100, 250);
    this.cloudH = random(75, 150);
    this.speed = random(1, 3); 
    this.img = img;
  }

  display() {
    image(this.img, this.cloudX, this.cloudY, this.cloudW, this.cloudH);
  }

  move() {
    if (this.cloudX <= -200) {
      this.cloudX = 600; 
      this.cloudY = random(height);
    } else {
      this.cloudX -= this.speed; 
    }
  }
}