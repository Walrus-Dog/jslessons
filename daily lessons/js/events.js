let clicker = document.getElementById('clicker');
let display = document.getElementById('display');

clicker.addEventListener('click', ()=> {
    display.innerText = "hey who clicked me"
});

let form = document.getElementById("form");

// form.addEventListener("submit", =(e)=> {
//     e.preventDefault();
//     let nameInput = document.getElementById("inputName").value;
//     let display2 = document.getElementById("display2");
//     display2.innerText = nameInput;
// });

let box = document.getElementById("box");

let firstStyle = {
    backgroundColor: "red",
    borderColor: "blue"
};

for (let prop in firstStyle) {
    box.style[prop] = firstStyle[prop];
};

let pos = 0;

let colors = [
    "red", "blue", "green", "purple", "yellow", "orange"
]

box.addEventListener('click', ()=> {     
    /*
    if backgronudColor = red
    THEN backgroudnColor = blue
    borderColor = red
    ELSE backgroundColor = red
    borderColor = blue
    */
    box.style.transform = `rotate(${pos+=45}deg)`;

    // if (box.style.backgroundColor == "red") {
    //     box.style.backgroundColor = "blue";
    //     box.style.borderColor = "red";
    // } else {
    //     box.style.backgroundColor = "red";
    //     box.style.borderColor = "blue";
    // }

    if (i == colors.length - 1) {
        i = 0; 
    } else {
        i+=1;
    }
    box.style.backgroundColor = colors[i];
});

// build a hero generator; a new hero will be assembled each time the button is clicked

let adj = [
    "fast", "sleepy", "nefarious", "ultimate", "crazy"
];

let heros = [
    "guy", "chick", "dog", "rat", "bottle", "gamer"
];

let superpowers = [
    "can eat 2 popeyes bisucuit no drink", "can get to the toostie roll center of a toostsie pop", "has leg vision", "has knowledge of printers", "can leap 12 mcdonalds in a single bound"
];



let message;

let heroDisplay = document.getElementById("heroDisplay");
let assembleBtn = document.getElementById("assembleBtn");

assembleBtn.addEventListener("click", ()=> {
    let adjIdx = Math.floor(Math.random() * adj.length);
    let heroIdx = Math.floor(Math.random() * heros.length);
    let superpowersIdx = Math.floor(Math.random() * superpowers.length);

    let adjs = adj[adjIdx];
    let hero = heros[heroIdx];
    let power = superpowers[superpowersIdx];
    
    message = `The ${adjs} ${hero} ${power}`
    heroDisplay.innerText = message;
})

/*
    Rules

    7 or 11 on first roll wins
    snake eyes is a lose
    if not 7 or 11 on first roll and not snake eyes, 
        roll until match
        7 after first roll lose

    set win to false
    set gamePlay to true
    set rolls to 0

    while gamePlay
        set total
        rolls++

        if total is equal to 2
            then gamePlay = false

        else if (total is 7 or total is 11) AND rolls ==1
            set win to true
            set gamePlay to !win

        else if (total != 7 or total != 11) AND rolls > 1
            then win to true
            set gamePlay to win
        else if (total is equal to 7 AND rolls >1)
            set gamePlay to false
*/ 

let die1 = document.getElementById("die1"),
    die2 = document.getElementById("die2"), 
    roll = document.getElementById("roll"),
    total = document.getElementById("total"),
    start = document.getElementById("start"),
    rollDispaly = document.getElementById("rollDisplay"),
    gameStatus = document.getElementById("gameStatus"),
    pointDisplay = document.getElementById("pointDisplay"),
    rolls = 0,
    gamePlay = true,
    win = false;

roll.addEventListener("click", (e)=> {
    die1.innerText = Math.ceil(Math.random() * 6);
    die2.innerText = Math.ceil(Math.random() * 6);
    totalDisplay.innerText = parseInt(die1.innerText)  + parseInt(die2.innerText)
    rolls++;
    rollDispaly.innerText = rolls;
});

// function for gameplay 

const craps =()=> {

    die1.innerText = "";
    die2.innerText = "";
    let gameStats = {
        gamePlay: true,
        rolls: rolls,
        win: false
    }
    
    let point;

    while (gameStats.gamePlay) {
        // ternary operator es6 handling of conditionals
        // condition ? do stuff : do something else
        // total == 2 ? !gamePlay : null;

        if (total == 2) {
            gameStats.gamePlay = false;
        } else if ((total = 7 || total == 11) && gamestats.rolls == 1) {
            gameStats.win = !gameStats.win
        } else if ((total != 7 && total != 11) && gameStats.rolls == 1) {
            point = total;
            pointDisplay.innerText = point;
        } else if (point == total && gameStats.rolls > 1) {
            gameStats.win = !gameStats.win;
        } else if (point == 7 && rolls > 1) {
            gameStats.gamePlay = false;
        } else {
            gameStatus.innerText = "roll again bucko"
        };

        win ? !gamePlay : null;
    }

    if (win == true && gamePlay == false) {
        gameStatus.innerText = "you win babyeeeee"
    } else if (win == false && gamePlay == false) {
        gameStatus.innerText = "aww dang dude, try again"
    } 

    return gameStatus.innerText;
};

start.addEventListener("click", ()=> {
    rolls = "";

})