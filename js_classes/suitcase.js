class Suitcase {
  constructor(suitcaseImage, suitcaseX, suitcaseY, sWidth, sHeight){
    this.sWidth = sWidth;
    this.sHeight = sHeight;
    this.suitcaseX = suitcaseX;
    this.suitcaseY = suitcaseY;
    this.suitcaseImage = suitcaseImage;
  }
  
  display(){
    image(this.suitcaseImage, this.suitcaseX, this.suitcaseY, this.sWidth, this.sHeight);
  }

}