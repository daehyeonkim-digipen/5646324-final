//Daehyeon Kim - 5646324
//Final Project - The Search of Mother
//CS099
//Spring, 2020
class stage1_obstacle {
  constructor() {
    this.stage1_x1 = 675
    this.velocity_stage1_x1 = 1
    this.stage1_y1 = 325
    this.stage1_Dino1 = new obstacle(this.stage1_x1, this.stage1_y1, 150, 120, 55, PI / 2)
    this.stage1_x2 = 25
    this.velocity_stage1_x2 = 0
    this.stage1_y2 = 425
    this.velocity_stage1_y2 = 1.5
    this.stage1_Dino2 = new obstacle(this.stage1_x2, this.stage1_y2, 80, 80, 155, PI)
    this.stage1_x3 = 275
    this.velocity_stage1_x3 = -1.5
    this.stage1_y3 = 525
    this.velocity_stage1_y3 = 0
    this.stage1_Dino3 = new obstacle(this.stage1_x3, this.stage1_y3, 50, 190, 55, 3 * PI / 2)
  }

  update() {
    //Dino1
    if (this.stage1_Dino1.x > 775) {
      this.stage1_Dino1.angle = -PI / 2
      this.stage1_Dino1.x = 774
      this.velocity_stage1_x1 = -1
    } else if (this.stage1_Dino1.x < 575) {
      this.stage1_Dino1.angle = PI / 2
      this.stage1_Dino1.x = 576
      this.velocity_stage1_x1 = 1
    }
    //Dino2
    if (this.stage1_Dino2.x > 275) {
      this.stage1_Dino2.angle = 0
      this.stage1_Dino2.x = 273
      this.velocity_stage1_x2 = 0
      this.velocity_stage1_y2 = -1.5
    } else if (this.stage1_Dino2.y > 525) {
      this.stage1_Dino2.angle = PI / 2
      this.stage1_Dino2.y = 523
      this.velocity_stage1_x2 = 1.5
      this.velocity_stage1_y2 = 0
    } else if (this.stage1_Dino2.x < 25) {
      this.stage1_Dino2.angle = PI
      this.stage1_Dino2.x = 27
      this.velocity_stage1_x2 = 0
      this.velocity_stage1_y2 = 1.5
    } else if (this.stage1_Dino2.y < 425) {
      this.stage1_Dino2.angle = -PI / 2
      this.stage1_Dino2.y = 427
      this.velocity_stage1_x2 = -1.5
      this.velocity_stage1_y2 = 0
    }
    //Dino3
    if (this.stage1_Dino3.x > 275) {
      this.stage1_Dino3.angle = PI
      this.stage1_Dino3.x = 273
      this.velocity_stage1_x3 = 0
      this.velocity_stage1_y3 = 1.5
    } else if (this.stage1_Dino3.y > 525) {
      this.stage1_Dino3.angle = 3 * PI / 2
      this.stage1_Dino3.y = 523
      this.velocity_stage1_x3 = -1.5
      this.velocity_stage1_y3 = 0
    } else if (this.stage1_Dino3.x < 25) {
      this.stage1_Dino3.angle = 0
      this.stage1_Dino3.x = 27
      this.velocity_stage1_x3 = 0
      this.velocity_stage1_y3 = -1.5
    } else if (this.stage1_Dino3.y < 425) {
      this.stage1_Dino3.angle = PI / 2
      this.stage1_Dino3.y = 427
      this.velocity_stage1_x3 = 1.5
      this.velocity_stage1_y3 = 0
    }
}

  move() {
    this.stage1_Dino1.x += this.velocity_stage1_x1
    this.stage1_Dino2.x += this.velocity_stage1_x2
    this.stage1_Dino2.y += this.velocity_stage1_y2
    this.stage1_Dino3.x += this.velocity_stage1_x3
    this.stage1_Dino3.y += this.velocity_stage1_y3
  }

  draw() {
      this.stage1_Dino1.update(noiseP1 * TWO_PI)
      this.stage1_Dino1.draw_Dino()
      this.stage1_Dino2.update(noiseP1 * TWO_PI)
      this.stage1_Dino2.draw_Dino()
      this.stage1_Dino3.update(noiseP1 * TWO_PI)
      this.stage1_Dino3.draw_Dino()
  }

  contact(sub1) {
    if (getDist(sub1, this.stage1_Dino1.x, this.stage1_Dino1.y) <= 50) {
      currentScene = YOUDIED
    } else if (getDist(sub1, this.stage1_Dino2.x, this.stage1_Dino2.y) <= 50) {
      currentScene = YOUDIED
    } else if (getDist(sub1, this.stage1_Dino3.x, this.stage1_Dino3.y) <= 50) {
      currentScene = YOUDIED
    }
  }
}