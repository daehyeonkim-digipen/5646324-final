//Daehyeon Kim - 5646324
//Final Project - The Search of Mother
//CS099
//Spring, 2020
class obstacle extends object {
  constructor(x, y, c1, c2, c3, a) {
    super(x, y, c1, c2, c3, a)
    this.dinosize = 40
    this.r = new noiseLoop(1, 2 * TWO_PI, -2 * TWO_PI)
    this.d = new noiseLoop(1, 100, 350)
  }

  update(a) {
    this.r.Set(a)
    this.d.Set(a)
  }

  draw_Dino() {
    push()
    translate(this.x, this.y)
    rotate(this.angle)
    push()
    fill(this.color)
    ellipse(0, 0, this.dinosize, this.dinosize + 20)
    pop()
    circle(-7.5, -15, 15)
    circle(7.5, -15, 15)
    push()
    fill(0)
    translate(cos(this.r.Get()) * 4.5, sin(this.r.Get()) * 4.5)
    circle(-8, -15, 5)
    circle(8, -15, 5)
    pop()
    pop()
  }
  
  draw_Hunter() {
    push()
    translate(this.x, this.y)
    rotate(this.angle)
    push()
    fill(this.color)
    ellipse(0, 0, this.dinosize+40, this.dinosize + 60)
    pop()
    fill(255,0,0)
    circle(-17.5, -20, 30)
    circle(17.5, -20, 30)
    push()
    fill(255,255,0)
    ellipse(-18, -20, 7, 15)
    ellipse(18, -20, 7, 15)
    pop()
    pop()
  }

  draw_Ptero() {
    push()
    translate(this.x, this.y)
    rotate(this.angle)
    fill(this.color)
    beginShape()
    vertex(0, -20)
    vertex(5, -7)
    vertex(4, -2)
    bezierVertex(7, -2, 10, -4, 25, -2)
    bezierVertex(25, -2, 5, 10, 4, 38)
    bezierVertex(4, 38, 4, 17, 0, 15)
    bezierVertex(0, 15, -4, 17, -4, 38)
    vertex(-4, 38)
    bezierVertex(-4, 38, -5, 10, -25, -2)
    bezierVertex(-25, -2, -10, -4, -4, -2)
    vertex(-5, -7)
    endShape(CLOSE)
    push()
    fill(255)
    circle(-3, -10, 6)
    circle(3, -10, 6)
    pop()
    push(0)
    fill(0)
    translate(cos(this.r.Get()) * 1.5, sin(this.r.Get()) * 1.5)
    circle(-3, -10, 2)
    circle(3, -10, 2)
    pop()
    pop()
  }
}