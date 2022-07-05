const player1ScorBtn = document.querySelector("#playr1button")
const player2ScorBtn = document.querySelector("#playr2button")
const resetbtn = document.querySelector("#reset");
const player1ScorBoard = document.querySelector("#p1scoreboard")
const player2ScorBoard = document.querySelector("#p2scoreboard")
const highGameScore = document.querySelector("#gamelevels");

alert("You're welcome to the show!!")
winningScore = 5;
let player1Score = 0
let gameOver = false;
player1ScorBtn.addEventListener("click", function () {
    if (!gameOver) {
        player1Score += 1;
    }
    if (player1Score === winningScore) {
        gameOver = true;
        player1ScorBoard.classList.add("winner")
        player2ScorBoard.classList.add("loser")
        player1ScorBtn.classList.add("winnner")
        player2ScorBtn.classList.add("losser")
    }
    player1ScorBoard.textContent = player1Score;
})

let player2Score = 0;
player2ScorBtn.addEventListener("click", function () {
    if (!gameOver) {
        player2Score += 1;
    } if (player2Score === winningScore) {
        gameOver = true;
        player2ScorBoard.classList.add("winner")
        player1ScorBoard.classList.add("loser")
        player2ScorBtn.classList.add("winnner")
        player1ScorBtn.classList.add("losser")
    }
    player2ScorBoard.textContent = player2Score;
})

function resetFunc() {
    gameOver = false;
    player1Score = 0;
    player2Score = 0;
    player1ScorBoard.textContent = 0;
    player2ScorBoard.textContent = 0;
    player1ScorBoard.classList.remove("winner", "loser")
    player2ScorBoard.classList.remove("loser", "winner")
    player2ScorBtn.classList.remove("winnner", "losser")
    player1ScorBtn.classList.remove("losser", "winnner")
}

resetbtn.addEventListener("click", resetFunc)

highGameScore.addEventListener("change", function () {
    winningScore = parseInt(this.value)
    resetFunc()
    // gameOver = false;
    // player1Score = 0;
    // player2Score = 0;
    // player1ScorBoard.textContent =0;
    // player2ScorBoard.textContent =0;
})



// extend and keywords
class MyPet {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    intro(){
        return `hi,my name is ${this.name} and i am ${this.age} years old`
    }
}

class Bird extends MyPet {
   
    singing(){
        return "quew quew quew"
    }
}


class Dog extends MyPet {
    
    bark(){
        return"woooof!"
    }
}