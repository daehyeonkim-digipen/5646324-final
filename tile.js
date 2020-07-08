//Daehyeon Kim - 5646324
//Final Project - The Search of Mother
//CS099
//Spring, 2020
class tile {
  constructor(sz, cs) {
    this.size = sz
    this.cols = width / sz
    this.rows = height / sz
    this.grid = null
    this.pattern = stage - 1
    this.CurrentScene = cs
    this.wallPosiX = null
    this.wallPosiY = null
    this.noMoveSwitch = false
    this.stageDone = null
    this.cx = 25
    this.cy = 575
    this.MotherDino = new motherDino(null, null, 100, 120, 55, 0)
    this.Hunter = new obstacle(575, 225, 100, 120, 55, PI)
  }

  makeStage() {
    this.pattern = stage - 1
    switch (stage) {
      case 1:
        this.cx = 25
        this.cy = 575
        break;
      case 2:
        this.cx = 125
        this.cy = 575
        break;
      case 3:
        this.cx = 575
        this.cy = 375
        break;
      case 4:
        this.cx = 75
        this.cy = 575
        break;
      case 5:
        this.cx = 485
        this.cy = 25
        break;
    }
  }


  make2DArray(col, row) {
    let arr = new Array(col)
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(row)
    }
    return arr
  }

  update(dino) {
    let x1 = dino.x - this.cx
    let y1 = dino.y - this.cy
    let clDist = sqrt(x1 * x1 + y1 * y1)
    if (clDist < 30) {
      switch (stage) {
        case 1:
          if (keyIsDown(LEFT_ARROW)) {
            stage++
            dino.x = 775
            dino.y = 25
          }
          break;
        case 2:
          if (keyIsDown(DOWN_ARROW)) {
            stage++
            dino.x = 125
            dino.y = 25
          }
          break;
        case 3:
          if (DL11Done == false) {
            textboxSwitch = true
          }
          if (DLphase >= 11 && textboxSwitch == true) {
            this.Hunter.draw_Hunter()
          }
          if (textboxSwitch == false) {
            stage++
            dino.x = 525
            dino.y = 375
          }
          break;
        case 4:
          if (keyIsDown(DOWN_ARROW)) {
            stage++
            dino.x = 75
            dino.y = 25
            hunterbgs.stop()
            gamebgs.loop()
          }
          break;
        case 5:
          currentScene = CLEAR
          dino.x = 25
          dino.y = 25
          break;
      }
    }
  }

  Create() {
    this.grid = this.make2DArray(this.cols, this.rows);
    let h = mapMaker[this.pattern].length
    let w = mapMaker[this.pattern][0].length
    for (let x = 0; x < w; x++) {
      for (let y = 0; y < h; y++) {
        this.grid[x][y] = mapMaker[this.pattern][y][x]
        if (mapMaker[this.pattern][y][x] == 1) {
          if (stage !== 5) {
            mapMaker[this.pattern][y][x] = floor(random(2)) + 2
          } else if (stage == 5) {
            mapMaker[this.pattern][y][x] = 4
          }
        }
      }
    }
  }

  draw(dino, d) {
    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        if (this.grid[i][j] == 2 || this.grid[i][j] == 3 || this.grid[i][j] == 4) {
          this.wallPosiX = i * this.size
          this.wallPosiY = j * this.size
          if (mapMaker[this.pattern][j][i] == 2) {
            image(bush1, this.wallPosiX, this.wallPosiY, this.size - 1, this.size - 1)
          } else if (mapMaker[this.pattern][j][i] == 3) {
            image(bush2, this.wallPosiX, this.wallPosiY, this.size - 1, this.size - 1)
          } else if (mapMaker[this.pattern][j][i] == 4) {
            push()
            translate(this.wallPosiX + this.size / 2, this.wallPosiY + this.size / 2)
            for (let a = 0; a <= PI; a += PI / 16) {
              rotate(a)
              line(-20, 0, 15, 0)
            }
            for (let a = PI / 8; a <= PI; a += PI / 4) {
              push()
              rotate(a)
              stroke(2)
              line(-25, 0, 25, 0)
              pop()
            }
            pop()
          }
          if(stage <= 4) {
          if (dino.x >= this.wallPosiX - d && dino.y >= this.wallPosiY && dino.x <= this.wallPosiX + this.size && dino.y <= this.wallPosiY + this.size) {
            dino.x = this.wallPosiX - d
          } else if (dino.x >= this.wallPosiX && dino.y >= this.wallPosiY && dino.x <= this.wallPosiX + this.size + d && dino.y <= this.wallPosiY + this.size) {
            dino.x = this.wallPosiX + this.size + d
          } else if (dino.x >= this.wallPosiX && dino.y >= this.wallPosiY - d && dino.x <= this.wallPosiX + this.size && dino.y <= this.wallPosiY + this.size) {
            dino.y = this.wallPosiY - d
          } else if (dino.x >= this.wallPosiX && dino.y >= this.wallPosiY && dino.x <= this.wallPosiX + this.size && dino.y <= this.wallPosiY + this.size + d) {
            dino.y = this.wallPosiY + this.size + d
          }
          } else if (stage == 5) {
            if (dino.x >= this.wallPosiX - 5*d && dino.y >= this.wallPosiY && dino.x <= this.wallPosiX + this.size && dino.y <= this.wallPosiY + this.size) {
            currentScene = YOUDIED
          } else if (dino.x >= this.wallPosiX && dino.y >= this.wallPosiY && dino.x <= this.wallPosiX + this.size + 5*d && dino.y <= this.wallPosiY + this.size) {
            currentScene = YOUDIED
          } else if (dino.x >= this.wallPosiX && dino.y >= this.wallPosiY - 5*d && dino.x <= this.wallPosiX + this.size && dino.y <= this.wallPosiY + this.size) {
            currentScene = YOUDIED
          } else if (dino.x >= this.wallPosiX && dino.y >= this.wallPosiY && dino.x <= this.wallPosiX + this.size && dino.y <= this.wallPosiY + this.size + 5*d) {
            currentScene = YOUDIED
          }
          }
        }
      }
    }
  }

  Gate(sub) {
    push()
    translate(this.cx, this.cy)
    switch (stage) {
      case 1:
        push()
        rotate(PI)
        image(arrow, -25, -25, 50, 50)
        pop()
        break;
      case 2:
        push()
        rotate(PI / 2)
        image(arrow, -25, -25, 50, 50)
        pop()
        break;
      case 3:
        push()
        if (getDist(sub, this.cx, this.cy) <= 100) {
          imageMode(CENTER)
          image(poo, 0, -90, 50, 50)
        }
        rotate(PI)
        if (DLphase >= 8 && DLphase <= 11 && textboxSwitch == false) {
          this.MotherDino.update(noiseP1 * TWO_PI)
          this.MotherDino.draw(0, +140)
        }
        pop()
        break;
      case 4:
        push()
        rotate(PI / 2)
        image(arrow, -25, -25, 50, 50)
        pop()
        break;
      case 5:
        push()
        rotate(PI / 2)
        this.MotherDino.update(noiseP1 * TWO_PI)
        this.MotherDino.draw(0, 0)
        pop()
        if (getDist(sub, this.cx, this.cy) <= 50) {
          textboxSwitch = true
        }
        break;
    }
    pop()
  }
}