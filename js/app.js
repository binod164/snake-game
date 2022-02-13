/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/

let highScore
let score
let boardNumber
let idNumber
let snakePosition
let fruitPosition
let id = 0
let timeInterval

/*------------------------ Cached Element References ------------------------*/

// const easyBtn = document.querySelector(".easy")
// const mediumBtn = document.querySelector(".medium")
// const hardBtn = document.querySelector(".hard")

/*----------------------------- Event Listeners -----------------------------*/

// easyBtn.addEventListener("click" ,handleClick)
// mediumBtn.addEventListener("click" ,handleClick)
// hardBtn.addEventListener("click" ,handleClick)
document.addEventListener("keydown", pressedKey)
  

/*-------------------------------- Functions --------------------------------*/
init()

function init(){
snakePosition = document.querySelector(`#sq${id}`)
snakePosition.style.backgroundColor = "green"
// snakePosition.style.backgroundColor = "green"
score = 0;
highScore = 10;
createFruit()
render()
}

function render(){

}

function handleClick(){
  snakeMoves();
  // createFruit();
}

function snakeMoves(){

}

function eatFruit(){
  if(snakePosition === fruitPosition){
    score += 1
    createFruit()
    }
    console.log(`score ${score}`)
}

function pressedKey(evt){
  clearTimeout(timeInterval)
  console.log(evt.code)
  relateAction(evt.code)
}

function relateAction(userAction) {
  if(userAction === "ArrowDown"){
    arrowDown();
  }else if(userAction === "ArrowUp"){
    arrowUp();
  }else if(userAction === "ArrowRight"){
    arrowRight();
  }else if(userAction === "ArrowLeft"){
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
    ||snakePosition === document.querySelector("#sq9"))
  {

    topRow()

  }else{
    snakePosition.style.backgroundColor = ""
    id = Math.abs(id - 10);
    snakePosition = document.querySelector(`#sq${id}`)
    snakePosition.style.backgroundColor = "green"
  }
  timeInterval = setTimeout(() => relateAction("ArrowUp"), 1000);
  eatFruit()
}

function arrowDown(){
  console.log("arrow down");
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
      id = id + 10;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.style.backgroundColor = "green"
  }
  timeInterval = setTimeout(() => relateAction("ArrowDown"), 1000);
  // relateAction("ArrowDown")
  eatFruit()
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
      id = id - 1;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.style.backgroundColor = "green"
  }
  timeInterval = setTimeout(() => relateAction("ArrowLeft"), 1000);
  eatFruit()
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
      id = id + 1;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.style.backgroundColor = "green"
  }
  timeInterval = setTimeout(() => relateAction("ArrowRight"), 1000);
  eatFruit()
}

function topRow(){
    if(snakePosition === document.querySelector("#sq0")){
      snakePosition.style.backgroundColor = ""
      id = 90;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.style.backgroundColor = "green"
    }else if(snakePosition === document.querySelector("#sq1")){
      snakePosition.style.backgroundColor = ""
      id = 91;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.style.backgroundColor = "green"
    }else if(snakePosition === document.querySelector("#sq2")){
      snakePosition.style.backgroundColor = ""
      id = 92;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.style.backgroundColor = "green"
    }else if(snakePosition === document.querySelector("#sq3")){
      snakePosition.style.backgroundColor = ""
      id = 93;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.style.backgroundColor = "green"
    }else if(snakePosition === document.querySelector("#sq4")){
      snakePosition.style.backgroundColor = ""
      id = 94;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.style.backgroundColor = "green"
    snakePosition.style.backgroundColor = "green"
    }else if(snakePosition === document.querySelector("#sq5")){
      snakePosition.style.backgroundColor = ""
      id = 95;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.style.backgroundColor = "green"
    }else if(snakePosition === document.querySelector("#sq6")){
      snakePosition.style.backgroundColor = ""
      id = 96;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.style.backgroundColor = "green"
    }else if(snakePosition === document.querySelector("#sq7")){
      snakePosition.style.backgroundColor = ""
      id = 97;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.style.backgroundColor = "green"
    }else if(snakePosition === document.querySelector("#sq8")){
      snakePosition.style.backgroundColor = ""
      id = 98;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.style.backgroundColor = "green"
    }else if(snakePosition === document.querySelector("#sq9")){
      snakePosition.style.backgroundColor = ""
      id = 99;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.style.backgroundColor = "green"
    }

  }

function bottomRow(){
    if(snakePosition === document.querySelector("#sq90")){
      snakePosition.style.backgroundColor = ""
      id = 0;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.style.backgroundColor = "green"
    }else if(snakePosition === document.querySelector("#sq91")){
      snakePosition.style.backgroundColor = ""
      id = 1;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.style.backgroundColor = "green"
    }else if(snakePosition === document.querySelector("#sq92")){
      snakePosition.style.backgroundColor = ""
      id = 2;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.style.backgroundColor = "green"
    }else if(snakePosition === document.querySelector("#sq93")){
      snakePosition.style.backgroundColor = ""
      id = 3;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.style.backgroundColor = "green"
    }else if(snakePosition === document.querySelector("#sq94")){
      snakePosition.style.backgroundColor = ""
      id = 4;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.style.backgroundColor = "green"
    snakePosition.style.backgroundColor = "green"
    }else if(snakePosition === document.querySelector("#sq95")){
      snakePosition.style.backgroundColor = ""
      id = 5;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.style.backgroundColor = "green"
    }else if(snakePosition === document.querySelector("#sq96")){
      snakePosition.style.backgroundColor = ""
      id = 6;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.style.backgroundColor = "green"
    }else if(snakePosition === document.querySelector("#sq97")){
      snakePosition.style.backgroundColor = ""
      id = 7;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.style.backgroundColor = "green"
    }else if(snakePosition === document.querySelector("#sq98")){
      snakePosition.style.backgroundColor = ""
      id = 8;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.style.backgroundColor = "green"
    }else if(snakePosition === document.querySelector("#sq99")){
      snakePosition.style.backgroundColor = ""
      id = 9;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.style.backgroundColor = "green"
    }

  }

