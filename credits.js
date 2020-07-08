class credits {
  constructor() {
    this.mainmenu = new button(100, 150, "Back", 100, 50, 20)
  }

  update() {
    if (this.mainmenu.DidClickButton()) {
      buttonsound.play()
      currentScene = MAINMENU
    }
  }

  draw() {
    push()
    rectMode(CENTER)
    fill(255, 100)
    strokeWeight(5)
    rect(width / 2, height / 2, 350, 400)
    pop()
    image(creditsimg, width / 3 + 30, height / 6 + 5, 200, 70)
    image(mbdimg, width / 3 - 16, height / 2.5, 300, 150)
    this.mainmenu.DrawButton()
  }
}