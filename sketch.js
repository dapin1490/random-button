let genButton;
let resetButton;

function setup() {
  createCanvas(600, 600);
  background(255);
  
  textSize(12);
  textFont('Consolas');
  
  genButton = createButton(`Generate`);
  genButton.position(random(10, 400), random(10, 300));
  genButton.mouseOver(genFigure);
  genButton.style('background-color', color(random(255), random(255), random(255)));
  
  resetButton = createButton(`Reset`);
  resetButton.position(random(10, 400), random(10, 300));
  resetButton.mouseReleased(resetFigure);
  resetButton.style('background-color', color(random(255), random(255), random(255), random(255)));
}

function draw() {
}

function genFigure() {
  noStroke();
  fill(random(0, 256), random(0, 256), random(0, 256), random(0, 256));
  
  ellipse(random(0, width), random(0, height), random(50, 100), random(50, 100));

  randomButton();
}

function resetFigure() {
  background(255);
  randomButton();
}

function randomButton() {
  genButton.position(random(10, 400), random(10, 300));
  genButton.style('background-color', color(random(255), random(255), random(255), random(255)));
  resetButton.position(random(10, 400), random(10, 300));
  resetButton.style('background-color', color(random(255), random(255), random(255), random(255)));
}