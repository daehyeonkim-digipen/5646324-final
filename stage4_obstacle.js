//Daehyeon Kim - 5646324
//Final Project - The Search of Mother
//CS099
//Spring, 2020
class stage4_obstacle {
  constructor() {
    this.stage4_xh = 575
    this.stage4_yh = 225
    this.stage4_Hunter = new obstacle(this.stage4_x1, this.stage4_y1, 100, 120, 55, -13 * PI / 12)
  }

  update(subject) {
    this.stage4_xh = (this.stage4_xh + 2) % width
    this.stage4_yh = (this.stage4_yh + 5) % height
  }


  move() {
    this.stage4_Hunter.x = this.stage4_xh
    this.stage4_Hunter.y = this.stage4_yh
  }

  draw() {
    this.stage4_Hunter.update(noiseP1 * TWO_PI)
    this.stage4_Hunter.draw_Hunter()
  }

  contact(sub4) {
    if (getDist(sub4, this.stage4_Hunter.x, this.stage4_Hunter.y) <= 80) {
      currentScene = YOUDIED
      this.stage4_xh = 575
      this.stage4_yh = 225
    }
  }
}