class Room {
  constructor(){
    this.bedWidth = 150;
    this.bedHeight = 130;
    this.bedX = 120;
    this.bedY = 150;
    
    this.deskWidth = 60;
    this.deskHeight = 120;
    this.deskX = 325;
    this.deskY = 120;
    
    this.closetWidth = 125;
    this.closetHeight = 50;
    this.closetX = 250;
    this.closetY = 340;
  }

  show(){
    fill(200, 50, 50);
    rect(this.bedX, this.bedY, this.bedWidth, this.bedHeight);
    rect(this.deskX, this.deskY, this.deskWidth, this.deskHeight);
    rect(this.closetX, this.closetY, this.closetWidth, this.closetHeight);
  }
  
}