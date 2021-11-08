// Make a temperature converter using functions

/*
    Vars

    SET cel
    SET fah
    SET temp1
    SET temp2
*/
// fah = fah - 32 * 5 / 9 cel = cel +32 * 9 / 5

function cToF(temp, unit) {
    if (unit == "fah") {
            newTemp = (temp - 32) * 5 / 9;
            degree = "cel";
        } else if (unit == "cel") {
            newTemp = (temp * 9 / 5) + 32;
            degree = "fah"
        } else if (unit == "kel1") {
            newTemp = (temp - 273)
            degree = "cel"
        } else if (unit == "kel2") {
            newTemp = ((temp + 459.67) * 5 / 9)
            degree = "fah"
        } else {
            console.log("That's not a temp")
        }
    console.log(`It's ${newTemp} ${degree}`)
    return;
};

cToF(56, "kel2")

//Write a function to return true or false if a number is odd or even

function oddEven (num) {
    return (num % 2) == 0;
};

console.log(oddEven(5))