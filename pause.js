//Daehyeon Kim - 5646324
//Final Project - The Search of Mother
//CS099
//Spring, 2020
class pause {
  constructor() {
    this.backtoGame = new button(width / 2, 400, "Back to Game", 200, 50, 20)
    this.setting = new button(width / 2, 300, "Setting", 200, 50, 20)
    this.mainmenu = new button(width / 2, 500, "Back to Main Menu", 200, 50, 20)
  }

  update(dino) {
    if (this.backtoGame.DidClickButton()) {
      currentScene = PLAY
    } else if (this.setting.DidClickButton()) {
      currentScene = SETTING
    } else if (this.mainmenu.DidClickButton()) {
      currentScene = MAINMENU
      gamebgs.stop()
      bgs.loop()
    } 
  }

  draw() {
    image(pauseimg, width / 3 +31, height / 5, 200, 70)
    this.backtoGame.DrawButton()
    this.setting.DrawButton()
    this.mainmenu.DrawButton()
  }
}