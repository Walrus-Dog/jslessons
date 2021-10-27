// more array's

//nested array's
var teams = [
    ["Dallas", "Cowboys"],
    ["Washingotn", "Football Team"],
    ["Philly", "Eagles"],
    ["New York", "GIants"]
];

console.log(teams.length);
console.log(teams);
console.log(teams[1]);
console.log(teams[1][1]);

// nested arrays are dumb 

// Repition looping

/*
    for
    while
    forEach
    for of
    for in
    do while

    for 

    for (initialization; condition; iteration) {
        do stuff
    }

    var i = 0;
    i < array.length;
    i++;

    while

    while (condition) {
        do stuff
    }

    forEach

    arr.forEach(item => do stuff)
*/

for (var i = 0; i < downtownJackson.length; i++) {
    console.log(`Hello ${downtownJackson}`);
}

var i = 0;

while (i < southJackson.length) {
    console.log(`hey ${southJackson}`);

    i++;
}

var stachWallet = 10000000;

for (var i = 0; i < southJackson.length; i++) {
    console.log(`Here is $1,000,000, ${southJackson}`);
    stachWallet -= 1000000;
}

console.log(`Satch now has ${stachWallet}`)

var i = 0;

while (stachWallet >= 1000000) {
    console.log(`Here is $1,000,000, ${southJackson}`);
    i++;
    stachWallet -= 1000000;
}

downtownJackson.forEach(coder => {
    console.log(`Hello, ${coder}`);
})