function scene_room() {
  background(255, 0, 255);
  image(roomImg, 200, 200, width, height);
  noCursor();
  room.show();
  fill(0);
  noStroke();
  text("Move around the room to find stuff to do", 100, 200);
  
  // for (let i = 0; i < sprites.length; i++) {
  //   sprites[i].move();
  //   sprites[i].display();
  // }

  sprite.move();
  sprite.display();
  
  if (sprite.spriteX > 300 && sprite.spriteY < 200){
    mode = 2;
    sprite.spriteX = 200;
    sprite.spriteY = 200;
  } else if (sprite.spriteX < 200 && sprite.spriteY < 200){
    mode = 6;
    sprite.spriteX = 200;
    sprite.spriteY = 200;
  } else if (sprite.spriteX > 190 && sprite.spriteX < 300 && sprite.spriteY > 320){
    mode = 4;
    sprite.spriteX = 200;
    sprite.spriteY = 200;
  } else {
    mode = 1;
  }
  
}