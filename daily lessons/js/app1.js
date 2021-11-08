// single line comment

/*
multi line
comments
*/

/* varibles 
    var

    var varName = data;

    SCENIC ROUTE!!! DETOUR!!

    Data
        Primitive Data
            Number/Integer/Float
                5, -10, 3.1414167
            String
                Character text
                    "Hello World"
                    "6"
                    'Words!'
            Boolean
                true
                false
            Undefined
            Null

    var varName;

    Naming Conventions
        begin with lowercase letters
        no spaces
            camelCase
            camelCaseText
            var_name
        no symbols
        can use numbers but not at the begining
    
    Assignment Operator
        =
        "gets"

        left side => container
        right side => evaluation
*/    

var myName;

myName = "wal";

var walAge = 25;

console.log(myName);

console.log(walAge);

console.log(typeof(walAge));

var five = 2 + 3;

console.log(five);

// Arithmetic Expressions

/*
    plus/addition +
    minus/subtraction - 
    times/multiply *
    divide /

    exponents/to the power of **
    remainder/modulis %
*/ 

console.log(9 % 4);

console.log(5 ** 2)

//build a tempurature converter

var fah = 75;

var cel = (fah - 32) * 5 / 9;

var message = "The temp in cel is,"

console.log(message, cel)

// type coercion, changing the data type

// tip calculator

var tip;
var tax;
var subtotal;
var total;

subtotal = 20;
tax = subtotal * 0.07;
subtotal = subtotal + tax
tip = subtotal * .20;
total = subtotal + tip

console.log(total);

var hoursLeftBeforeVacation = 80;

var hoursWorked = 20;

hoursLeftBeforeVacation = hoursLeftBeforeVacation - hoursWorked;

hoursLeftBeforeVacation -= hoursWorked;

var foo = 6;
foo *= 2;
foo /= 3;

//increment/decrement

var count = 0;

count = count + 1;
count += 1;

count++; //goes up by one

count--; //goes down by one

var hello = "Hello";
var world = " World";

message = hello + world;
console.log(message);

var a = 1;
var b = "1";
var boo = a + a;
var baz = b + b;
var coo = a + b;

console.log(coo);

var six = '6';

console.log(six * 2);

console.log(hello.length, world.length)

//write a program that will calcualte a baseball players slugging percentage

/*
SET homeRun
SET tripple
SET double
SET single
SET atBat = homeRun + tripple + double + single
SET battingAverage = (single + double * 2 + triple * 3 + homeRun * 4) / atBat
OUTPUT battingAverage
*/
var homeRun = 521;
var triple = 46;
var double = 353;
var single = 1291;
var atBat = 8197;
var sluggingPercent = (single + double * 2 + triple * 3 + homeRun * 4) / atBat;

console.log(sluggingPercent);

