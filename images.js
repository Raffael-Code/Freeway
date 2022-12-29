let backgroundImg
let playerImg
let carImg
let carImg2
let carImg3

function preload(){
  playerScore = loadSound("ponto.wav")
  playerHit = loadSound("hit.wav")
  playerImg = loadImage("chicken.png")
  carImg = loadImage("car_1.png")
  carImg2 = loadImage("car_2.png")
  carImg3 = loadImage("car_3.png")
  backgroundImg = loadImage("background.jpg")
  carImages =[carImg, carImg2, carImg3, carImg, carImg2, carImg3, carImg, carImg2, carImg3]
}
