//spread operator, allows us to essintaly write a new array. can be used to keep an existing array from having to be mutated. as in have an array just to store new info in and add the existing arrays to it
//...arr

let arr = [
    "stuff",
    "more stuff",
    "extra stuff",
    "double stuff",
    "wow stuff"
];

console.log(...arr);

let arr2 = [
    1, 2, 3 ,4
];

let arr3 = [
    ...arr2, 5, 6 ,7
];

let otherArr = [
    "stuff",
    "more stuff",
    "extra stuff",
    "double stuff",
    "wow stuff"
]

//.map(), a function that creates a new array given an existing array

console.log(otherArr.map(item => `Hello ${item}`));

let orig = [ 1, 2 ,3 ,4];

let copy = [...orig];
console.log(copy);

copy[0] = 0;

// .filter() returns an array contating a subset of the elements from and original array

let cowboyScores = [
    29, 20, 41, 36, 44, 35, 20, 16, 43
];

let gamesOver30 = cowboyScores.filter(x => x > 30);

let vowels = ["a", "e", "i", "o", "u"]

let beginsWithVowel = otherArr.filter(item => {
    for (let i=0; i < vowels; i++) {
        if (item[0].toLowerCase == vowels[i]) {
            return item;
        }
    }
}
)

/*regular expressions 
    an object that describes a textual patern
*/

var password = "m1ightyJ0!";

var regex = /[a-zA-Z0-9\W^\S]/g;

console.log(password.match(regex));

let regex = RegExp(password);
regex.test(re3)