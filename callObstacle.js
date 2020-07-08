//Daehyeon Kim - 5646324
//Final Project - The Search of Mother
//CS099
//Spring, 2020
class callObstacle {
  constructor() {
    this.stage1_Dino = new stage1_obstacle()
    this.stage2_Dino = new stage2_obstacle()
    this.stage3_Dino = new stage3_obstacle()
    this.stage4_Dino = new stage4_obstacle()
    this.stage5_Dino = new stage5_obstacle()
  }

  update(subject) {
    switch (stage) {
      case 1:
        this.stage1_Dino.update()
        break;
      case 2:
        this.stage2_Dino.update()
        break;
      case 3:
        this.stage3_Dino.update(subject)
        break;
      case 4:
        this.stage4_Dino.update(subject)
        break;
      case 5:
        this.stage5_Dino.update(subject)
        break;
    }
  }

  move() {
    switch (stage) {
      case 1:
        this.stage1_Dino.move()
        break;
      case 2:
        this.stage2_Dino.move()
        break;
      case 3:
        this.stage3_Dino.move()
        break;
      case 4:
        this.stage4_Dino.move()
        break;
      case 5:
        this.stage5_Dino.move()
        break;
    }
  }

  draw() {
    switch (stage) {
      case 1:
        this.stage1_Dino.draw()
        break;
      case 2:
        this.stage2_Dino.draw()
        break;
      case 3:
        this.stage3_Dino.draw()
        break;
      case 4:
        this.stage4_Dino.draw()
        break;
      case 5:
        this.stage5_Dino.draw()
        break;
    }
  }

  contact(subject) {
    switch (stage) {
      case 1:
        this.stage1_Dino.contact(subject)
        break;
      case 2:
        this.stage2_Dino.contact(subject)
        break;
      case 3:
        this.stage3_Dino.contact(subject)
        break;
      case 4:
        this.stage4_Dino.contact(subject)
        break;
      case 5:
        this.stage5_Dino.contact(subject)
        break;
    }
  }
}