/*
    build an age tester to allow anyone over 21 access, but anyone under no access. in addition have a check box that must be checked to gai access

    have date entry
    have confirmation check box
    have submit button
    if box not checked then display check the box
    have display of access denied if under 21
    have dislay of access granted if over 21

    use a if loop to check year and Date.prototype.getYear() to access current year, if year selected eosnt = to 21 then display accessTestFail

    Get Today's Date using new Date()
    Get Date of Birth using new Date(datestring)
    Get Year from both Dates using getFullYear()
    Now find the Difference between two Years.
*/ 

let date = document.getElementById("dateInput");
let checkBox = document.getElementById("checkBox");

let accessTextCheck = "Please hit the check box";
let accessTextPass = "Access Granted";
let accessTextFail = "Access Denied";

