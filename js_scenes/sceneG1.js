function scene_G1() {
  background(255, 255, 0);
  image(G1Img, 200, 200, 400, 400);
  cursor(ARROW);
  time();
  fill(255, 100, 100);
  noStroke();
  text("Seconds: " + secondsPassed, 25, 50);
  
  for(let i = 0; i < clutter.length; i++) {
    clutter[i].checkBounds();
    clutter[i].display();
  }
  
  if (secondsPassed <= 0) {
      end.display();
    }
  
  console.log(secondsPassed);
}