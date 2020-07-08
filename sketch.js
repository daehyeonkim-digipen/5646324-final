//Daehyeon Kim - 5646324
//Final Project - The Search of Mother
//CS099
//Spring, 2020
let currentScene = MAINMENU
let noiseP1
let noiseP2
const frame1 = 500
const frame2 = 5000
let count = 0
let duringGame = false
let stage
const nightSight = 100
let screamSwitch = false
let crySwitch = false
let dieSoundSwitch = false
let runningSwitch = false
let bgs
let gamebgs
let hunterbgs
let diebgs
let clearbgs
let dinoscreaming
let pterocrying
let buttonsound
let mnbgi
let st1bgi
let st5bgi
let clearbgi
let bush1
let bush2
let arrow
let die
let blood
let poo
let title
let htpimg
let creditsimg
let settingimg
let pauseimg
let clearimg
let mbdimg

let tile1
let MainMenuScene
let SettingScene
let HowtoPlayScene
let CreditsScene
let ClearScene
let PauseScene
let YouDiedScene
let BabyDino
let CallObstacle
let TextBox

function preload() {
  //sound
  bgs = loadSound("material/BGsound.mp3")
  gamebgs = loadSound("material/GameBG.mp3")
  hunterbgs = loadSound("material/HunterBackgroundSound.mp3")
  diebgs = loadSound("material/DieSound.flac")
  clearbgs = loadSound("material/ClearBackgroundSound.mp3")
  dinoscreaming = loadSound("material/BigDinoSound.mp3")
  pterocrying = loadSound("material/pteroSound.mp3")
  buttonsound = loadSound("material/button.mp3")
  //image
  mnbgi = loadImage("material/MainBGimage.png")
  st1bgi = loadImage("material/BGimage.jpg")
  st5bgi = loadImage("material/BGimage2.jpg")
  clearbgi = loadImage("material/ClearImage.png")
  bush1 = loadImage("material/bush1.png")
  bush2 = loadImage("material/bush2.png")
  arrow = loadImage("material/Arrow.png")
  die = loadImage("material/die.png")
  blood = loadImage("material/blood.png")
  poo = loadImage("material/POO.png")

  title = loadImage("material/Title.png")
  htpimg = loadImage("material/HowtoPlay.png")
  creditsimg = loadImage("material/Credits.png")
  settingimg = loadImage("material/Setting.png")
  pauseimg = loadImage("material/PAUSE.png")
  clearimg = loadImage("material/CLEAR.png")
  mbdimg = loadImage("material/MBD.png")
}

function setup() {
  frameRate(60)
  createCanvas(800, 600);
  tile1 = new tile(50, currentScene)
  MainMenuScene = new mainmenu()
  SettingScene = new setting()
  HowtoPlayScene = new htp()
  CreditsScene = new credits()
  ClearScene = new clear1()
  PauseScene = new pause()
  YouDiedScene = new youdied()
  BabyDino = new babyDino(25, 25, 100, 120, 55, 0)
  CallObstacle = new callObstacle()
  TextBox = new textbox()
  bgs.setVolume(0.5)
  gamebgs.setVolume(0.5)
  diebgs.setVolume(0.5)
  hunterbgs.setVolume(0.5)
  clearbgs.setVolume(0.5)
  pterocrying.setVolume(0.5)
  dinoscreaming.setVolume(0.5)
  buttonsound.setVolume(0.5)
  bgs.loop()
}

