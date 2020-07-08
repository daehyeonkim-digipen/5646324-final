//Daehyeon Kim - 5646324
//Final Project - The Search of Mother
//CS099
//Spring, 2020
class stage2_obstacle {
  constructor() {
    this.stage2_x1 = random(700)
    this.stage2_y1 = random(500)
    this.stage2_Ptero1 = new obstacle(this.stage2_x1, this.stage2_y1, 150, 120, 55, PI / 2)
    this.stage2_x2 = 400
    this.stage2_y2 = 300
    this.stage2_Ptero2 = new obstacle(this.stage2_x2, this.stage2_y2, 80, 80, 155, 2 * PI / 3)
    this.stage2_x3 = 425
    this.stage2_y3 = 325
    this.stage2_Ptero3 = new obstacle(this.stage2_x3, this.stage2_y3, 50, 190, 55, PI / 2)

  }

  update() {
    this.stage2_x1 = 400 + this.stage2_Ptero1.d.Get() * -cos(frameCount / 40)
    this.stage2_y1 = 300 + (this.stage2_Ptero1.d.Get() - 50) * -sin(frameCount / 40)
    this.stage2_x2 = (this.stage2_x2 + 2) % 800
    this.stage2_y2 = (this.stage2_y2 + 1.5) % 600
    this.stage2_x3 = (this.stage2_x3 + 3) % 800
  }

  move() {

    this.stage2_Ptero1.x = this.stage2_x1
    this.stage2_Ptero1.y = this.stage2_y1
    this.stage2_Ptero1.angle = frameCount / 40
    this.stage2_Ptero2.x = this.stage2_x2
    this.stage2_Ptero2.y = this.stage2_y2
    this.stage2_Ptero3.x = this.stage2_x3
    this.stage2_Ptero3.y = this.stage2_y3
  }

  draw() {
    this.stage2_Ptero1.update(noiseP2 * TWO_PI)
    this.stage2_Ptero1.draw_Ptero()
    this.stage2_Ptero2.update(noiseP2 * TWO_PI)
    this.stage2_Ptero2.draw_Ptero()
    this.stage2_Ptero3.update(noiseP2 * TWO_PI)
    this.stage2_Ptero3.draw_Ptero()
  }

  contact(sub2) {
    if (getDist(sub2, this.stage2_Ptero1.x, this.stage2_Ptero1.y) <= 30) {
      currentScene = YOUDIED
    } else if (getDist(sub2, this.stage2_Ptero2.x, this.stage2_Ptero2.y) <= 30) {
      currentScene = YOUDIED
    } else if (getDist(sub2, this.stage2_Ptero3.x, this.stage2_Ptero3.y) <= 30) {
      currentScene = YOUDIED
    }
  }
}