/*
    FUNCTIONALITY

    handle player changr (x or o)
    handle restart game
    handle cell played
    handle win condtions / result validation
    handle cell click

    ** keep score

*/ 

const statusDisplay = document.querySelector(".game-status");

//game start settings
let gameActive = true;
let currentPlayer = "X"; // x or O

let gameState = [
    "","","",
    "","","",
    "","",""
];

const winningMessage =()=> `Player ${currentPlayer} has won!`;
const drawMessage =()=> `Game has ended in a draw`;
const currentPlayerTurn =()=> `It is ${currentPlayer}'s turn`;

statusDisplay.innerText = currentPlayerTurn();

const winningConditions = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let xScore = document.getElementById("xScore");
let oScore = document.getElementById("oScore");
let catScore = document.getElementById("catScore");
let scoreObj = {
    x:0,
    o:0,
    c:0
};

xScore.innerText = scoreObj.x;
oScore.innerText = scoreObj.o;
catScore.innerText = scoreObj.c;

console.log(oScore, xScore)
// handle cell clicked
const handleCellCLicked =(clickedCellEvent)=> {
    // grab clicked cell
    const clickedCell = clickedCellEvent.target;
    const clickedCellIdx = parseInt(clickedCell.getAttribute("data-cell-index"));
    //console.log(clickedCell, clickedCellIdx);
    
    // if the index is not an empty string or if the gameActive is false
    if (gameState[clickedCellIdx] !== "" || !gameActive) {
        return;
    };

    handleCellPlayed(clickedCell, clickedCellIdx);
    resultValidation();
};

// handle cellPlayed
const handleCellPlayed =(clickedCell, clickedCellIdx)=> {
    gameState[clickedCellIdx] = currentPlayer;

    if (currentPlayer == "X") {
        clickedCell.style.color = "orangered";
    } else {
        clickedCell.style.color = "#272727";
    };

    //ternary version
    // currentPlayer == "X" ? clickedCell.stlye.color = "orangered" : clickedCell.style.color = "#272727";

    clickedCell.innerHTML = currentPlayer;
};

const resultValidation =()=> {
    let roundWon = false;

    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];

        if (a == "" || b == "" || c == "") {
            continue;
        };

        if (a == b && b == c) {
            roundWon = true;
            break;
        };
    };

    if (roundWon) {
        statusDisplay.innerText = winningMessage();

        if (currentPlayer == "X") {
            scoreObj.x+=1;
            xScore.innerText = scoreObj.x;
        } else {
            scoreObj.o+=1;
            oScore.innerText = scoreObj.o;
        }

        gameActive = false;
        return;
    };

    let roundDraw = !gameState.includes("");

    if (roundDraw) {
        statusDisplay.innerText = drawMessage();
        scoreObj.c+=1;
        catScore.innerText = scoreObj.c
        gameActive = false;
        return;
    };

    playerChange();
};

// handle player change
const playerChange =()=> {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerText = currentPlayerTurn();
};

//restart the game
const restartGame =()=> {
    gameActive = true;
    currentPlayer = "X";
    gameState = [
        "","","",
        "","","",
        "","",""
    ];

    statusDisplay.innerText = currentPlayerTurn();
    document.querySelectorAll(".cell").forEach(cell => cell.innerHTML = "");
};

document.querySelectorAll(".cell").forEach(cell => cell.addEventListener("click", handleCellCLicked));

document.querySelector(".game-restart").addEventListener("click", restartGame);