function draw() {
  if (currentScene !== PLAY) {
    background(mnbgi)
    push()
    rectMode(CENTER)
    fill(255, 50)
    rect(width / 2, height / 2, width, height)
    pop()
  } else if (currentScene == PLAY) {
    if (stage == 5) {
      background(st5bgi)
    } else {
      background(st1bgi)
    }
    if ((second() % 20 == 0) && screamSwitch == false) {
      Scream()
      screamSwitch = true
    }
    if ((second() % 12 == 0) && crySwitch == false && stage >= 2) {
      Cry()
      crySwitch = true
    }
  }
  noiseP1 = float(count % frame1) / frame1
  noiseP2 = float(count % frame2) / frame2
  count++
  switch (currentScene) {
    case MAINMENU:
      MainMenuScene.update()
      MainMenuScene.reset(BabyDino, CallObstacle)
      MainMenuScene.draw()
      break;
    case CREDITS:
      CreditsScene.update()
      CreditsScene.draw()
      break;
    case SETTING:
      SettingScene.update()
      SettingScene.draw()
      break;
    case HTP:
      HowtoPlayScene.update()
      HowtoPlayScene.draw()
      break;
    case PLAY:
      callDialogue(BabyDino)
      tile1.update(BabyDino)
      tile1.makeStage()
      tile1.Create(0, 0, 0)
      tile1.draw(BabyDino, 3)
      CallObstacle.move()
      CallObstacle.update(BabyDino)
      CallObstacle.draw()
      CallObstacle.contact(BabyDino)
      if (stage >= 2) {
        push()
        fill(0, nightWillCome() - nightSight)
        rect(0, 0, width, height)
        pop()
      }
      BabyDino.update()
      BabyDino.draw()
      tile1.Gate(BabyDino)
      if (stage == 4) {
        image(poo, CallObstacle.stage4_Dino.stage4_Hunter.x - 23, CallObstacle.stage4_Dino.stage4_Hunter.y - 30, 50, 50)
      }
      if (textboxSwitch) {
        TextBox.update()
        TextBox.draw()
      }
      break;
    case CLEAR:
      ClearScene.update()
      ClearScene.draw()
      break;
    case PAUSE:
      PauseScene.update(BabyDino)
      PauseScene.draw()
      break;
    case YOUDIED:
      YouDiedScene.update()
      YouDiedScene.draw()
      break;
  }
  if (currentScene == 5) {
    duringGame = true
  }
}

function keyPressed() {
  if (keyCode == 82 && currentScene == PLAY && !textboxSwitch) {
    BabyDino.x = 25
    BabyDino.y = 25
    BabyDino.angle = 0
    BabyDino.roll = PI / 4
  } else if (keyCode == 27) {
    if (currentScene == PLAY) {
      currentScene = PAUSE
    } else if (currentScene == YOUDIED) {
      currentScene = PLAY
      switch (stage) {
        case 1:
          BabyDino.x = 25
          BabyDino.y = 25
          break;
        case 2:
          BabyDino.x = 775
          BabyDino.y = 25
          break;
        case 3:
          BabyDino.x = 175
          BabyDino.y = 25
          CallObstacle.stage3_Dino.stage3_Dino1.x = 775
          runningSwitch = false
          CallObstacle.stage3_Dino.velocity_stage3_x1 = 0
          break;
        case 4:
          BabyDino.x = 525
          BabyDino.y = 375
          break;
        case 5:
          BabyDino.x = 75
          BabyDino.y = 25
          break;
      }
      diebgs.stop()
      if (stage !== 4) {
        gamebgs.loop()
      } else if (stage == 4) {
        hunterbgs.loop()
      }
      dieSoundSwitch = false
    }
  } else if (keyCode == 65 && currentScene == PLAY && !textboxSwitch) {
    BabyDino.roll += PI / 16
  } else if (keyCode == 68 && currentScene == PLAY && !textboxSwitch) {
    BabyDino.roll -= PI / 16
  }
}

function nightWillCome() {
  let dist
  if (stage == 1) {
    return 0
  } else if (stage == 2) {
    dist = getDist(BabyDino, tile1.cx, tile1.cy)
    return map(dist * dist * dist * dist, 547000000000, 0, 0, 255)
  } else if (stage >= 3) {
    return 255
  }
}

function getDist(sub, obX, obY) {
  obDistX = obX - sub.x
  obDistY = obY - sub.y
  return sqrt(obDistX * obDistX + obDistY * obDistY)
}

function callDialogue(bd) {
  switch (stage) {
    case 1:
      if (getDist(bd, 25, 175) <= 30 && !DL1Done) {
        textboxSwitch = true
      } else if (getDist(bd, 425, 75) <= 30 && !DL2Done) {
        textboxSwitch = true
      }
      break;
    case 2:
      if (getDist(bd, 775, 75) <= 30 && !DL4Done) {
        textboxSwitch = true
      } else if (getDist(bd, 700, 275) <= 30 && !DL6Done) {
        textboxSwitch = true
      }
      break;
    case 3:
      if (getDist(bd, 175, 25) <= 30 && !DL8Done) {
        textboxSwitch = true
      } else if (getDist(bd, 575, 325) <= 80 && !DL9Done) {
        textboxSwitch = true
      }
      break;
    case 5:
      if (getDist(bd, 75, 25) <= 50 && !DL16Done) {
        textboxSwitch = true
      }
      break;
  }
}

function Scream() {
  dinoscreaming.play()
  setTimeout(ScreamCooldown, 1000)
}

function ScreamCooldown() {
  screamSwitch = false
}

function Cry() {
  pterocrying.play()
  setTimeout(CryCooldown, 1000)
}

function CryCooldown() {
  crySwitch = false
}