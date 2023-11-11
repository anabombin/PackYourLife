function scene_G1_Ins() {
  background(200, 200, 0);
  time();
  fill(0, 200, 200);
  textSize(20);
  text("Clear your desk & pack your backpack", 50, 150);
  //Start Game button
  text("You have 10 seconds ", 100, 750);
  fill(0, 0, 200);
  rect(width/2, height/4*3, 200, 50);
  fill(0, 200, 200);
  textSize(12);
  text("Start Game", 150, 300);
  //Back to room
  fill(0, 0, 200);
  rect(325, 50, 100, 50);
  fill(200, 200, 200);
  textSize(12);
  text("back to room", 300, 50);
  
  
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