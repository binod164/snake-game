/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/

let highScore
let score
let boardNumber
let idNumber

/*------------------------ Cached Element References ------------------------*/

const easyBtn = document.querySelector(".easy")
const mediumBtn = document.querySelector(".medium")
const hardBtn = document.querySelector(".hard")

/*----------------------------- Event Listeners -----------------------------*/

easyBtn.addEventListener("click" ,handleClick)
mediumBtn.addEventListener("click" ,handleClick)
hardBtn.addEventListener("click" ,handleClick)
document.addEventListener("keydown", pressedKey)
  

/*-------------------------------- Functions --------------------------------*/
init()

function init(){
score = 0;
highScore = 10;
const snakePosition = document.querySelector("#sq0")
snakePosition.innerHTML = "X"
render()
}

function render(){

}

function handleClick(){
  snakeMoves();
  createFruit();
}

function snakeMoves(){

}

function pressedKey(evt){
  console.log(evt.code)
  if(evt.code === "ArrowDown"){
    console.log("Down")
  }else if(evt.code === "ArrowUp"){
    console.log("Up")
  }else if(evt.code === "ArrowRight"){
    console.log("Right")
  }else if(evt.code === "ArrowLeft"){
    console.log("Left")
  }

}

function createFruit(){
boardNumber = Math.floor(Math.random()*100)
console.log(boardNumber)
idNumber = "sq" + boardNumber.toString()
console.log(idNumber)
const fruitPosition = document.querySelector(`#${idNumber}`)
fruitPosition.innerHTML = "O"

}
createFruit()
// pressedKey()