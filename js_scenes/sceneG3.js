function scene_G3() {
  background(200, 200, 0);
  clouds.move();
  clouds.display();
  
  fill(0, 200, 200);
  textSize(20);
  text("Dance it Out!", 50, 150);
  
  //Back to room
  fill(0, 0, 200);
  rect(325, 50, 100, 50);
  fill(200, 200, 200);
  textSize(12);
  text("back to reality", 300, 50);

  
  if (sprite.spriteX > 300 && sprite.spriteY < 100){
    mode = 1;
    sprite.spriteX = 75;
    sprite.spriteY = 300;
  } else {
    mode = 7;
  }
}