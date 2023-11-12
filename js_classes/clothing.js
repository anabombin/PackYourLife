class Clothing {
  constructor(img, selectedClothing, inSuitcase){
    this.x = random(width);
    this.y = random(height);
    this.selectedClothing = selectedClothing;
    this.inSuitcase = inSuitcase;
    this.img = img;
    this.imgW = random(30, 70);
    this.imgH = random(30, 70);
  }
  
  display(){
      image(this.img, this.x, this.y, this.imgW, this.imgH);
      // img.resize(random(30, 70), 0)
        //move clothing with mouse
        if (! this.inSuitcase && this.selectedClothing != -1){
          this.x = mouseX;
          this.y = mouseY;
        }
  }
  
  move(){
    if(mouseIsPressed){
       if (! this.inSuitcase){
         //Check is mouse is near a piece of clothing
           if (dist(mouseX, mouseY, this.x, this.y) < 25) {
             this.selectedClothing = 1;
           }
         }
      } else {
        this.selectedClothing = -1;
      }
  }

}