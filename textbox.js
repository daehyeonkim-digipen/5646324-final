//Daehyeon Kim - 5646324
//Final Project - The Search of Mother
//CS099
//Spring, 2020
class textbox {
  constructor() {
    this.OK = new button(width / 2 + 50, 450, "OK", 100, 40, 20)
    this.NEXT = new button(width / 2 - 50, 450, "NEXT", 100, 40, 20)
  }

  update(dino) {
    if (this.OK.DidClickButton()) {
      textboxSwitch = false
      if (DLphase == 1) {
        DL1Done = true
        DLphase = 2
      } else if (DLphase == 3) {
        DL2Done = true
        DLphase = 4
      } else if (DLphase == 5) {
        DL4Done = true
        DLphase = 6
      } else if (DLphase == 7) {
        DL6Done = true
        DLphase = 8
      } else if (DLphase == 8) {
        DL8Done = true
        DLphase = 9
      } else if (DLphase == 10) {
        DL9Done = true
        DLphase = 11
      } else if (DLphase == 15) {
        DL11Done = true
        DLphase = 16
      } else if (DLphase == 19) {
        DL16Done = true
        DLphase = 20
      } else if (DLphase == 21) {
        gamebgs.stop()
        clearbgs.loop()
        currentScene = CLEAR
      }
    }
    if (this.NEXT.DidClickButton()) {
      if (DLphase == 2) {
        DLphase = 3
      } else if (DLphase == 4) {
        DLphase = 5
      } else if (DLphase == 6) {
        DLphase = 7
      } else if (DLphase == 9) {
        DLphase = 10
      } else if (DLphase == 11) {
        gamebgs.stop()
        hunterbgs.loop()
        DLphase = 12
      } else if (DLphase == 12) {
        DLphase = 13
      } else if (DLphase == 13) {
        DLphase = 14
      } else if (DLphase == 14) {
        DLphase = 15
      } else if (DLphase == 16) {
        DLphase = 17
      } else if (DLphase == 17) {
        DLphase = 18
      } else if (DLphase == 18) {
        DLphase = 19
      } else if (DLphase == 20) {
        DLphase = 21
      }
    }
  }

