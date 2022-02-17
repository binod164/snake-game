/*-------------------------------- Constants --------------------------------*/

let topScore = 20;
const pointSound = new Audio('../audio/points.wav')
const playerDies = new Audio('../audio/playerDies.wav')
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
let cacheSnakeTail
let trackAction
let snakePositions = []
let fruitPositions = []
let isGameOver = false

/*------------------------ Cached Element References ------------------------*/

const upBtn = document.querySelector(".up")
const leftBtn = document.querySelector(".left")
const rightBtn = document.querySelector(".right")
const downBtn = document.querySelector(".down")
const score = document.querySelector(".current-score")
const highScore = document.querySelector(".high-score")
const gameOver = document.querySelector(".gameover")
const message = document.querySelector(".message")
const replayBtn = document.querySelector(".replay")
const modeBtn = document.querySelector(".game-mode")

/*----------------------------- Event Listeners -----------------------------*/

upBtn.addEventListener("click" ,handleClickUp)
leftBtn.addEventListener("click" ,handleClickLeft)
rightBtn.addEventListener("click" ,handleClickRight)
downBtn.addEventListener("click" ,handleClickDown)
document.addEventListener("keydown", pressedKey)
replayBtn.addEventListener("click", init)
modeBtn.addEventListener("click", gameMode)
/*-------------------------------- Functions --------------------------------*/

init()

function init(){
  isGameOver = false;
  clearGame()
  clearTimeout(timeInterval)
  id = 0
  playerScore = 0
  snakeLength = 1
  snakePositions = []
  fruitPositions =[]
  trackAction = ""
  highScore.innerHTML = `High Score: ${topScore}`
  score.innerHTML = `Current Score: ${playerScore}`
  snakePosition = document.querySelector(`#sq${id}`)
  snakePosition.style.backgroundColor = "green"
  snakePositions = [snakePosition];
  createFruit()
  createFruit()
}

function gameMode(){
  if(modeBtn.innerHTML === "Dark mode"){
    modeBtn.innerHTML = "Color mode"
    document.body.style.background = "black"
  }else{
    modeBtn.innerHTML = "Dark mode"
    document.body.style.background = ""
  }
}

function handleClickUp(){
  if (!isGameOver) {
    if((trackAction === "ArrowDown" || trackAction === "ArrowUp") && evt.code === "ArrowUp" ){
      return
    }
    relateAction("ArrowUp")
  }
}

function handleClickLeft(){
  if (!isGameOver) {
    if((trackAction === "ArrowRight" || trackAction === "ArrowLeft") && evt.code === "ArrowLeft"){
      return
    }
    relateAction("ArrowLeft")
  }
}

function handleClickRight(){
  if (!isGameOver) {
    if((trackAction === "ArrowLeft" || trackAction === "ArrowRight") && evt.code === "ArrowRight"){
      return
    }
    relateAction("ArrowRight")
  }
}

function handleClickDown(){
  if (!isGameOver) {
    if((trackAction === "ArrowUp" || trackAction === "ArrowDown") && evt.code === "ArrowDown"){
      return
    }
    relateAction("ArrowDown")
  }
}

function pressedKey(evt){
  if(!isGameOver) {
      if((trackAction === "ArrowRight" || trackAction === "ArrowLeft") && evt.code === "ArrowLeft"){
        return
      }else if((trackAction === "ArrowLeft" || trackAction === "ArrowRight") && evt.code === "ArrowRight"){
        return
      }else if((trackAction === "ArrowUp" || trackAction === "ArrowDown") && evt.code === "ArrowDown"){
        return
      }else if((trackAction === "ArrowDown" || trackAction === "ArrowUp") && evt.code === "ArrowUp"){
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
    playerDies.play()
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
  if(fruitPositions.length){
    for(let i =0; i< fruitPositions.length; i++){
      fruitPositions[i].style.backgroundColor = ""
    }
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
  eatFruit()
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
  timeInterval = setTimeout(() => relateAction("ArrowUp"),100)
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

  timeInterval = setTimeout(() => relateAction("ArrowDown"), 100)
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
  timeInterval = setTimeout(() => relateAction("ArrowLeft"), 100)
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
  timeInterval = setTimeout(() => relateAction("ArrowRight"), 100)
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
  boardNumber = Math.floor((Math.random() * 100))
  fruitPosition = document.querySelector(`#sq${boardNumber}`)
  while(snakePositions.includes(fruitPosition)) {
    boardNumber = Math.floor((Math.random() * 99) + 1)
    fruitPosition = document.querySelector(`#sq${boardNumber}`)
  }
    fruitPosition.style.backgroundColor = "red"
    fruitPositions.push(fruitPosition)
}

function eatFruit(){
  let fruitIdx = fruitPositions.indexOf(snakePosition);
  if (fruitIdx >= 0) {
    pointSound.play()
    pointSound.volume = 0.1
    playerScore += 1
    score.innerHTML = `Current Score: ${playerScore}`
    snakeLength += 1
    if (fruitIdx === 0) {
      fruitPositions.shift();
    } else {
      fruitPositions.pop();
    }
    createFruit()
  }
}


