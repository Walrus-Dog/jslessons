let cars = {
    "001": {
        manf: "Nissan",
        model: "Skyline R33 GTR",
        type: ["4-door sedan", "2-door coupe"],
        layout: ["FE-RWD", "FE-AWD"],
        engine: "2.6 L RB26DETT",
        transmission: ["5-speed automatic", "5-speed manual"],
        unitssold: "217,133",
        year: ["1993", "1998"]
    },
    "002": {
        manf: "Toyota",
        model: "Corolla Levin GT-APEX",
        type: "Sport compact",
        layout: "FE-RWD",
        engine: "4AGE",
        transmission: ["T-50 5-speed manual", "A42DL 4-speed automatic"],
        unitssold: "N/A",
        year: ["1984", "1987"]
    },
    "003": {
        manf: "Subaru",
        model: "Impreza WRX 22B STI",
        type: "Sport compact",
        layout: "FE-AWD",
        engine: "EJ22G",
        transmission: "",
        unitssold: "333",
        year: "1998"
    },
    "004": {
        manf: "Volvo",
        model: "V70R",
        type: "Wagon",
        layout: "FE-AWD",
        engine: "B5234T4",
        transmission: "5-speed manual",
        unitssold: "N/A",
        year: ["1996", "2000"]
    },
    
}

/*
"": {
        manf: "",
        model: "",
        type: "",
        layout: "",
        engine: "",
        transmission: "",
        unitssold: "",
        year: ""
    }
*/

var carCard = document.querySelectorAll('.car-card');

carCard.forEach(item =>{
    for (key in cars) {
        item.children[0].innerText = cars[key].manf
        item.children[1].innerText = cars[key].model
        item.children[2].innerText = cars[key].type
        item.children[3].innerText = cars[key].layout
        item.children[4].innerText = cars[key].engine
        item.children[5].innerText = cars[key].transmission
        item.children[6].innerText = cars[key].unitssold
        item.children[7].innerText = cars[key].year
        delete cars[key];
        break;
    }
})
