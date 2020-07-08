//Daehyeon Kim - 5646324
//Final Project - The Search of Mother
//CS099
//Spring, 2020
class clear1 {
  constructor() {
    this.mainmenu = new button(width / 2, 520, "Back to Main Menu", 200, 50, 20)
  }

  update() {
    if (this.mainmenu.DidClickButton()) {
      bgs.loop()
      clearbgs.stop()
      currentScene = MAINMENU
    }
  }

  draw() {
    push()
    fill(255)
    stroke(120,160,20)
    strokeWeight(15)
    rect(width / 4, height / 4 + 20, 400, 300)
    image(clearbgi ,width / 4, height / 4 + 20, 400, 300)
    pop()
    image(clearimg, width / 3 + 30, height / 9, 200, 100)
    this.mainmenu.DrawButton()
  }
}