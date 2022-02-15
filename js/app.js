/*-------------------------------- Constants --------------------------------*/

let topScore = 10;
const pointSound = new Audio('../audio/points.wav')

/*-------------------------------- Variables --------------------------------*/

let playerScore
let boardNumber
let idNumber
let snakePosition
let fruitPosition
let timeInterval
let bodyPosition
let id 
let snakeLength
let snakePositions = []
let cacheSnakeTail
let trackAction
let isGameOver = false

/*------------------------ Cached Element References ------------------------*/

const upBtn = document.querySelector(".up")
const leftBtn = document.querySelector(".left")
const rightBtn = document.querySelector(".right")
const downBtn = document.querySelector(".down")
const score = document.querySelector(".current-score")
const highScore = document.querySelector(".high-score")
const board = document.querySelector(".board")
const gameOver = document.querySelector(".gameover")
const message = document.querySelector(".message")
const replayBtn = document.querySelector(".replay")

/*----------------------------- Event Listeners -----------------------------*/

upBtn.addEventListener("click" ,handleClickUp)
leftBtn.addEventListener("click" ,handleClickLeft)
rightBtn.addEventListener("click" ,handleClickRight)
downBtn.addEventListener("click" ,handleClickDown)
document.addEventListener("keydown", pressedKey)
replayBtn.addEventListener("click", init)

/*-------------------------------- Functions --------------------------------*/

init()

function init(){
  isGameOver = false;
  clearGame()
  clearTimeout(timeInterval)
  id = 0
  playerScore = 0
  snakeLength = 1
  snakePositions = [];
  highScore.innerHTML = `High Score: ${topScore}`
  score.innerHTML = `Current Score: ${playerScore}`
  snakePosition = document.querySelector(`#sq${id}`)
  snakePosition.style.backgroundColor = "green"
  snakePositions = [snakePosition];
  createFruit()
}

function handleClickUp(){
  if (!isGameOver) {
    relateAction("ArrowUp")
  }
}

function handleClickLeft(){
  if (!isGameOver) {
    relateAction("ArrowLeft")
  }
}

function handleClickRight(){
  if (!isGameOver) {
    relateAction("ArrowRight")
  }
}

function handleClickDown(){
  if (!isGameOver) {
    relateAction("ArrowDown")
  }
}

function pressedKey(evt){
  console.log(trackAction)
  console.log(isGameOver);
  if (!isGameOver) {
    if(trackAction === "ArrowRight" && evt.code === "ArrowLeft"){
      return
    }else if(trackAction === "ArrowLeft" && evt.code === "ArrowRight"){
      return
    }else if(trackAction === "ArrowUp" && evt.code === "ArrowDown"){
      return
    }else if(trackAction === "ArrowDown" && evt.code === "ArrowUp"){
      return
    }else{
      relateAction(evt.code)
    }
  }
}

function relateAction(userAction) {
  clearTimeout(timeInterval)
  trackAction = userAction
  if(userAction === "ArrowDown"){
    arrowDown()
  }else if(userAction === "ArrowUp"){
    arrowUp()
  }else if(userAction === "ArrowRight"){
    arrowRight()
  }else if(userAction === "ArrowLeft"){
    arrowLeft()
  }
}

function checkCollision() {
  if(snakePositions.includes(snakePosition)){
    clearTimeout(timeInterval)
    isGameOver = true;
    if(playerScore > topScore){
      message.style.display = "inline"
      message.innerHTML = "Game Over!!! Congratulations! You beat the high Score."
      confetti.start(2000);
    }else{
      message.style.display = "inline"
      message.innerHTML = "Game Over!!! Try Again!"    
    }
  }
}

function clearGame(){
  message.style.display = "none"
  for (let i = 0; i < snakeLength; i++) {
    let newSnakePosition = snakePositions[i]
    newSnakePosition.style.backgroundColor = ""
  }
  console.log(fruitPosition)
  if(fruitPosition){
  fruitPosition.style.backgroundColor = ""
  }
}

function moveSnake() {
  cacheSnakeTail.style.backgroundColor = "";
  for (let i = 0; i < snakeLength; i++) {
    let newSnakePosition = snakePositions[i]
    newSnakePosition.style.backgroundColor = "green"
  }
}

function changePosition() {
  checkCollision()
  cacheSnakeTail = snakePositions[snakePositions.length - 1];
  if (snakeLength > 1) {
    for (let i = snakeLength - 1; i > 0; i--) {
      snakePositions[i] = snakePositions[i-1]
    }
  }
  snakePositions[0] = snakePosition
  
  moveSnake()
}