  draw() {
    let talker
    let string1
    let string2
    let string3
    let string4
    let string5
    push()
    rectMode(CENTER)
    fill(240)
    rect(width / 2, height / 2, 1 * width / 3, 2 * height / 3)
    pop()
    if (DLphase == 1) {
      talker = "Baby Dino"
      string1 = ""
      string2 = "Where is"
      string3 = "my mom...?"
      string4 = ""
      string5 = ""
      this.OK.DrawButton()
    } else if (DLphase == 2) {
      talker = "Baby Dino"
      string1 = ""
      string2 = "I heard some"
      string3 = "screaming..."
      string4 = "I feel scared"
      string5 = ""
      this.NEXT.DrawButton()
    } else if (DLphase == 3) {
      talker = "TIP"
      string1 = ""
      string2 = "Do not contact"
      string3 = "to the Big"
      string4 = "Carnivorous dinosaur"
      string5 = ""
      this.OK.DrawButton()
    } else if (DLphase == 4) {
      talker = "Baby Dino"
      string1 = ""
      string2 = "I think"
      string3 = "pterodactyl gonna"
      string4 = "kidnap me..."
      string5 = ""
      this.NEXT.DrawButton()
    } else if (DLphase == 5) {
      talker = "TIP"
      string1 = ""
      string2 = "Do not contact"
      string3 = "to the flying"
      string4 = "Pterodactyl"
      string5 = ""
      this.OK.DrawButton()
    } else if (DLphase == 6) {
      talker = "Baby Dino"
      string1 = ""
      string2 = "It's getting dark"
      string3 = "I feel anxiety..."
      string4 = ""
      string5 = ""
      this.NEXT.DrawButton()
    } else if (DLphase == 7) {
      talker = "TIP"
      string1 = ""
      string2 = "It'll get darker"
      string3 = "as the next stage"
      string4 = "gets closer"
      string5 = ""
      this.OK.DrawButton()
    } else if (DLphase == 8) {
      talker = "Baby Dino"
      string1 = ""
      string2 = "Smell..."
      string3 = "Smells like mom!!"
      string4 = ""
      string5 = ""
      this.OK.DrawButton()
    } else if (DLphase == 9) {
      talker = "Baby Dino"
      string1 = ""
      string2 = ""
      string3 = "...?"
      string4 = ""
      string5 = ""
      this.NEXT.DrawButton()
    } else if (DLphase == 10) {
      talker = "Baby Dino"
      string1 = ""
      string2 = "Why is there"
      string3 = "poop in here...?"
      string4 = "Mom, are you there?"
      string5 = ""
      this.OK.DrawButton()
    } else if (DLphase == 11) {
      talker = "Mad Hunter"
      string1 = ""
      string2 = "...I think"
      string3 = "this is your"
      string4 = "mother's poop"
      string5 = ""
      this.NEXT.DrawButton()
    } else if (DLphase == 12) {
      talker = "Mad Hunter"
      string1 = "I was hoping that"
      string2 = "this smell would"
      string3 = "bring a bigger"
      string4 = "dinosaur..."
      string5 = ""
      this.NEXT.DrawButton()
    } else if (DLphase == 13) {
      talker = "Baby Dino"
      string1 = ""
      string2 = "Please, I'm"
      string3 = "still young"
      string4 = ""
      string5 = ""
      this.NEXT.DrawButton()
    } else if (DLphase == 14) {
      talker = "Mad Hunter"
      string1 = "I've had this"
      string2 = "poop smell for"
      string3 = "half a day"
      string4 = "..."
      string5 = "I'll eat you!!"
      this.NEXT.DrawButton()
    } else if (DLphase == 15) {
      talker = "Tip"
      string1 = "You'll be able to"
      string2 = "notice the Hunter"
      string3 = "from afar"
      string4 = "because of the poop"
      string5 = "on his feet"
      this.OK.DrawButton()
    } else if (DLphase == 16) {
      talker = "Mother Dino"
      string1 = ""
      string2 = "My son!!"
      string3 = "I can smell you"
      string4 = "Are you there?"
      string5 = ""
      this.NEXT.DrawButton()
    } else if (DLphase == 17) {
      talker = "Baby Dino"
      string1 = ""
      string2 = "I'm here,"
      string3 = "I'm here mom!!"
      string4 = "Where are you?"
      string5 = ""
      this.NEXT.DrawButton()
    } else if (DLphase == 18) {
      talker = "Mother Dino"
      string1 = "I hurt my leg"
      string2 = "from being stabbed"
      string3 = "by a thorn"
      string4 = "Come here,"
      string5 = "My sweetheart!!"
      this.NEXT.DrawButton()
    } else if (DLphase == 19) {
      talker = "TIP"
      string1 = ""
      string2 = "Do not contact"
      string3 = "to the thorn"
      string4 = ""
      string5 = ""
      this.OK.DrawButton()
    } else if (DLphase == 20) {
      talker = "Baby Dino"
      string1 = ""
      string2 = ""
      string3 = "Mom!!"
      string4 = ""
      string5 = ""
      this.NEXT.DrawButton()
    } else if (DLphase == 21) {
      talker = "Mother Dino"
      string1 = ""
      string2 = ""
      string3 = "Oh, My son!!"
      string4 = ""
      string5 = ""
      this.OK.DrawButton()
    }
    DrawTitle(talker, 160, 35);
    push()
    textAlign(CENTER, CENTER)
    textSize(20)
    text(string1, width / 2, 230)
    text(string2, width / 2, 270)
    text(string3, width / 2, 310)
    text(string4, width / 2, 350)
    text(string5, width / 2, 390)
    pop()
  }
}