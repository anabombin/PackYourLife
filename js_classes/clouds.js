class Clouds {
  constructor(img){
    this.img = img;
    this.x = width+250;
    this.y = random(0, height);
    this.cWidth = random(50, 250);
    this.cHeight = random(25, 100);
    this.velocity = random(1, 5);
  }
  
  display(){
    image(this.img, this.x, this.y, this.cWidth, this.cHeight);
  }
  
  move(){
    for (let i=width; i>0; i++){
      this.x -= this.velocity;
      
      if(this.x < -250){
        this.x = width+250;
      }
    }
  }
}