function scene_G3() {
  background(200, 200, 0);
  image(G3Img, 200, 200, 400, 400);
  noCursor();

  // Display clouds passing
  for (let i = 0; i < 8; i++) {
    clouds[i].move();
    clouds[i].display();
  }

  //Display sprite
  sprite.move();
  sprite.display(); 

  
  if (sprite.spriteX > 250 && sprite.spriteY < 75){
    mode = 1;
    sprite.spriteX = 75;
    sprite.spriteY = 300;
    zoneOutSong.stop();
  } else {
    mode = 7;
  }
}