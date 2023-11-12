function scene_G2_Ins() {
  background(200, 200, 0);
  noCursor();
  image(G2InsImg, 200, 200, 400, 400);
  time();
  fill(0, 200, 200);
  textSize(20);
  
  
  sprite.move();
  sprite.display();
  
  if (sprite.spriteX > 300 && sprite.spriteY < 100){
    mode = 1;
    sprite.spriteX = 75;
    sprite.spriteY = 300;
  } else if (sprite.spriteX > 100 && sprite.spriteX < 300 && sprite.spriteY > 250 && sprite.spriteY < 350){
    mode = 5;
    currentTime = millis();
    secondsPassed = 10;
  } else {
    mode = 4;
  }
  
}