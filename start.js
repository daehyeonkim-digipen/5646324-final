class start {
  constructor() {
    this.mainmenu = new button(width/2, 480, "Press to Start", 200, 50, 20)
  }

  update() {
    if (this.mainmenu.DidClickButton()) {
      buttonsound.play()
      bgs.loop()
      currentScene = MAINMENU
    }
  }

  draw() {
    image(title, 50, 100, 450, 170)
    this.mainmenu.DrawButton()
  }
}