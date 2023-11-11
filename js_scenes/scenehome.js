function scene_home() {
  background(255, 0, 0);
  image(homeImg, 200, 200, width, height);
  fill(250, 170, 250);
  textSize(20);
  text("welcome to the game", 100, 100);
  fill(0, 0, 200);
  rect(width/2, height/4*3, 200, 50);
  fill(0, 200, 200);
  textSize(12);
  text("Enter Your Universe", 150, 300);
}