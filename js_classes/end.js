class End {
  constructor(img){
    this.img = img;
    this.width = 400;
    this.height = 400;
    this.x = 200;
    this.y = 200;
  }
  
  display(){
    image(this.img, this.x, this.y, this.width, this.height);
  }
  
}