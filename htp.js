//Daehyeon Kim - 5646324
//Final Project - The Search of Mother
//CS099
//Spring, 2020
class htp {
  constructor() {
    this.mainmenu = new button(100, 150, "Back", 90, 50, 20)
    this.CLEAR = new motherDino(null, null, 100, 120, 55, 0)
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
    rect(width / 2, height / 2, 460, 440)
    pop()
    image(htpimg, width / 3 -20, height / 7 + 6, 300, 70)
    push()
    fill(0)
    textSize(30)
    text("←→↓↑ : Move", width / 4, 250)
    text("A or D : Rolling Google eyes", width / 3 - 44, 300)
    text("R : Restart", 2 * width / 5 - 24, 350)
    text("ESC : Main Menu", width / 3 - 3, 400)
    text("-> Go to Next Stage", width / 3 + 45, 450)
    push()
    noStroke()
    fill("#CCFF00")
    circle(width / 3 + 5, 440, 50)
    pop()
    image(arrow, width / 3 - 20, 415, 50, 50)
    text("-> CLEAR!!", width / 3 + 45, 500)
    pop()
    this.mainmenu.DrawButton()
    push()
    translate(275, 490)
    rotate(3*PI/2)
    this.CLEAR.draw(0,0)
    pop()
  }
}