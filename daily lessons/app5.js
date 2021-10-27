/*
    Functions

    function functionName(argument) {
        do stuff
    }

    funcName needs to say what the function is doing
        countTo
        addByFive
        genertaeLastNames

    funNames are camel case

    Arguments
        food for the function to operate
        can have a function without an argument
        functions can aslo have more than one argument

    functions should run one task and one task only
*/

function countString(str) {
    // do stuff
    console.log(`${str} has ${str.length} characters`);
    return;
};

countString("hello");

function getSum(a ,b) {
    a = 5;
    b = 10;
    console.log(a + b);
    return;
}

function countTo10() {
    let i = 0;
    while (i <= 10) {
        console.log(i)
        i++
    }
    return;
}

countTo10

// let and const

var i = 25;

for (let i = 0; i < 7; i++) {
    console.log(i);
}

console.log(i);

const baz = 8;
console.log(baz);

for (let i = 0; i < 19; i++) {
    const num = i;
    console.log(num);
}

