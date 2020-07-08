//Daehyeon Kim - 5646324
//Final Project - The Search of Mother
//CS099
//Spring, 2020
class stage3_obstacle {
  constructor() {
    this.stage3_x1 = 775
    this.velocity_stage3_x1 = 0
    this.stage3_y1 = 25
    this.stage3_Dino1 = new obstacle(this.stage3_x1, this.stage3_y1, 150, 120, 55, -PI / 2)
    this.stage3_x1 = 500
    this.stage3_y1 = 550
    this.stage3_Ptero1 = new obstacle(this.stage3_x1, this.stage3_y1, 20, 20, 85, PI / 2)
  }
  
  update(subject) {
    if (getDist(subject, this.stage3_Dino1.x, this.stage3_Dino1.y) <= 350) {
      runningSwitch = true
    }
    
    if(runningSwitch == true) {
      this.velocity_stage3_x1 = -4
    }
    
    if (this.stage3_Dino1.x < -400) {
      this.stage3_Dino1.x = +1300
    }
    this.stage3_x1 = 300 + 150 * -cos(frameCount / 80)
    this.stage3_y1 = 400 + 150 * -sin(frameCount / 80)
  }  


  move() {
    this.stage3_Dino1.x += this.velocity_stage3_x1
    this.stage3_Ptero1.x = this.stage3_x1
    this.stage3_Ptero1.y = this.stage3_y1
    this.stage3_Ptero1.angle = frameCount / 80


  }

  draw() {
      this.stage3_Dino1.update(noiseP1 * TWO_PI)
      this.stage3_Dino1.draw_Dino()
      this.stage3_Ptero1.update(noiseP1 * TWO_PI)
      this.stage3_Ptero1.draw_Ptero()
  }

  contact(sub3) {
    if (getDist(sub3, this.stage3_Dino1.x, this.stage3_Dino1.y) <= 50) {
      currentScene = YOUDIED
    } else if (getDist(sub3, this.stage3_Ptero1.x, this.stage3_Ptero1.y) <= 30) {
      currentScene = YOUDIED
    }
  }
}