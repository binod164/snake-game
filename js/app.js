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
  if(snakePosition === document.querySelector("#sq0")
    ||snakePosition === document.querySelector("#sq1")
    ||snakePosition === document.querySelector("#sq2")
    ||snakePosition === document.querySelector("#sq3")
    ||snakePosition === document.querySelector("#sq4")
    ||snakePosition === document.querySelector("#sq5")
    ||snakePosition === document.querySelector("#sq6")
    ||snakePosition === document.querySelector("#sq7")
    ||snakePosition === document.querySelector("#sq8")
    ||snakePosition === document.querySelector("#sq9")){

    topRow()

    }else{
    snakePosition.innerHTML = ""
    id = Math.abs(id - 10);
    snakePosition = document.querySelector(`#sq${id}`)
    snakePosition.innerHTML = "X"
    }
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
  ||snakePosition === document.querySelector("#sq99")){

  bottomRow()

  }else{
  snakePosition.innerHTML = ""
  id = id + 10;
  snakePosition = document.querySelector(`#sq${id}`)
  snakePosition.innerHTML = "X"
}
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
  ||snakePosition === document.querySelector("#sq90")){

  leftColumn()

  }else{
  snakePosition.innerHTML = ""
  id = id - 1;
  snakePosition = document.querySelector(`#sq${id}`)
  snakePosition.innerHTML = "X"
}
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
  ||snakePosition === document.querySelector("#sq99")){

  rightColumn()

  }else{
  snakePosition.innerHTML = ""
  id = id + 1;
  snakePosition = document.querySelector(`#sq${id}`)
  snakePosition.innerHTML = "X"
}
}

function topRow(){
    if(snakePosition === document.querySelector("#sq0")){
      snakePosition.innerHTML = ""
      id = 90;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.innerHTML = "X"
    }else if(snakePosition === document.querySelector("#sq1")){
      snakePosition.innerHTML = ""
      id = 91;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.innerHTML = "X"
    }else if(snakePosition === document.querySelector("#sq2")){
      snakePosition.innerHTML = ""
      id = 92;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.innerHTML = "X"
    }else if(snakePosition === document.querySelector("#sq3")){
      snakePosition.innerHTML = ""
      id = 93;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.innerHTML = "X"
    }else if(snakePosition === document.querySelector("#sq4")){
      snakePosition.innerHTML = ""
      id = 94;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.innerHTML = "X"
    snakePosition.innerHTML = "X"
    }else if(snakePosition === document.querySelector("#sq5")){
      snakePosition.innerHTML = ""
      id = 95;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.innerHTML = "X"
    }else if(snakePosition === document.querySelector("#sq6")){
      snakePosition.innerHTML = ""
      id = 96;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.innerHTML = "X"
    }else if(snakePosition === document.querySelector("#sq7")){
      snakePosition.innerHTML = ""
      id = 97;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.innerHTML = "X"
    }else if(snakePosition === document.querySelector("#sq8")){
      snakePosition.innerHTML = ""
      id = 98;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.innerHTML = "X"
    }else if(snakePosition === document.querySelector("#sq9")){
      snakePosition.innerHTML = ""
      id = 99;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.innerHTML = "X"
    }

  }