function arrowUp(){
  if(snakePosition === document.querySelector("#sq0")
    ||snakePosition === document.querySelector("#sq1")
    ||snakePosition === document.querySelector("#sq2")
    ||snakePosition === document.querySelector("#sq3")
    ||snakePosition === document.querySelector("#sq4")
    ||snakePosition === document.querySelector("#sq5")
    ||snakePosition === document.querySelector("#sq6")
    ||snakePosition === document.querySelector("#sq7")
    ||snakePosition === document.querySelector("#sq8")
    ||snakePosition === document.querySelector("#sq9"))
  {
    topRow()
  }else{
    snakePosition.style.backgroundColor = ""
    id = id - 10
    snakePosition = document.querySelector(`#sq${id}`)
  }
  timeInterval = setTimeout(() => relateAction("ArrowUp"),1000)
  eatFruit()
  changePosition()
}


function arrowDown(){
  if(snakePosition === document.querySelector("#sq90")
      ||snakePosition === document.querySelector("#sq91")
      ||snakePosition === document.querySelector("#sq92")
      ||snakePosition === document.querySelector("#sq93")
      ||snakePosition === document.querySelector("#sq94")
      ||snakePosition === document.querySelector("#sq95")
      ||snakePosition === document.querySelector("#sq96")
      ||snakePosition === document.querySelector("#sq97")
      ||snakePosition === document.querySelector("#sq98")
      ||snakePosition === document.querySelector("#sq99"))
  {

      bottomRow()

  }else{
      snakePosition.style.backgroundColor = ""
      id = id + 10
      snakePosition = document.querySelector(`#sq${id}`)
  }

  timeInterval = setTimeout(() => relateAction("ArrowDown"), 1000)
  eatFruit()
  changePosition()
}

function arrowLeft(){
  if(snakePosition === document.querySelector("#sq0")
      ||snakePosition === document.querySelector("#sq10")
      ||snakePosition === document.querySelector("#sq20")
      ||snakePosition === document.querySelector("#sq30")
      ||snakePosition === document.querySelector("#sq40")
      ||snakePosition === document.querySelector("#sq50")
      ||snakePosition === document.querySelector("#sq60")
      ||snakePosition === document.querySelector("#sq70")
      ||snakePosition === document.querySelector("#sq80")
      ||snakePosition === document.querySelector("#sq90"))
  {

      leftColumn()

  }else{
      snakePosition.style.backgroundColor = ""
      id = id - 1
      snakePosition = document.querySelector(`#sq${id}`)
  }
  timeInterval = setTimeout(() => relateAction("ArrowLeft"), 1000)
  eatFruit()
  changePosition()
}

function arrowRight(){
  if(snakePosition === document.querySelector("#sq9")
      ||snakePosition === document.querySelector("#sq19")
      ||snakePosition === document.querySelector("#sq29")
      ||snakePosition === document.querySelector("#sq39")
      ||snakePosition === document.querySelector("#sq49")
      ||snakePosition === document.querySelector("#sq59")
      ||snakePosition === document.querySelector("#sq69")
      ||snakePosition === document.querySelector("#sq79")
      ||snakePosition === document.querySelector("#sq89")
      ||snakePosition === document.querySelector("#sq99"))
  {

      rightColumn()

  }else{
      snakePosition.style.backgroundColor = ""
      id = id + 1
      snakePosition = document.querySelector(`#sq${id}`)
  }
  timeInterval = setTimeout(() => relateAction("ArrowRight"), 1000)
  eatFruit()
  changePosition()
}

function topRow(){
  for(let i = 0; i < 10; i++){
    if(snakePosition === document.querySelector(`#sq${i}`)){
      snakePosition.style.backgroundColor = ""
      id = 90 + i
      snakePosition = document.querySelector(`#sq${id}`)   
    }
  }
}

function bottomRow(){
  for(let i = 90; i < 100; i++){
    if(snakePosition === document.querySelector(`#sq${i}`)){
      snakePosition.style.backgroundColor = ""
      id = i % 10
      snakePosition = document.querySelector(`#sq${id}`)   
    }
  }
}

function leftColumn(){
  for(let i = 0; i < 100; i+=10){
    if(snakePosition === document.querySelector(`#sq${i}`)){
      snakePosition.style.backgroundColor = ""
      id = i + 9
      snakePosition = document.querySelector(`#sq${id}`)   
    }
  }
}

function rightColumn(){
  for(let i = 9; i < 100; i+=10){
    if(snakePosition === document.querySelector(`#sq${i}`)){
      snakePosition.style.backgroundColor = ""
      id = i - 9
      snakePosition = document.querySelector(`#sq${id}`)   
    }
  }
}


function createFruit(){
  boardNumber = Math.floor(Math.random()*100)
  fruitPosition = document.querySelector(`#sq${boardNumber}`)
  fruitPosition.style.backgroundColor = "red"
}

function eatFruit(){
  if(snakePosition === fruitPosition){
    pointSound.play()
    pointSound.volume = 0.1
    playerScore += 1
    score.innerHTML = `Current Score: ${playerScore}`
    snakeLength += 1
    createFruit()
  }
}





