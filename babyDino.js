//Daehyeon Kim - 5646324
//Final Project - The Search of Mother
//CS099
//Spring, 2020
class babyDino extends object {
  constructor(x, y, c1, c2, c3, a) {
    super(x, y, c1, c2, c3, a)
    this.babydinosize = 40
    this.roll = PI / 4
  }

  update() {
    if (keyIsDown(37) && currentScene == 5 && !textboxSwitch) {
      this.angle = PI / 2
      if (this.x >= 0 + this.babydinosize / 2) {
        this.x -= 1.5
      }
    } else if (keyIsDown(38) && currentScene == 5 && !textboxSwitch) {
      this.angle = PI
      if (this.y >= 0 + this.babydinosize / 2) {
        this.y -= 1.5
      }
    } else if (keyIsDown(39) && currentScene == 5 && !textboxSwitch) {
      this.angle = 3 * PI / 2
      if (this.x <= width - this.babydinosize / 2) {
        this.x += 1.5
      }
    } else if (keyIsDown(40) && currentScene == 5 && !textboxSwitch) {
      this.angle = 0
      if (this.y <= height - this.babydinosize / 2) {
        this.y += 1.5
      }
    }
  }

  draw() {
    push()
    push()
    translate(this.x, this.y)
    rotate(this.angle)
    push()
    noStroke()
    fill(0, nightWillCome()-110)
    rotate(this.roll)
    arc(0, 0, 3000, 3000, this.roll + PI / 5, this.roll + 9 * PI / 5)
    pop()
    push()
    fill(this.color)
    ellipse(0, 0, this.babydinosize, this.babydinosize)
    pop()
    circle(-7.5, 10, 15)
    circle(7.5, 10, 15)
    push()
    fill(0)
    circle(-7.5 + cos(this.roll * 2) * 4, 10 + sin(this.roll * 2) * 4, 5)
    circle(7.5 + cos(this.roll * 2) * 4, 10 + sin(this.roll * 2) * 4, 5)
    pop()
    if (stage >= 2) {
      for (let i = 0; i <= 3000; i += 200) {
        if (i > 200) {
          noFill()
          strokeCap(SQUARE)
          strokeWeight(100.08)
          stroke(0, nightWillCome()-110)
          circle(0, 0, i)
          push()
          rotate(this.roll*2)
          arc(0, 0, i, i, 9 * PI / 5, PI / 5)
          pop()
        }

      }
    }
    pop()
  }
}