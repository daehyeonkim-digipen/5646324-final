//Daehyeon Kim - 5646324
//Final Project - The Search of Mother
//CS099
//Spring, 2020
class stage5_obstacle {
  constructor() {
    this.stage5_px1 = 400
    this.stage5_py1 = 800
    this.stage5_Ptero1 = new obstacle(this.stage5_px1, this.stage5_py1, 80, 80, 15, PI / 2)
    this.stage5_px2 = 300
    this.stage5_py2 = 50
    this.stage5_Ptero2 = new obstacle(this.stage5_px1, this.stage5_py1, 20, 20, 25, -PI / 2)
    this.stage5_x1 = 25
    this.velocity_stage5_x1 = 1
    this.stage5_y1 = 325
    this.stage5_Dino1 = new obstacle(this.stage5_x1, this.stage5_y1, 150, 120, 55, PI / 2)
    this.stage5_x2 = 775
    this.stage5_y2 = 325
    this.velocity_stage5_y2 = -1.5
    this.stage5_Dino2 = new obstacle(this.stage5_x2, this.stage5_y2, 80, 80, 155, 0)
  }

  update(subject) {

    this.stage5_px1 = 200 + 160 * -cos(frameCount / 80)
    this.stage5_py1 = 400 + 400 * -sin(frameCount / 80)
    this.stage5_px2 = 500 + 200 * -cos(frameCount / 40)
    this.stage5_py2 = 200 + 100 * -sin(frameCount / 40)
    //Dino1
    if (this.stage5_Dino1.x > 675) {
      this.stage5_Dino1.angle = -PI / 2
      this.stage5_Dino1.x = 674
      this.velocity_stage5_x1 = -1
    } else if (this.stage5_Dino1.x < 25) {
      this.stage5_Dino1.angle = PI / 2
      this.stage5_Dino1.x = 26
      this.velocity_stage5_x1 = 1
    }
    //Dino2
    if (this.stage5_Dino2.y < 75) {
      this.stage5_Dino2.angle = PI
      this.stage5_Dino2.y = 76
      this.velocity_stage5_y2 = 1.5
    } else if (this.stage5_Dino2.y > 575) {
      this.stage5_Dino2.angle = 0
      this.stage5_Dino2.y = 574
      this.velocity_stage5_y2 = -1.5
    }
  }


  move() {

    this.stage5_Ptero1.x = this.stage5_px1
    this.stage5_Ptero1.y = this.stage5_py1
    this.stage5_Ptero1.angle = frameCount / 80
    this.stage5_Ptero2.x = this.stage5_px2
    this.stage5_Ptero2.y = this.stage5_py2
    this.stage5_Ptero2.angle = frameCount / 40
    this.stage5_Dino1.x += this.velocity_stage5_x1
    this.stage5_Dino2.y += this.velocity_stage5_y2


  }

  draw() {
    this.stage5_Ptero1.update(noiseP1 * TWO_PI)
    this.stage5_Ptero1.draw_Ptero()
    this.stage5_Ptero2.update(noiseP1 * TWO_PI)
    this.stage5_Ptero2.draw_Ptero()
    this.stage5_Dino1.update(noiseP1 * TWO_PI)
    this.stage5_Dino1.draw_Dino()
    this.stage5_Dino2.update(noiseP1 * TWO_PI)
    this.stage5_Dino2.draw_Dino()
  }

  contact(sub4) {
    if (getDist(sub4, this.stage5_Ptero1.x, this.stage5_Ptero1.y) <= 30) {
      currentScene = YOUDIED
    } else if (getDist(sub4, this.stage5_Ptero2.x, this.stage5_Ptero2.y) <= 30) {
      currentScene = YOUDIED
    } else if (getDist(sub4, this.stage5_Dino1.x, this.stage5_Dino1.y) <= 50) {
      currentScene = YOUDIED
    } else if (getDist(sub4, this.stage5_Dino2.x, this.stage5_Dino2.y) <= 50) {
      currentScene = YOUDIED
    }
  }
}