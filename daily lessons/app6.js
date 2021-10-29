/*
    Objects

    Everything is an object

    let obj = {
        key: value,
        property: value
    }

    values can be accessed two ways
        dot notation
        bracket notation

    class Classname {
        constructor {
            this.property1 = value1,
            this.property2 = value2, 
            this.property3 = vlue3
        }

        method() {
            do stuff
        }
    }
*/

let person = {
    id: 1,
    myName: {
        "nickname": "waldog", 
        fName: "Pat",
        mName: "Tierce"
    },
    age: 25,
    occupation: "sleepy",
    hobbies: ["modles", "games", "languages", "writing", "drawing", "cars"],
    cars: "WRX", 
    "older cars": {
        oldest: "element",
        youngest: "saab"
    },
    isCool: true,
    isLame: null,

    greeting: function() {
        console.log(`Hello ${this.fName.mName}`);
    }
};

console.log(person)
console.log(person.hobbies[3])
console.log(person.myName.fName)
console.log(person["older cars"].oldest)

person.age = 26;

console.log(person.age);

person.vehicle = "skyline";

console.log(person)

person.greeting();

//Object.freeze(person); // freezes and object, cannot mutate date not add properties

//Object.seal(person); // seals object, cannot add properties, however can mutate

//delete person.vehicle

class Animal {
    constructor() {
        this.name,
        this.color,
        this.legs,
        this.eyes,
        this.sound
    }

    makeSound() {
        console.log(this.sound)
    }
}

// using class build a movie object and album object. have at least 10 properties and 3 methods

class Movie {
    constructor() {
        this.title,
        this.runtime,
        this.year,
        this.raiting,
        this.earnings,
        this.budget,
        this.director,
        this.star,
        this.compser,
        this.writer
    }

    showPeople() {
        console.log(`The film ${this.title} was directed by ${this.director}, written by ${this.writer}, ${this.star} played the main role and the score was composed by ${this.compser}`)
    }

    showStats() {
        console.log(`The film ${this.title} had a budget of ${this.budget}, earned ${this.earnings}, came out in the year ${this.year}, has a run time of ${this.runtime} and recived a ${this.raiting}`)
    }
};

let NapoleonDynamite = new Movie;

NapoleonDynamite.title = "Napoleon Dynamite";
NapoleonDynamite.budget = "$400,000";
NapoleonDynamite.runtime = "95 minutes";
NapoleonDynamite.year = "2004";
NapoleonDynamite.raiting = "88%";
NapoleonDynamite.earnings = "$46.1 million";
NapoleonDynamite.director = "Jared Hess";
NapoleonDynamite.star = "Jon Heder";
NapoleonDynamite.compser = "John Swihart";
NapoleonDynamite.writer = "Jared Hess";

class Album {
    constructor() {
        this.title,
        this.runtime,
        this.tracklist,
        this.singles,
        this.compser,
        this.label
    }
}