function scene_G1() {
  background(255, 255, 0);
  time();
  text("pick up backpack and drag it over clutter", 100, 50);
  text("You have 10 seconds " + secondsPassed, 100, 750);
  
  for(let i = 0; i < clutter.length; i++) {
    clutter[i].checkBounds();
    clutter[i].display();
  }
  
  if (secondsPassed <= 0) {
      end.display();
    }
  
  console.log(secondsPassed);
}