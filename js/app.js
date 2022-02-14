/*-------------------------------- Constants --------------------------------*/

let highScore = 1;

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
let snakePositions = [];
let cacheSnakeTail;

/*------------------------ Cached Element References ------------------------*/

const upBtn = document.querySelector(".up")
const leftBtn = document.querySelector(".left")
const rightBtn = document.querySelector(".right")
const downBtn = document.querySelector(".down")
const score = document.querySelector(".currentscore")
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
  clearGame()
  clearTimeout(timeInterval)
  id = 0
  playerScore = 0
  snakeLength = 1
  snakePositions = [];
  score.innerHTML = `Current Score: ${playerScore}`
  snakePosition = document.querySelector(`#sq${id}`)
  snakePosition.style.backgroundColor = "green"
  snakePositions = [snakePosition];
  createFruit()
}

function handleClickUp(){
  relateAction("ArrowUp")
}

function handleClickLeft(){
  relateAction("ArrowLeft")
}

function handleClickRight(){
  relateAction("ArrowRight")
}

function handleClickDown(){
  relateAction("ArrowDown")
}

function pressedKey(evt){
  console.log(evt.code)
  relateAction(evt.code)
}

function relateAction(userAction) {
  clearTimeout(timeInterval)
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
    if(playerScore > highScore){
      message.style.display = "inline"
      message.innerHTML = "Congratulations! You beat the high Score"
      confetti.start(2000);
    }else{
      message.style.display = "inline"
      message.innerHTML = "Game Over"  
      
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
    if(snakePositions[0] === document.querySelector("#sq0")){
      id = 90
      snakePosition = document.querySelector(`#sq${id}`)
    }else if(snakePosition === document.querySelector("#sq1")){
      id = 91
      snakePosition = document.querySelector(`#sq${id}`)   
    }else if(snakePosition === document.querySelector("#sq2")){
      id = 92
      snakePosition = document.querySelector(`#sq${id}`)
    }else if(snakePosition === document.querySelector("#sq3")){
      id = 93
      snakePosition = document.querySelector(`#sq${id}`)
    }else if(snakePosition === document.querySelector("#sq4")){
      id = 94
      snakePosition = document.querySelector(`#sq${id}`)
    }else if(snakePosition === document.querySelector("#sq5")){
      id = 95
      snakePosition = document.querySelector(`#sq${id}`)
    }else if(snakePosition === document.querySelector("#sq6")){
      id = 96
      snakePosition = document.querySelector(`#sq${id}`)
    }else if(snakePosition === document.querySelector("#sq7")){
      id = 97
      snakePosition = document.querySelector(`#sq${id}`)
    }else if(snakePosition === document.querySelector("#sq8")){
      id = 98
      snakePosition = document.querySelector(`#sq${id}`)
    }else if(snakePosition === document.querySelector("#sq9")){
      id = 99
      snakePosition = document.querySelector(`#sq${id}`)
    }
  }

function bottomRow(){
    if(snakePosition === document.querySelector("#sq90")){
      snakePosition.style.backgroundColor = ""
      id = 0
      snakePosition = document.querySelector(`#sq${id}`)     
    }else if(snakePosition === document.querySelector("#sq91")){
      snakePosition.style.backgroundColor = ""
      id = 1
      snakePosition = document.querySelector(`#sq${id}`)     
    }else if(snakePosition === document.querySelector("#sq92")){
      snakePosition.style.backgroundColor = ""
      id = 2
      snakePosition = document.querySelector(`#sq${id}`)
    }else if(snakePosition === document.querySelector("#sq93")){
      snakePosition.style.backgroundColor = ""
      id = 3
      snakePosition = document.querySelector(`#sq${id}`)
    }else if(snakePosition === document.querySelector("#sq94")){
      snakePosition.style.backgroundColor = ""
      id = 4
      snakePosition = document.querySelector(`#sq${id}`)
    }else if(snakePosition === document.querySelector("#sq95")){
      snakePosition.style.backgroundColor = ""
      id = 5
      snakePosition = document.querySelector(`#sq${id}`)
    }else if(snakePosition === document.querySelector("#sq96")){
      snakePosition.style.backgroundColor = ""
      id = 6
      snakePosition = document.querySelector(`#sq${id}`)
    }else if(snakePosition === document.querySelector("#sq97")){
      snakePosition.style.backgroundColor = ""
      id = 7
      snakePosition = document.querySelector(`#sq${id}`)
    }else if(snakePosition === document.querySelector("#sq98")){
      snakePosition.style.backgroundColor = ""
      id = 8
      snakePosition = document.querySelector(`#sq${id}`)
    }else if(snakePosition === document.querySelector("#sq99")){
      snakePosition.style.backgroundColor = ""
      id = 9
      snakePosition = document.querySelector(`#sq${id}`)
    }
  }

function leftColumn(){
    if(snakePosition === document.querySelector("#sq0")){
      snakePosition.style.backgroundColor = ""
      id = 9
      snakePosition = document.querySelector(`#sq${id}`)

    }else if(snakePosition === document.querySelector("#sq10")){
      snakePosition.style.backgroundColor = ""
      id = 19
      snakePosition = document.querySelector(`#sq${id}`)

    }else if(snakePosition === document.querySelector("#sq20")){
      snakePosition.style.backgroundColor = ""
      id = 29
      snakePosition = document.querySelector(`#sq${id}`)

    }else if(snakePosition === document.querySelector("#sq30")){
      snakePosition.style.backgroundColor = ""
      id = 39
      snakePosition = document.querySelector(`#sq${id}`)

    }else if(snakePosition === document.querySelector("#sq40")){
      snakePosition.style.backgroundColor = ""
      id = 49
      snakePosition = document.querySelector(`#sq${id}`)

    }else if(snakePosition === document.querySelector("#sq50")){
      snakePosition.style.backgroundColor = ""
      id = 59
      snakePosition = document.querySelector(`#sq${id}`)

    }else if(snakePosition === document.querySelector("#sq60")){
      snakePosition.style.backgroundColor = ""
      id = 69
      snakePosition = document.querySelector(`#sq${id}`)

    }else if(snakePosition === document.querySelector("#sq70")){
      snakePosition.style.backgroundColor = ""
      id = 79
      snakePosition = document.querySelector(`#sq${id}`)

    }else if(snakePosition === document.querySelector("#sq80")){
      snakePosition.style.backgroundColor = ""
      id = 89
      snakePosition = document.querySelector(`#sq${id}`)

    }else if(snakePosition === document.querySelector("#sq90")){
      snakePosition.style.backgroundColor = ""
      id = 99
      snakePosition = document.querySelector(`#sq${id}`)

    }

  }

function rightColumn(){
  if(snakePosition === document.querySelector("#sq9")){
    snakePosition.style.backgroundColor = ""
    id = 0
    snakePosition = document.querySelector(`#sq${id}`)
  }else if(snakePosition === document.querySelector("#sq19")){
    snakePosition.style.backgroundColor = ""
    id = 10
    snakePosition = document.querySelector(`#sq${id}`)
  }else if(snakePosition === document.querySelector("#sq29")){
    snakePosition.style.backgroundColor = ""
    id = 20
    snakePosition = document.querySelector(`#sq${id}`)
  }else if(snakePosition === document.querySelector("#sq39")){
    snakePosition.style.backgroundColor = ""
    id = 30
    snakePosition = document.querySelector(`#sq${id}`)
  }else if(snakePosition === document.querySelector("#sq49")){
    snakePosition.style.backgroundColor = ""
    id = 40
    snakePosition = document.querySelector(`#sq${id}`)
  }else if(snakePosition === document.querySelector("#sq59")){
    snakePosition.style.backgroundColor = ""
    id = 50
    snakePosition = document.querySelector(`#sq${id}`)
  }else if(snakePosition === document.querySelector("#sq69")){
    snakePosition.style.backgroundColor = ""
    id = 60
    snakePosition = document.querySelector(`#sq${id}`)
  }else if(snakePosition === document.querySelector("#sq79")){
    snakePosition.style.backgroundColor = ""
    id = 70
    snakePosition = document.querySelector(`#sq${id}`)
  }else if(snakePosition === document.querySelector("#sq89")){
    snakePosition.style.backgroundColor = ""
    id = 80
    snakePosition = document.querySelector(`#sq${id}`)
  }else if(snakePosition === document.querySelector("#sq99")){
    snakePosition.style.backgroundColor = ""
    id = 90
    snakePosition = document.querySelector(`#sq${id}`)
  }

}

function createFruit(){
  boardNumber = Math.floor(Math.random()*100)
  idNumber = "sq" + boardNumber.toString()
  fruitPosition = document.querySelector(`#${idNumber}`)
  fruitPosition.style.backgroundColor = "red"
}

function eatFruit(){
  if(snakePosition === fruitPosition){
    playerScore += 1
    score.innerHTML = `Current Score: ${playerScore}`
    snakeLength += 1
    createFruit()
  }
}





