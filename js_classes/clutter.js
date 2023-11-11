class Clutter {
  constructor(x, y, rect_width, rect_height){
    this.x = x;
    this.y = y;
    this.rect_width = rect_width;
    this.rect_height = rect_height;
  }
  
  display(){
    stroke(0);
    fill(255);
    rect(this.x, this.y, this.rect_width, this.rect_height);
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