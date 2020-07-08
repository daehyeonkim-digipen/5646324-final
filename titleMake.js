//Daehyeon Kim - 5646324
//Final Project - The Search of Mother
//CS099
//Spring, 2020
function DrawTitle(label, titleY, TEXTSIZE) {
  push();
  textAlign(CENTER);
  textSize(TEXTSIZE);
  fill(0);
  noStroke();
  text(label, width / 2, titleY);
  pop();
}