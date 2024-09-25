let genButton;
let resetButton;
let score;
let cnt = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  
  textSize(12);
  textFont('Consolas');
  
  genButton = createButton(`Generate`);
  genButton.position(random(100, windowWidth - 100), random(100, windowHeight - 100));
  // genButton.mouseOver(genFigure);
  genButton.style('background-color', color(random(255), random(255), random(255)));
  genButton.mouseReleased(genFigure);
  
  resetButton = createButton(`Reset`);
  resetButton.position(random(100, windowWidth - 100), random(100, windowHeight - 100));
  resetButton.mouseReleased(resetFigure);
  resetButton.style('background-color', color(random(255), random(255), random(255), random(255)));
  
  score = createButton(`score: ${cnt}`);
  score.position(30, 30);
}

function draw() {
  score.html(`score: ${cnt}`);
}

function genFigure() {
  noStroke();
  fill(random(0, 256), random(0, 256), random(0, 256), random(0, 256));
  
  ellipse(random(0, width), random(0, height), random(50, 100), random(50, 100));
  
  cnt++;

  randomButton();
}

function resetFigure() {
  background(255);
  cnt = 0;
  randomButton();
}

function randomButton() {
  genButton.position(random(100, windowWidth - 100), random(100, windowHeight - 100));
  genButton.style('background-color', color(random(255), random(255), random(255), random(255)));
  resetButton.position(random(100, windowWidth - 100), random(100, windowHeight - 100));
  resetButton.style('background-color', color(random(255), random(255), random(255), random(255)));
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
