/*
var newList = [];

var groceryItems = [
    'bread',
    'milk',
    'cheese',
    'strawberries',
    'cantaloupe',
    'lettuce',
    'tomatoes',
    'carrots',
    'pasta',
    'cookies',
    'turkey meat',
    'salmon',
    'lemon'
];

var whatIHave = [
    'strawberries',
    'broccoli',
    'soup',
    'tomatoes',
    'pasta'
];

var newlist
var grocitems
var whatihave

arr1.concat(arr2.filter(value => !arr1.includes(value))); concat + filter to filter out same items and make them into a new array
const unique = Array.from(new Set(numbers)); set mothond to put two arrays together
*/

var newList = []

var groceryItems = [
    'bread',
    'milk',
    'cheese',
    'strawberries',
    'cantaloupe',
    'lettuce',
    'tomatoes',
    'carrots',
    'pasta',
    'cookies',
    'turkey meat',
    'salmon',
    'lemon'
];

var whatIHave = [
    'strawberries',
    'broccoli',
    'soup',
    'tomatoes',
    'pasta'
];

var newList = groceryItems.filter(function(val) {
    return whatIHave.indexOf(val) < 0;
});

console.log(newList);

let = newList = [];

groceryItems.forEach(value => {
    if(!whatIHave.includes(value)) {
        newList.push(value);
    }
})

newList = newList.concat(whatIHave);

console.log(newList);