function bottomRow(){
    if(snakePosition === document.querySelector("#sq90")){
      snakePosition.innerHTML = ""
      id = 0;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.innerHTML = "X"
    }else if(snakePosition === document.querySelector("#sq91")){
      snakePosition.innerHTML = ""
      id = 1;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.innerHTML = "X"
    }else if(snakePosition === document.querySelector("#sq92")){
      snakePosition.innerHTML = ""
      id = 2;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.innerHTML = "X"
    }else if(snakePosition === document.querySelector("#sq93")){
      snakePosition.innerHTML = ""
      id = 3;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.innerHTML = "X"
    }else if(snakePosition === document.querySelector("#sq94")){
      snakePosition.innerHTML = ""
      id = 4;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.innerHTML = "X"
    snakePosition.innerHTML = "X"
    }else if(snakePosition === document.querySelector("#sq95")){
      snakePosition.innerHTML = ""
      id = 5;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.innerHTML = "X"
    }else if(snakePosition === document.querySelector("#sq96")){
      snakePosition.innerHTML = ""
      id = 6;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.innerHTML = "X"
    }else if(snakePosition === document.querySelector("#sq97")){
      snakePosition.innerHTML = ""
      id = 7;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.innerHTML = "X"
    }else if(snakePosition === document.querySelector("#sq98")){
      snakePosition.innerHTML = ""
      id = 8;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.innerHTML = "X"
    }else if(snakePosition === document.querySelector("#sq99")){
      snakePosition.innerHTML = ""
      id = 9;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.innerHTML = "X"
    }

  }

  function leftColumn(){
    if(snakePosition === document.querySelector("#sq0")){
      snakePosition.innerHTML = ""
      id = 9;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.innerHTML = "X"
    }else if(snakePosition === document.querySelector("#sq10")){
      snakePosition.innerHTML = ""
      id = 19;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.innerHTML = "X"
    }else if(snakePosition === document.querySelector("#sq20")){
      snakePosition.innerHTML = ""
      id = 29;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.innerHTML = "X"
    }else if(snakePosition === document.querySelector("#sq30")){
      snakePosition.innerHTML = ""
      id = 39;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.innerHTML = "X"
    }else if(snakePosition === document.querySelector("#sq40")){
      snakePosition.innerHTML = ""
      id = 49;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.innerHTML = "X"
    snakePosition.innerHTML = "X"
    }else if(snakePosition === document.querySelector("#sq50")){
      snakePosition.innerHTML = ""
      id = 59;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.innerHTML = "X"
    }else if(snakePosition === document.querySelector("#sq60")){
      snakePosition.innerHTML = ""
      id = 69;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.innerHTML = "X"
    }else if(snakePosition === document.querySelector("#sq70")){
      snakePosition.innerHTML = ""
      id = 79;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.innerHTML = "X"
    }else if(snakePosition === document.querySelector("#sq80")){
      snakePosition.innerHTML = ""
      id = 89;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.innerHTML = "X"
    }else if(snakePosition === document.querySelector("#sq90")){
      snakePosition.innerHTML = ""
      id = 99;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.innerHTML = "X"
    }

  }

function rightColumn(){
  if(snakePosition === document.querySelector("#sq9")){
    snakePosition.innerHTML = ""
    id = 0;
    snakePosition = document.querySelector(`#sq${id}`)
    snakePosition.innerHTML = "X"
  }else if(snakePosition === document.querySelector("#sq19")){
    snakePosition.innerHTML = ""
    id = 10;
    snakePosition = document.querySelector(`#sq${id}`)
    snakePosition.innerHTML = "X"
  }else if(snakePosition === document.querySelector("#sq29")){
    snakePosition.innerHTML = ""
    id = 20;
    snakePosition = document.querySelector(`#sq${id}`)
    snakePosition.innerHTML = "X"
  }else if(snakePosition === document.querySelector("#sq39")){
    snakePosition.innerHTML = ""
    id = 30;
    snakePosition = document.querySelector(`#sq${id}`)
    snakePosition.innerHTML = "X"
  }else if(snakePosition === document.querySelector("#sq49")){
    snakePosition.innerHTML = ""
    id = 40;
    snakePosition = document.querySelector(`#sq${id}`)
    snakePosition.innerHTML = "X"
  snakePosition.innerHTML = "X"
  }else if(snakePosition === document.querySelector("#sq59")){
    snakePosition.innerHTML = ""
    id = 50;
    snakePosition = document.querySelector(`#sq${id}`)
    snakePosition.innerHTML = "X"
  }else if(snakePosition === document.querySelector("#sq69")){
    snakePosition.innerHTML = ""
    id = 60;
    snakePosition = document.querySelector(`#sq${id}`)
    snakePosition.innerHTML = "X"
  }else if(snakePosition === document.querySelector("#sq79")){
    snakePosition.innerHTML = ""
    id = 70;
    snakePosition = document.querySelector(`#sq${id}`)
    snakePosition.innerHTML = "X"
  }else if(snakePosition === document.querySelector("#sq89")){
    snakePosition.innerHTML = ""
    id = 80;
    snakePosition = document.querySelector(`#sq${id}`)
    snakePosition.innerHTML = "X"
  }else if(snakePosition === document.querySelector("#sq99")){
    snakePosition.innerHTML = ""
    id = 90;
    snakePosition = document.querySelector(`#sq${id}`)
    snakePosition.innerHTML = "X"
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
