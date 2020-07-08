//Daehyeon Kim - 5646324
//Final Project - The Search of Mother
//CS099
//Spring, 2020
class mainmenu {
  constructor() {
    this.play = new button(width / 3, height * 15 / 22, "Play", 200, 50, 20)
    this.setting = new button(width / 3, height * 18 / 22, "Setting", 200, 50, 20)
    this.HowtoPlay = new button(2 * width / 3, height * 15 / 22, "How to Play", 200, 50, 20)
    this.credits = new button(2 * width / 3, height * 18 / 22, "Credits", 200, 50, 20)
  }

  reset(a, b) {
    stage = 1
    duringGame = false
    a.x = 25
    a.y = 25
    a.angle = 0
    a.roll = PI / 4
    b.stage3_Dino.stage3_Dino1.x = 775
    runningSwitch = false
    b.stage3_Dino.velocity_stage3_x1 = 0
    dieSoundSwitch = false
    textboxSwitch = false
    DLphase = 1
    DL1Done = false
    DL2Done = false
    DL4Done = false
    DL6Done = false
    DL8Done = false
    DL9Done = false
    DL11Done = false
    DL16Done = false
  }

  update() {
    if (this.play.DidClickButton()) {
      currentScene = PLAY
      bgs.stop()
      gamebgs.loop()
    } else if (this.setting.DidClickButton()) {
      currentScene = SETTING
    } else if (this.HowtoPlay.DidClickButton()) {
      currentScene = HTP
    } else if (this.credits.DidClickButton()) {
      currentScene = CREDITS
    }
  }


  draw() {
    image(title, 50, 100, 450, 170)
    this.play.DrawButton()
    this.setting.DrawButton()
    this.HowtoPlay.DrawButton()
    this.credits.DrawButton()
  }
}