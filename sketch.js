let mode = 0;
let timer;
let currentTime;
let secondsPassed = 10;

let clothing = [];
let suitcase;
let clutter = [];
let room;
let sprite;
let end;
let spriteImg;
let spriteImg2;
let clouds;
// let cloudsImg = [];
let sprites = [];
let roomImg;
// let clutterImg = [];
let clothingImg = [];
let suitcaseImg;
let G2Ins;
let homeImg;
let G3Img;
let G1Img;
let G3InsImg;
let G1InsImg;

function preload() {
  sprite1 = loadImage("assets/sprite1.jpg");
  sprite2 = loadImage("assets/sprite2.jpg");
  roomImg = loadImage("assets/room.jpeg");
  suitcaseImg = loadImage("assets/suitcase.jpg");
  homeImg = loadImage("assets/Home.jpg");
  G3Img = loadImage("assets/G3.jpg");
  G1Img = loadImage("assets/G1.jpg");
  G3InsImg = loadImage("assets/G3Ins.jpg");
  G1InsImg = loadImage("assets/G1Ins.jpg");
  // G2Ins = loadImage("assets/G2Ins.jpeg");
}

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  imageMode(CENTER);

  //clothing class array
  for (let i = 0; i < 10; i++) {
    clothing[i] = new Clothing(random(width), random(height), -1, false);
  }

  //Suitcase
  suitcase = new Suitcase(suitcaseImg, 200, 200, 125, 125);

  //Room furniture
  room = new Room();

  //Sprite
  sprites = [sprite1, sprite2];
  sprite = new Sprite(70, 300, sprite1, sprite2);

  // for (let i = 0; i < 2; i++) {
  //   sprite[i] = new Sprite(70, 300, sprites);
  // }

  //clouds
  cloudsImg = loadImage("assets/cloud.jpg");
  clouds = new Clouds(cloudsImg);

  //End message
  end = new End(5);

  // clutter class array
  for (let i = 0; i < 10; i++) {
    clutter[i] = new Clutter(
      random(width),
      random(height),
      random(10, 50),
      random(10, 50)
    );
  }
}

function draw() {
  switch (mode) {
    case 0:
      scene_home();
      break;
    case 1:
      scene_room();
      break;
    case 2:
      scene_G1_Ins();
      break;
    case 3:
      scene_G1();
      break;
    case 4:
      scene_G2_Ins();
      break;
    case 5:
      scene_G2();
      break;
    case 6:
      scene_G3_Ins();
      break;
    case 7:
      scene_G3();
      break;
  }
}

function mousePressed() {
  //Entering Universe from home
  if (
    mode == 0 &&
    mouseX >= 100 &&
    mouseX <= 300 &&
    mouseY >= 275 &&
    mouseY <= 325
  ) {
    mode++;
  }

  //Back to room from Game 1 & Game 2
  if (
    mode == 3 &&
    secondsPassed <= 0 &&
    mouseX > 150 &&
    mouseX < 250 &&
    mouseY > 275 &&
    mouseY < 325
  ) {
    mode = 1;
    sprite.spriteX = 100;
    sprite.spriteY = 300;
  } else if (
    mode == 5 &&
    secondsPassed <= 0 &&
    mouseX > 150 &&
    mouseX < 250 &&
    mouseY > 275 &&
    mouseY < 325
  ) {
    mode = 1;
    sprite.spriteX = 100;
    sprite.spriteY = 300;
  }

  if (mode == 8) {
    scene0();
    mode = 0;
  }
}

function time() {
  //Countdown Timer
  if (millis() - currentTime > 1000) {
    secondsPassed -= 1;
    currentTime = millis();
  }
}
