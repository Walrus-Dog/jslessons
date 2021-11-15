/*
Create a form
Form should contain grocery inputs

1 input for ammount of items
1 input for type of item
1 input for the grocery store aisle

Tally the total based on all of the prices

Capture those inputs in js like we did before
Display them on the page. Make it look nice.
Bouns point for non dupe items.

VARIABLES
    form
    output
    total
    iName
    iAmmount
    iAisle
    iPrice

EVENTLISTENER
    submit
        addGroceryItem

FUNCTION
    addGorceryItem
        grab al input values
        | Extra Validate Dupliate Append to existing item  or return item already exists|
        add to total
        apped to output
        return 

*/ 

let form = document.getElementById("form");
let output = document.getElementById("output");
//let main = document.getElementById("main");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let fName = form.elements["fName"].value;
    let lName = form.elements["lName"].value;
    let email = form.elements["email"].value;
    let uName = form.elements["uName"].value;
    let password = form.elements["password"].value;

    output.innerText += ``
    
});