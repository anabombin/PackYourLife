function scene_G3_Ins() {
  background(200, 200, 0);
  fill(0, 200, 200);
  image(G3InsImg, 200, 200, width, height);
  noCursor();
  
  sprite.move();
  sprite.display();
  
  if (sprite.spriteX > 300 && sprite.spriteY < 100){
    mode = 1;
    sprite.spriteX = 75;
    sprite.spriteY = 300;
  } else if (sprite.spriteX > 100 && sprite.spriteX < 300 && sprite.spriteY > 260 && sprite.spriteY < 325){
    mode = 7;
    zoneOutSong.play();
  } else {
    mode = 6;
  }
  
}