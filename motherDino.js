//Daehyeon Kim - 5646324
//Final Project - The Search of Mother
//CS099
//Spring, 2020
class motherDino extends object {
  constructor(x,y,c1,c2,c3,a) { 
    super(x,y,c1,c2,c3,a)
    this.motherdinosize = 40
    this.r = new noiseLoop(1, 2*TWO_PI, -2*TWO_PI)
  }
  
  update(a) {
    this.r.Set(a) 
  }
  
  draw(mx, my) {
    push()
    translate(mx, my)
    rotate(this.angle)
    push()
    fill(this.color)
    ellipse(0,0,this.motherdinosize,this.motherdinosize+20)
    pop()
    circle(-7.5,-15,15)
    circle(7.5,-15,15)
    push()
    fill(0)
    translate(cos(this.r.Get()) * 4.5, sin(this.r.Get()) * 4.5)
    circle(-8,-15,5)
    circle(8,-15,5)
    pop()
    pop()
  }
}