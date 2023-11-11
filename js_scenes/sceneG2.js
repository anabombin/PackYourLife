function scene_G2() {
  background(255, 100, 20);
  cursor(ARROW);
  image(roomImg, 200, 200, width+200, height+200);
  time();
  text("Seconds: " + secondsPassed, 100, 75);
  
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