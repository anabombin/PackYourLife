class Clutter {
  constructor(img){
    this.x = random(50, width);
    this.y = random(75, 325);
    this.rect_width = random(10, 50);
    this.rect_height = random(10, 50);
    this.img = img;
  }
  
  display(){
    image(this.img, this.x, this.y, this.rect_width, this.rect_height);
    const result = this.checkBounds(this.x, this.y, this.rect_width, this.rect_height);
    this.x = result[0];
    this.y = result[1];
  }
      

  
  checkBounds(x, y, rect_w, rect_h){
    if (mouseIsPressed){
      if (mouseX > x - rect_w/2 && mouseX < x + rect_w/2){
        if (mouseY > y - rect_h/2 && mouseY < y + rect_h/2){
          x = mouseX;
          y = mouseY;
        }
      }
    }
    return [x, y];
    
  }
  
  mouse(){
    if(mouseIsPressed){
      mouse_pressed = true;
    } else {
      mouse_pressed = false;
    }
  }
  
}