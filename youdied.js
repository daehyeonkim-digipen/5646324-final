//Daehyeon Kim - 5646324
//Final Project - The Search of Mother
//CS099
//Spring, 2020
class youdied {
  constructor() {
  }

  update() {
    bgs.stop()
    gamebgs.stop()
    hunterbgs.stop()
    if(dieSoundSwitch == false)
    diebgs.loop()
    dieSoundSwitch = true
  }

  draw() {
    background(0)
    background(blood)
    push()
    imageMode(CENTER)
    image(die, width/2, height/2, 500, 500)
    pop()
    push()
    fill(150,0,0)
    textAlign(CENTER, CENTER)
    textSize(100)
    textFont('Georgia')
    text("YOU DIED", width/2, 2*height/3)
    textSize(25)
    text("Press ESC button", width/2, 9*height/10-10)
    pop()
    background(0,50)
  
  }
}