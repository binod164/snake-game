/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/

let highScore
let score
let boardNumber
let idNumber
let snakePosition
let id = 0;

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
snakePosition = document.querySelector(`#sq${id}`)
snakePosition.innerHTML = "X"
score = 0;
highScore = 10;

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
    arrowDown();
  }else if(evt.code === "ArrowUp"){
    arrowUp();
  }else if(evt.code === "ArrowRight"){
    arrowRight();
  }else if(evt.code === "ArrowLeft"){
    arrowLeft();
  }

}
function arrowUp(){
  // if(snakePosition === document.querySelector("#sq0")
  // ||snakePosition === document.querySelector("#sq1")
  // ||snakePosition === document.querySelector("#sq2")
  // ||snakePosition === document.querySelector("#sq3")
  // ||snakePosition === document.querySelector("#sq4")
  // ||snakePosition === document.querySelector("#sq5")
  // ||snakePosition === document.querySelector("#sq6")
  // ||snakePosition === document.querySelector("#sq7")
  // ||snakePosition === document.querySelector("#sq8")
  // ||snakePosition === document.querySelector("#sq9")){
  //   snakePosition.innerHTML = ""
  //   id = 90;
  //   snakePosition = document.querySelector(`#sq${id}`)
  //   snakePosition.innerHTML = "X"
  //   console.log("Up")
  //   }else{
  //   snakePosition.innerHTML = ""
  //   id = id - 10;
  //   snakePosition = document.querySelector(`#sq${id}`)
  //   snakePosition.innerHTML = "X"
  //   console.log("Up")
  //   }
}

function arrowDown(){
  // snakePosition.innerHTML = ""
  // id = id + 10;
  // snakePosition = document.querySelector(`#sq${id}`)
  // snakePosition.innerHTML = "X"
  // console.log("Down")
}

function arrowLeft(){
  // snakePosition.innerHTML = ""
  // console.log("Left")
  // id = id - 1;
  // snakePosition = document.querySelector(`#sq${id}`)
  // snakePosition.innerHTML = "X"
}

function arrowRight(){
  // snakePosition.innerHTML = ""
  // id = id + 1;
  // snakePosition = document.querySelector(`#sq${id}`)
  // snakePosition.innerHTML = "X"
  // console.log("Right")
}

function topRow(){

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