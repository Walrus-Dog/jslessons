/* 
    Build another randomizer

    Pseudocode

    Vars

    races
    jobs (maybe add low level jobs with message "put your stone on" for higher level)
    levels
    dungeons (maybe add text for low level saying, "how'd you get here" for lower levels) (never mind herb said no)

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

var levels = Math.floor(Math.random() * (80 - 15 + 1) + 15);

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

console.log(dungeons.length)

raceIdx = Math.floor(Math.random() * races.length);
jobIdx = Math.floor(Math.random() * jobs.length);
dungeonIdx = Math.floor(Math.random() * dungeons.length);

var race, job, level, dungeon;

race = races[raceIdx]
job = jobs[jobIdx]
dungeon = dungeons[dungeonIdx]

var message = `You are playing a ${race} ${job} at level ${level}, in ${dungeon}`

console.log(message)

