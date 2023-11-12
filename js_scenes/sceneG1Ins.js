function scene_G1_Ins() {
  background(200, 200, 0);
  image(G1InsImg, 200, 200, width, height);
  time();
  noCursor();
  
  sprite.move();
  sprite.display();
  
  if (sprite.spriteX > 300 && sprite.spriteY < 100){
    mode = 1;
    sprite.spriteX = 75;
    sprite.spriteY = 300;
  } else if (sprite.spriteX > 100 && sprite.spriteX < 300 && sprite.spriteY > 250 && sprite.spriteY < 350){
    mode = 3;
    currentTime = millis();
    secondsPassed = 10;
  } else {
    mode = 2;
  }
}