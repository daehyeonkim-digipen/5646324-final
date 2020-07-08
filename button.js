//Daehyeon Kim - 5646324
//Final Project - The Search of Mother
//CS099
//Spring, 2020
class button {
  constructor(centerX, centerY, boxLabel, boxWidth, boxHeight, tsize) {
    this.left = centerX - boxWidth / 2
    this.top = centerY - boxHeight / 2
    this.width = boxWidth
    this.height = boxHeight
    this.label = boxLabel
    this.mouseIsOver = false
    this.mouseWasPressed = false
    this.textSize = tsize
  }

  DrawButton() {
    push()
    stroke(20)
    let fill_color = 255
    let label_offset = 0
    if (this.mouseIsOver) {
      if (mouseIsPressed) {
        fill_color = 150
        label_offset = 1
      } else {
        fill_color = 210
      }
    }
    fill(fill_color,255,0, 180)
    translate(this.left, this.top)
    rect(0, 0, this.width, this.height)
    textAlign(CENTER, CENTER)
    textSize(this.textSize)
    fill(0)
    noStroke()
    text(this.label, this.width / 2, this.height / 2 + label_offset)
    pop()
  }

  DidClickButton() {
    const left = this.left
    const top = this.top
    const right = left + this.width
    const bottom = top + this.height

    const within_x = mouseX > left && mouseX < right
    const within_y = mouseY > top && mouseY < bottom

    this.mouseIsOver = within_x && within_y

    const clicked_it =
      this.mouseIsOver && this.mouseWasPressed && !mouseIsPressed

    this.mouseWasPressed = this.mouseIsOver && mouseIsPressed
    
    return clicked_it
  }
}