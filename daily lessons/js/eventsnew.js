let clicker = document.getElementById('clicker');
let display = document.getElementById('display');


clicker.addEventListener('click', ()=> {
    display.innerText = 'Hey, who clicked me?';
});

let form = document.getElementById('form');



form.addEventListener('submit', (e)=> {
    e.preventDefault();
    let nameInput = document.getElementById('inputName').value; 
    let display2 = document.getElementById('display2');
    display2.innerText = nameInput;
    console.log('clicked');
})

let box = document.getElementById('box');

let firstStyle = {
    backgroundColor: 'red',
    borderColor: '#109eff'
}

for (let prop in firstStyle) {
    box.style[prop] = firstStyle[prop];
}

let pos = 0;

let colors = [
    'red',
    'blue',
    'green',
    'purple',
    'yellow',
    'orange',
    'black'
];

let i = 0;

box.addEventListener('click', ()=> {
    // box.style.backgroundColor = 'red';
    // box.style.borderColor = '#109eff';

    /*
    IF backgroundColor = '#f00'
    THEN backgroundColor = '#109eff'
        borderColor = '#f00'
    ELSE background = '#f00'
        borderColor = '#109eff'
    */
    box.style.transform = `rotate(${pos+=45}deg)`;
    // if (box.style.backgroundColor == 'red') {
    //     box.style.backgroundColor = '#109eff';
    //     box.style.borderColor = 'red'
    // } else {
    //     box.style.backgroundColor = 'red';
    //     box.style.borderColor = '#109eff';
    // }
    if (i == colors.length - 1) {
        i = 0;
    } else {
        i+=1;
    }
    box.style.backgroundColor = colors[i]
})

// build a hero generator; a new hero will be assembled when button is clicked

let adjectives = ['Fast', 'Sleepy', 'Nefarious', 'Ultimate', 'Quirky'];

let heroes = [
    'Python',
    'C-Sharper',
    'JavaScripteur',
    'Scarecrow',
    'Flamingal'
];

let superpowers = [
    'can chew 12 times before swallowing',
    'has x-ray hearing',
    'can process 1000 for loops in a nanosecond',
    'beat Joey Chestnut in a hot dog eating contest',
    'can come back from a 28-3 lead'
];



let message;

let heroDisplay = document.getElementById('heroDisplay');
let assembleBtn = document.getElementById('assembleBtn');

assembleBtn.addEventListener('click', (e)=> {
    e.preventDefault();

    let adjIdx = Math.floor(Math.random() * adjectives.length);
    let heroIdx = Math.floor(Math.random() * heroes.length);
    let powerIdx = Math.floor(Math.random() * superpowers.length);

    let adj = adjectives[adjIdx];
    let hero = heroes[heroIdx];
    let power = superpowers[powerIdx];

    message = `The ${adj} ${hero} ${power}`;
    heroDisplay.innerText = message;
});
// Dice game
let die1 = document.getElementById('die1'), 
    die2 = document.getElementById('die2'), 
    roll = document.getElementById('roll'),
    totalDisplay = document.getElementById('totalDisplay'),
    point = 0,
    start = document.getElementById('start'),
    rollDisplay = document.getElementById('rollDisplay'),
    gameStatus = document.getElementById('gameStatus'),
    pointDisplay = document.getElementById('pointDisplay'),
    rolls = 0,
    total = 0,
    gamePlay,
    win
;


/*
    Rules 

    7 or 11 on first roll wins
    snakes eyes (two ones) is a lose 
    if not 7 or 11 on first roll and not snake eyes
        roll until match
        7 after first roll lose


    SET win to false;
    SET gamePlay to true;
    SET rolls to 0;

    while gamePlay
        SET total
        rolls++;

        if total is equal to 2 
            SET gamePlay to false 

        else if (total is equal to 7 or total is equal to 11) AND rolls == 1
            SET win to true;
            SET gamePlay to !win
        else if (total != 7 or total != 11) AND rolls == 1 
            THEN SET point to total
        else if point is equal to total AND rolls > 1 
            THEN win to true;
            SET gamePlay to !win
        else if (total is equal to 7 AND rolls > 1)
            SET gamePlay to false
*/


roll.addEventListener('click', (e)=> {
    e.preventDefault();
    die1.innerText = Math.ceil(Math.random() * 6);
    die2.innerText = Math.ceil(Math.random() * 6);
    total = parseInt(die1.innerText) + parseInt(die2.innerText);
    totalDisplay.innerText = total;
    rolls++
    rollDisplay.innerText = rolls;
    craps();
})

// function for gameplay 

const craps =()=> {
    // console.log('Game has started');


        // ternary operator es6 handling of conditionals
        // condition ? do stuff : do something else
        // total == 2 ? !gamePlay : null 
        console.log(total);
        if (total == 2) {
            gamePlay = false;
        } else if ((total == 7 || total == 11) && rolls == 1) {
            win = !win;
        } else if ((total != 7 && total != 11) && rolls == 1) {
            point = total;
            pointDisplay.innerText = point
        } else if (total == 7 && rolls > 1) {
            gamePlay = false;
        } else if (point == total && rolls > 1) {
            win = !win;
        }  else {
            gameStatus.innerText = 'Roll Again';
        }
        win ? gamePlay = false : null;
        
        
        if (win == true) {
            gameStatus.innerText = 'You win! Hot hand!';
            rolls = 0;
        } else if (win == false && gamePlay == false) {
            gameStatus.innerText = 'Aww crap! Go try the roulette wheel'
            rolls = 0;
        } 
        
        return gameStatus.innerText;
    
};

// second parameter needs to be function name without parentheses
start.addEventListener('click', ()=> {
    rollDisplay.innerText = '';
    die1.innerText = '';
    die2.innerText = '';
    pointDisplay.innerText = '';
    totalDisplay.innerText = '';
    gamePlay = true;
    win = false;
    gameStatus.innerText = 'Daddy needs a new pair of shoes!'
    // console.log([rolls, gamePlay, win])
    
});