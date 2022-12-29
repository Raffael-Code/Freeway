function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(backgroundImg);
  showPlayer()
  showCar()
  moveCar()
  movePlayer()
  returnCar()
  collision()
  scoreboard()
}