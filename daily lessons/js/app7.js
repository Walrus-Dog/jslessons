let h2 = document.getElementsByTagName("h2")

console.log(h2[0].innerText)

h2[0].innerText = "ebbydeeby";

let green = document.getElementsByClassName("green");

console.log(green);

green[0].style.color = "green";

green[1].style.color = "green";

let sans = document.querySelector('.sans');

sans.style.fontFamily = 'sans-serif';

//sans.forEach(element => {
//    element.style.fontFamily = "sans-serif";
//});

let myName = document.getElementById("myName");

myName.innerText = "pat";

let root = document.getElementById("root");
let h3 = document.createElement("h3");
let text = document.createElement("p");

h3.innerText = "Sub Header";
root.appendChild(h3);

root.innerHTML += `<p>This is some text</p>`;

/* Build a bio object and then write a bio of yourself but in js.

    <div id="root"></div>

    in js do create elements, name is h1 for example
*/