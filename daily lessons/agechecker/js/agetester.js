// make age checker that works good
// the event listener is in the html

//start checking for the age as soon as we hit submit
function ageCheck() {
    //grab the elements we need
    const date = document.getElementById("dateInput");
    const checkBox = document.getElementById("checkBox");
    const accessTextCheck = document.getElementById("accessTextCheck");
    const accessTextPass = document.getElementById("accessTextPass");
    const accessTextFail = document.getElementById("accessTextFail");

    //set messages for arguments
    const accessTextCheckLine = "Please hit the checkbox";
    const accessTextPassLine = "Access granted";
    const accessTextFailLine = "Access denied";

    //clear the messages that get sent so it doesn't keep the old ones. since its read top to bottom it will automatically reset them and readdd them once input is added
    accessTextCheck.innerHTML = "";
    accessTextPass.innerHTML = "";
    accessTextFail.innerHTML = "";

    //event for clicking submit. box must be checked for this to run at all
    if (checkBox.checked) {
        //check and see if date input has anything in it, if not it displays fail message
        if (date.value != undefined && date.value != null && date.value != "") {
            //set dates we need to grab
            let userDate = new Date(date.value);
            let todayDate = new Date();
            
            //take current date and subtract 21 from year
            todayDate.setFullYear(todayDate.getFullYear() - 21);

            //check to see if date user entered is older than date on computer
            if (todayDate >= userDate) {
                accessTextPass.innerHTML = accessTextPassLine;
            } else {
                //if date is under 21 it will know and auto display fail
                accessTextFail.innerHTML = accessTextFailLine;
            }
        } else {
            //if there is no input on the date then it will display the fail message
            accessTextFail.innerHTML = accessTextFailLine;
        }
    } else {
        //if the box isn't checked it will display check box message
        accessTextCheck.innerHTML = accessTextCheckLine
    }
}