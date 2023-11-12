class Room {
  constructor(img){
    this.furnitureX = 190;
    this.furnitureY = 220;
    this.furnitureWidth = 350;
    this.furnitureHeight = 350;
    this.img = img;
  }

  show(){
    image(this.img, this.furnitureX, this.furnitureY, this.furnitureWidth, this.furnitureHeight);
  }
  
}