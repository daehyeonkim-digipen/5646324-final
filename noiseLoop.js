//Daehyeon Kim - 5646324
//Final Project - The Search of Mother
//CS099
//Spring, 2020
class noiseLoop {
  constructor(Con, mini, maxi) {
    this.const = Con
    this.min = mini
    this.max = maxi
    this.a = null
    this.x = random(1000)
    this.y = random(1000)
  }

  Get() {
    let xoff = map(cos(this.a), -1, 1, this.x, this.x + this.const)
    let yoff = map(sin(this.a), -1, 1, this.y, this.y + this.const)
    let r = noise(xoff, yoff)
    return map(r, 0, 1, this.min, this.max)
  }

  Set(a) {
    this.a = a
  }
}