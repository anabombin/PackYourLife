function scene_G2() {
  background(255, 100, 20);
  cursor(ARROW);
  image(roomImg, 200, 200, width+200, height+200);
  time();
  fill(255, 50, 50);
  noStroke();
  textSize(12);
  text("Seconds: " + secondsPassed, 25, 25);
  
  //Display Suitcase
  suitcase.display();
  
  // Display dispersed clothing
  for(let i = 0; i < clothing.length; i++) {
    clothing[i].move();
    clothing[i].display();
  }
  
  if (secondsPassed <= 0) {
      end.display();
    }
  
  console.log(secondsPassed);
}