/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/

let highScore
let score
let boardNumber
let fruitPosition

/*------------------------ Cached Element References ------------------------*/

const easyBtn = document.querySelector(".easy")
const mediumBtn = document.querySelector(".medium")
const hardBtn = document.querySelector(".hard")

/*----------------------------- Event Listeners -----------------------------*/

easyBtn.addEventListener("click" ,handleClick)
mediumBtn.addEventListener("click" ,handleClick)
hardBtn.addEventListener("click" ,handleClick)


/*-------------------------------- Functions --------------------------------*/
init()

function init(){

}

function handleClick(){
  createSnake();
  snakeMoves();
  createFruit();
}

function createSnake(){

}

function snakeMoves(){

}

function createFruit(){
boardNumber = Math.floor(Math.random()*100)
console.log(boardNumber)
fruitPosition = "sq" + boardNumber.toString()
console.log(fruitPosition)
const id = document.querySelector(`#${fruitPosition}`)
id.innerHTML = "<span>X</span>"
console.log(id)

}
createFruit()
