//Daehyeon Kim - 5646324
//Final Project - The Search of Mother
//CS099
//Spring, 2020
class setting {
  constructor() {
    this.back = new button(100, 150, "Back", 100, 50, 20)
    this.value1 = 0.5
    this.value2 = 0.5
    this.value3 = 60
    this.BVV = width / 2
    this.EVV = width / 2
    this.GSV = width / 2

  }

  update() {
    this.value1 = 0.5 + map(this.BVV, 300, 500, -0.5, 0.5)
    this.value2 = 0.5 + map(this.EVV, 300, 500, -0.5, 0.5)
    this.value3 = 60 + map(this.GSV, 300, 500, -40, 40)
    bgs.setVolume(this.value1)
    gamebgs.setVolume(this.value1)
    dinoscreaming.setVolume(this.value2)
    pterocrying.setVolume(this.value2)
    diebgs.setVolume(this.value1)
    hunterbgs.setVolume(this.value1)
    clearbgs.setVolume(this.value1)

    frameRate(this.value3)
    if (this.back.DidClickButton()) {
      if (!duringGame) {
        currentScene = MAINMENU
      } else if (duringGame) {
        currentScene = PAUSE
      }
    }
    let BVmda = mouseX - this.BVV
    let BVmdb = mouseY - (1 * height / 3 + 50)
    let BVmdist = sqrt(BVmda * BVmda + BVmdb * BVmdb)
    let EVmda = mouseX - this.EVV
    let EVmdb = mouseY - (height / 2 + 50)
    let EVmdist = sqrt(EVmda * EVmda + EVmdb * EVmdb)
    let GSmda = mouseX - this.GSV
    let GSmdb = mouseY - (2 * height / 3 + 50)
    let GSmdist = sqrt(GSmda * GSmda + GSmdb * GSmdb)
    if (mouseIsPressed && BVmdist <= 15) {
      this.BVV = mouseX
      if (this.BVV <= 300) {
        this.BVV = 300
      } else if (this.BVV >= 500) {
        this.BVV = 500
      }
    } else if (mouseIsPressed && EVmdist <= 15) {
      this.EVV = mouseX
      if (this.EVV <= 300) {
        this.EVV = 300
      } else if (this.EVV >= 500) {
        this.EVV = 500
      }
    } else if (mouseIsPressed && GSmdist <= 15) {
      this.GSV = mouseX
      if (this.GSV <= 300) {
        this.GSV = 300
      } else if (this.GSV >= 500) {
        this.GSV = 500
      }
    }
  }


  draw() {
    push()
    rectMode(CENTER)
    push()
    fill(255, 100)
    strokeWeight(5)
    rect(width / 2, height / 2, 350, 400)
    pop()
    push()
    textAlign(CENTER, CENTER)
    textSize(20)
    text("Background Volume", width / 2, 1 * height / 3)
    text("Effect Volume", width / 2, height / 2)
    text("Game Speed", width / 2, 2 * height / 3)
    pop()
    push()
    strokeWeight(0.5)
    push()
    fill(0, 255, 0)
    rect(width / 2, 1 * height / 3 + 50, 200, 5, 5)
    circle(this.BVV, 1 * height / 3 + 50, 20)
    pop()
    push()
    fill(255, 255, 0)
    rect(width / 2, height / 2 + 50, 200, 5, 5)
    circle(this.EVV, height / 2 + 50, 20)
    pop()
    push()
    fill(255, 0, 0)
    rect(width / 2, 2 * height / 3 + 50, 200, 5, 5)
    circle(this.GSV, 2 * height / 3 + 50, 20)
    pop()
    pop()
    pop()
    image(settingimg, width / 3 + 30, height / 6 + 6, 200, 70)
    this.back.DrawButton()
  }
}