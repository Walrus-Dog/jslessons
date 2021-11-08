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
    car: "2002 Subaru WRX wagon",
    dateOfBirth: "Feb 8 1996",
    trips: [
        "Ireland", "France", "England", "Scottland", "Wales", "Germany", "Hungary", "Bulgaria", "Austira", "Switzerland", "The Netherlands"
    ]
};

let root = document.getElementById("root");
let h1 = document.createElement("h1");
let text = document.createElement("p");
let text1 = document.createElement("p");
let text2 = document.createElement("p");
let list1 = document.createElement("ul");
let image = document.createElement("img")

h1.innerText = person.myName.nickName;

text.innerText = `Hello, my name is ${person.myName.firstName} ${person.myName.lastName}. I am ${person.age} years old and was born on ${person.dateOfBirth}.`;

text1.innerText = `I currently dirve a ${person.car}. Some of my hobbies include, ${person.hobbies[0]}, ${person.hobbies[1]}, ${person.hobbies[2]}, ${person.hobbies[3]}, ${person.hobbies[4]}, and ${person.hobbies[5]}.`

text2.innerText = `I ran out of things to put so here's a list of countires I've been to:`;

for (i = 0; i < person.trips.length; i++) {
    const list2 = document.createElement("li");

    list2.innerText = person.trips[i];
    list1.appendChild(list2);
}

image.src = "https://media.discordapp.net/attachments/736209542572015636/896422825668247562/image0-2-2.gif"

root.appendChild(h1);
root.appendChild(text);
root.appendChild(text1);
root.appendChild(text2);
root.appendChild(list1);
root.appendChild(image);