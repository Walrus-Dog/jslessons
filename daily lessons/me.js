/* Build a bio object and then write a bio of yourself but in js.

    <div id="root"></div>

    in js do create elements, name is h1 for example
*/

let person = {
    myName: {
        nickName: "WalrusDog",
        firstName: "Patrick",
        lastName: "Tierce"
    },
    age: 25,
    occupation: "coder",
    hobbies: [
        "games", "making games", "cars", "languages", "history", "music"
    ],
    car: "WRX",
    dateOfBirth: "Feb 8 1996",
    trips: [
        "Ireland", "France", "England", "Scottland", "Wales", "Germany", "Hungary", "Bulgaria", "Austira", "Switzerland", "The Netherlands"
    ]
}

let root = document.getElementById("root");
let h1 = document.createElement("h1");
let text = document.createElement("p");

h1.innerText = person
root.appendChild(h1);