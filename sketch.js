let mode = 0;
let timer;
let currentTime;
let secondsPassed = 10;

let clothing = [];
let suitcase;
let clutter = [];
let room;
let sprite1;
let sprite2;
let end;
let clouds = [];
let cloudsImg = [];
let sprite;
let roomImg;
let clutterImg = [];
let clothingImg = [];
let suitcaseImg;
let G2Ins;
let homeImg;
let G3Img;
let G1Img;
let G3InsImg;
let G1InsImg;
let G2InsImg;
let endImg;
let furnitureImg;

let zoneOutSong;

function preload() {
  sprite1 = loadImage("assets/sprite0.png");
  sprite2 = loadImage("assets/sprite1.png");
  roomImg = loadImage("assets/room.jpeg");
  suitcaseImg = loadImage("assets/suitcase.png");
  homeImg = loadImage("assets/Home.jpg");
  G3Img = loadImage("assets/G3.jpg");
  G1Img = loadImage("assets/G1.jpg");
  G3InsImg = loadImage("assets/G3Ins.jpg");
  G1InsImg = loadImage("assets/G1Ins.jpg");
  G2InsImg = loadImage("assets/G2Ins.jpeg");
  endImg = loadImage("assets/end.png");
  furnitureImg = loadImage("assets/furniture.png");
  for (let i = 0; i< 4; i++) {
    cloudsImg[i] = loadImage("assets/clouds/cloud_" + i + ".png");
  }
  for (let i = 0; i< 13; i++) {
    clutterImg[i] = loadImage("assets/clutter/clutter_" + i + ".png");
  }
  for (let i = 0; i< 10; i++) {
    clothingImg[i] = loadImage("assets/clothing/clothing_" + i + ".png");
  }
  zoneOutSong = loadSound("assets/song.mp3");
}

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  imageMode(CENTER);

  //clothing class array
  for (let i = 0; i < 10; i++) {
    let imgClothing = random(clothingImg);
    clothing[i] = new Clothing(imgClothing, -1, false);
  }

  //Suitcase
  suitcase = new Suitcase(suitcaseImg, 200, 200, 170, 130);

  //Room furniture
  room = new Room(furnitureImg);

  //Sprite
  sprite = new Sprite(70, 300, sprite1);

  //clouds
  for (let i = 0; i < 8; i++) {
    let imgClouds = random(cloudsImg); // Randomly select a cloud image
    clouds[i] = new Clouds(imgClouds);
  }

  //End message
  end = new End(endImg);

  // clutter class array
  for (let i = 0; i < 13; i++) {
    let imgClutter = random(clutterImg); // Randomly select a cloud image
    clutter[i] = new Clutter(imgClutter);
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
    mouseX >= 120 &&
    mouseX <= 300 &&
    mouseY >= 275 &&
    mouseY <= 350
  ) {
    mode++;
  }

  //Back to room from Game 1 & Game 2
  if (
    mode == 3 &&
    secondsPassed <= 0 &&
    mouseX > 125 &&
    mouseX < 275 &&
    mouseY > 225 &&
    mouseY < 300
  ) {
    mode = 1;
    sprite.spriteX = 100;
    sprite.spriteY = 300;
  } else if (
    mode == 5 &&
    secondsPassed <= 0 &&
    mouseX > 125 &&
    mouseX < 275 &&
    mouseY > 225 &&
    mouseY < 300
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
