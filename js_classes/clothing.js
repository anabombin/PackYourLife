class Clothing {
  constructor(x, y, selectedClothing, inSuitcase){
    this.x = x;
    this.y = y;
    this.selectedClothing = selectedClothing;
    this.inSuitcase = inSuitcase;
  }
  
  display(){
      fill(0);
      rect(this.x, this.y, 30, 30);
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