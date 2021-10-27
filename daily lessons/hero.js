/*
    Hero Generator

    Build a program that will randomize an adjective, hero and super power

    Pseudocode

    Vars

    adjs
    heros
    powers

    adj
    hero
    power
    message
    idx
        adjIdx
        heroIdx
        powerIdx

    Procedure

    SET ajds, heros, powers

    SET adj FROM adjs
    SET hero FROM heros
    SET power FROM powers
    SET message "The {adj} {hero} can {power}"

    DISPLAY message
    OUTPUT message

*/

var adjs = [
    "Powerful",
    "Amazing",
    "Crazy",
    "Dastardly",
    "Super"
    ];

var heros = [
    "Dog", 
    "Girl", 
    "Man", 
    "Rat", 
    "Hippo",
    "Jubilee"
    ];

var powers = [
        "leap 40 McDonalds in a single bound",
        "eat two Popeye's biscuit no drink",
        "not solve a rubiks cube in 5 hours",
        "crash their computer with a loop for fun",
        "watch the Lord of the Rings director's cut in 2 hours"
    ];

//Math.floor(Math.random())
adjIdx = Math.floor(Math.random() * adjs.length);
heroIdx = Math.floor(Math.random() * heros.length);
powerIdx = Math.floor(Math.random() * powers.length);

var adj, hero, power;

adj = adjs[adjIdx];
hero = heros[heroIdx];
power = powers[powerIdx];

// var message = "The " + adj + " " + hero + " can " + power;
//${adjs[Math.floor(Math.random() * adjs.length)]} can do this 
// String template literal

var message = `The ${adj} ${hero} can ${power}.`
console.log(message);

/* 
    Build another randomizer

    Pseudocode

    Vars

    races
    jobs (maybe add low level jobs with message "put your stone on" for higher level)
    levels
    dungeons (maybe add text for low level saying, "how'd you get here" for lower levels)

    race
    jobs
    levels
    dungeon
    message
    difMessage (maybe)
    idx
        raceIdx
        jobIdx
        levelIdx
        dungeonIdx

    Procedure

    SET races, jobs, levels, dungeons

    math.floor each = to job, race, level, dungeon

    SET message "You are playing a {race} {job} that is {level}, in the {dungeon}. {difMessage}"

    DISPLAY message
    OUTPUT message
*/

var races = [
    "Hyur",
    "Miqo'te",
    "Elzen",
    "Roegadyn",
    "Lalafell",
    "Au Ra",
    "Hrothgar",
    "Viera"
];

var jobs = [
    "Paladin",
    "Warrior",
    "Dark Knight",
    "Gunbreaker",
    "White Mage",
    "Scholar",
    "Astrologian",
    "Sage",
    "Monk",
    "Dragoon",
    "Ninja",
    "Samurai",
    "Reaper",
    "Bard",
    "Machinist",
    "Dancer",
    "Black Mage",
    "Summoner",
    "Red Mage"
];

var levels = [15,16, 17, 20, 24, 28, 32, 35, 38, 41, 44, 47, 50, 51, 53, 55, 57, 59, 60, 61, 63, 65, 67, 69, 70, 71, 73, 75, 77, 79, 80]

var dungeons = [
    "Sastasha",
    "The Tam-Tara Deepcroft",
    "Copperbell Mines",
    "Halatali",
    "The Thousand Maws of Toto-Rak",
    "Haukke Manor",
    "Brayflox's Longstop",
    "The Sunken Temple of Quarn",
    "Cutter's Cry",
    "The Stone Vigil",
    "Dzemael Darkhold",
    "The Aurum Vale", 
    "Castrum Meridanum",
    "The Praetorium",
    "The Wanderer's Palace",
    "Amdapor Keep",
    "Pharos Sirius",
    "The Lost City of Amdapor",
    "Hullbreaker Isle",
    "Snowcloak",
    "The Kepper of the Lake",
    "The Dusk Vigil",
    "Sohm Al",
    "The Aery",
    "The Vault",
    "The Great Gubal Library",
    "The Aetherochemical Research Facility",
    "Neverreap",
    "The Fractal Continuum",
    "Saint Mocianne's Arboretum",
    "The Antitower",
    "Sohr Khai",
    "Xelphatol",
    "Baelsar's Wall",
    "The Sirensong Sea",
    "Shisui of the Violet TIdes",
    "Bardam's Mettle",
    "Doma Castle",
    "Castrum Abamia", 
    "Ala Mhigo",
    "Kugane Castle",
    "The Temple of the Fist",
    "The Drowned Coty of Skalla",
    "Hell's Lid",
    "The Swallow's Compass",
    "The Burn",
    "The Ghimlyt Dark",
    "Holminster Switch",
    "Dohn Mheg",
    "The Qitana Ravel",
    "Malikah's Well",
    "Mt. Gulg",
    "Amaurot",
    "The Twinning",
    "Akademia Anyder",
    "The Grand Cosmos",
    "Anamensis Anyder",
    "The Heroes' Gauntlet",
    "Matoya's Relcit",
    "Paglth'an"
];

raceIdx = Math.floor(Math.random() * races.length);
jobIdx = Math.floor(Math.random() * jobs.length);
levelIdx = Math.floor(Math.random() * levels.length);
dungeonIdx = Math.floor(Math.random() * dungeons.length);

var race, job, level, dungeon;

race = races[raceIdx]
job = jobs[jobIdx]
level = levels[levelIdx]
dungeon = dungeons[dungeonIdx]

var message = `You are playing a ${race} ${job} at level ${level}, in ${dungeon}`

console.log(message)