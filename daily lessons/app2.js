/*
    Arrays

    Arrays =>  list of multiple items

    var arrName = [];

    var arrName = [1. "Hello", true, undefined, null, 6]

    var southJackson = ["Markeisha", "Jack", "Eric", "Brendan", "Tyler"];

    Arrays are what is called 0 index

    push to add to end, pop to take from end
    shift to add to front, unshift to take from front
    
*/

var southJackson = ["Markeisha", "Jack", "Eric", "Brendan", "Tyler", "Paxton", "Colin", "Aundrea", "Lawrenciya", "Eric", "Rico", "Aaron", "Ethor"];

console.log(southJackson.length);

console.log(southJackson[5]);

var idx = 8;
southJackson[1]= "Horatio"

southJackson.push("Daniel");

console.log(southJackson)

southJackson.pop();

southJackson.push("Daniel");

var daniel = southJackson.pop();

console.log(southJackson)

var a = new Array("candy corn", "reeses", "peeps", "wethers");

console.log(a);