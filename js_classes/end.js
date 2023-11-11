class End {
  constructor(score){
    this.score = score;
  }
  
  display(){
    fill(255);
    ellipse(width/2, height/2, 400, 400);
    fill(0);
    // text("score: "+this.score, 150, 200);
    fill(255);
    rect(200, 300, 150, 50);
    fill(0);
    text("back to room", 180, 300);
  }
  
}