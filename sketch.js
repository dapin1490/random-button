let genButton;
let resetButton;
let isMouseOverButton = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  
  textSize(12);
  textFont('Consolas');
  
  genButton = createButton(`Generate`);
  genButton.position(random(100, windowWidth - 100), random(100, windowHeight - 100));
  // genButton.mouseOver(genFigure);
  genButton.style('background-color', color(random(255), random(255), random(255)));
  genButton.mouseOver(() => isMouseOverButton = true);
  genButton.mouseOut(() => isMouseOverButton = false);
  
  resetButton = createButton(`Reset`);
  resetButton.position(random(100, windowWidth - 100), random(100, windowHeight - 100));
  resetButton.mouseReleased(resetFigure);
  resetButton.style('background-color', color(random(255), random(255), random(255), random(255)));
}

function draw() {
  if (isMouseOverButton) {
    genFigure()
  }
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
  genButton.position(random(100, windowWidth - 100), random(100, windowHeight - 100));
  genButton.style('background-color', color(random(255), random(255), random(255), random(255)));
  resetButton.position(random(100, windowWidth - 100), random(100, windowHeight - 100));
  resetButton.style('background-color', color(random(255), random(255), random(255), random(255)));
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