function leftColumn(){
    if(snakePosition === document.querySelector("#sq0")){
      snakePosition.style.backgroundColor = ""
      id = 9;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.style.backgroundColor = "green"
    }else if(snakePosition === document.querySelector("#sq10")){
      snakePosition.style.backgroundColor = ""
      id = 19;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.style.backgroundColor = "green"
    }else if(snakePosition === document.querySelector("#sq20")){
      snakePosition.style.backgroundColor = ""
      id = 29;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.style.backgroundColor = "green"
    }else if(snakePosition === document.querySelector("#sq30")){
      snakePosition.style.backgroundColor = ""
      id = 39;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.style.backgroundColor = "green"
    }else if(snakePosition === document.querySelector("#sq40")){
      snakePosition.style.backgroundColor = ""
      id = 49;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.style.backgroundColor = "green"
    snakePosition.style.backgroundColor = "green"
    }else if(snakePosition === document.querySelector("#sq50")){
      snakePosition.style.backgroundColor = ""
      id = 59;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.style.backgroundColor = "green"
    }else if(snakePosition === document.querySelector("#sq60")){
      snakePosition.style.backgroundColor = ""
      id = 69;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.style.backgroundColor = "green"
    }else if(snakePosition === document.querySelector("#sq70")){
      snakePosition.style.backgroundColor = ""
      id = 79;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.style.backgroundColor = "green"
    }else if(snakePosition === document.querySelector("#sq80")){
      snakePosition.style.backgroundColor = ""
      id = 89;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.style.backgroundColor = "green"
    }else if(snakePosition === document.querySelector("#sq90")){
      snakePosition.style.backgroundColor = ""
      id = 99;
      snakePosition = document.querySelector(`#sq${id}`)
      snakePosition.style.backgroundColor = "green"
    }

  }

function rightColumn(){
  if(snakePosition === document.querySelector("#sq9")){
    snakePosition.style.backgroundColor = ""
    id = 0;
    snakePosition = document.querySelector(`#sq${id}`)
    snakePosition.style.backgroundColor = "green"
  }else if(snakePosition === document.querySelector("#sq19")){
    snakePosition.style.backgroundColor = ""
    id = 10;
    snakePosition = document.querySelector(`#sq${id}`)
    snakePosition.style.backgroundColor = "green"
  }else if(snakePosition === document.querySelector("#sq29")){
    snakePosition.style.backgroundColor = ""
    id = 20;
    snakePosition = document.querySelector(`#sq${id}`)
    snakePosition.style.backgroundColor = "green"
  }else if(snakePosition === document.querySelector("#sq39")){
    snakePosition.style.backgroundColor = ""
    id = 30;
    snakePosition = document.querySelector(`#sq${id}`)
    snakePosition.style.backgroundColor = "green"
  }else if(snakePosition === document.querySelector("#sq49")){
    snakePosition.style.backgroundColor = ""
    id = 40;
    snakePosition = document.querySelector(`#sq${id}`)
    snakePosition.style.backgroundColor = "green"
  snakePosition.style.backgroundColor = "green"
  }else if(snakePosition === document.querySelector("#sq59")){
    snakePosition.style.backgroundColor = ""
    id = 50;
    snakePosition = document.querySelector(`#sq${id}`)
    snakePosition.style.backgroundColor = "green"
  }else if(snakePosition === document.querySelector("#sq69")){
    snakePosition.style.backgroundColor = ""
    id = 60;
    snakePosition = document.querySelector(`#sq${id}`)
    snakePosition.style.backgroundColor = "green"
  }else if(snakePosition === document.querySelector("#sq79")){
    snakePosition.style.backgroundColor = ""
    id = 70;
    snakePosition = document.querySelector(`#sq${id}`)
    snakePosition.style.backgroundColor = "green"
  }else if(snakePosition === document.querySelector("#sq89")){
    snakePosition.style.backgroundColor = ""
    id = 80;
    snakePosition = document.querySelector(`#sq${id}`)
    snakePosition.style.backgroundColor = "green"
  }else if(snakePosition === document.querySelector("#sq99")){
    snakePosition.style.backgroundColor = ""
    id = 90;
    snakePosition = document.querySelector(`#sq${id}`)
    snakePosition.style.backgroundColor = "green"
  }

}
function createFruit(){
boardNumber = Math.floor(Math.random()*100)
idNumber = "sq" + boardNumber.toString()
fruitPosition = document.querySelector(`#${idNumber}`)
fruitPosition.style.backgroundColor = "red"

}

