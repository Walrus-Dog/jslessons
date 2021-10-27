/*
    Descision Structures; Boolean
    
    Boolean => true  / false

    var truth = true

    Boolean operators

    is equal to ==
    is strickly equal to ===
    is strickly no equal to !==
    is less than <
    is greater than >
    is less than r equal to <=
    is greater than or equal to >=
    is not equal to !=

    Logical operators

    and && ==> both need to evaluate to true
    or || ==> only one needs to evaluate to true
    not ! ==> inverse

    Conditions

    if

    if (condition) {
        do stuff
    }

    if/else

    if(condition) {
        do stuff
    }

    else {
        do something eslse
    }

    if/else if

    if (condition) {
        do stuff
    } else if (another conditon) {
        do something else
    } else {
        do something compleatly different
    }

    switch

    switch (expression)
        statements
            case a:
                do stuff
            break
            case b:
                do stuff
            default:
                do stuff
                break

*/

var truth = true;

console.log(truth);

console.log(6 == 6);

console.log(6 == 3 * 3);

console.log(6 === 6);

console.log(6 === "6");

console.log(6 == "6");

console.log(9 < 10);
console.log(9 > 10);
console.log(5 <= 5);
console.log(9 >= 8);
console.log(4 != 8);
console.log(4 != "4");
console.log(4 !== "4");

var t = true;
var f = false;

console.log("True and false", t && f);
console.log("True and false", t || f);
console.log("Not true", !t);
console.log("Not false", !f);

console.log("True or false and False or True", (t || f) && (f || t));

console.log("True and False or False and False", (t && f) || (f && f));


// if (today == "Friday") {
//     console.log("Yeah! It's Friday!");
// }

// if (today == "Monday") {
//     console.log("I guess otday is Monday");
// }

// if (today === "Friday") {
//     console.log("Yay Friday!")
// } else {
//     console.log("When is Friday?")
// }

// if (today == "Friday") {
//     console.log("Happy hour here I come")
// } else if (today == "Saturday" || today == "Sunday") {
//     console.log("It's the weekend")
// } else {
//     console.log("When's the weekend gonna be here?")
// }

// var today = new Date().getDay();

// if (today == 0) {
//     console.log("It's Monday, back to work")
// } else if (today == 1) {
//     console.log("It's Tuseday, boy howdy it sure is")
// } else if (today == 2) {
//     console.log("It's Wednesday, half way there")
// } else if (today == 3) {
//     console.log("It's Thursday, one day left for Friday")
// } else if (today == 4) {
//     console.log("It's Firday, about time")
// } else if (today == 5) {
//     console.log("It's Saturday, whoopie")
// } else if (today == 6) {
//     console.log("It's Sunday, a great day")
// } else {
//     console.log("The heck, how'd you end up not on a day?")
// }
// var dayMessage;

// switch (today) {
//     case 0:
//         dayMessage = "Sunday"
//     break;
//     case 1:
//         dayMessage = "Monday"
//     break;
//     case 2:
//         dayMessage = "Tuseday"
//     break;
//     case 3:
//         dayMessage = "Wednesday"
//     break;
//     case 4:
//         dayMessage = "Thursday"
//     break;
//     case 5:
//         dayMessage = "Friday"
//     break;
//     case 6:
//         dayMessage = "Saturday"
//     break;
//     default;
//         dayMessage = "What the heck"
// }

// Write a program that will test if a number is even or odd

/*
    Variables

    num
    message

    PROCEDURE

    SET num
    SET message
    IF num % 2 == 0 THEN message = "{num} is even"
    ELSE message = "{num} is odd"
*/

// var num;
// var message;

// if (num % 2 == 0) {
//     console.log(num, " is even")
// } else {
//     console.log(num, " is odd")
// }

// var j = 1;
// var j = i;
// var k = 2;

// if (i === j) {
//     if (j === k ) {
//         console.log("i equals k")
//     }
// } else {
//     console.log("i doesnt equal j")
// }

// write a program that will convert the temperature, if the unit is in f cnvert it to c, if the unit is in c convert it to f

/*
SET cel
SET fah
SET cel = (fah - 32) * 5 / 9
SET fah = (cel + 32) * 9 / 5

if 
*/

// var unit, temp, newTemp, degree, newUnit;

// unit = "fah"
// temp = 54;

// if (unit == "fah") {
//     newTemp = (temp - 32) * 5 / 9;
//     degree = "cel";
// } else if (unit == "cel") {
//     newTemp = (temp * 9 / 5) + 32;
//     degree = "fah"
// } else {
//     console.log("what");
// }

// console.log("The new temp is " + newTemp + " degrees " + degree)

//adjective array hero array super power array