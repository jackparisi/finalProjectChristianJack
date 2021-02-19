const firstName = ["Orlok", "Legolas", "Mikhail Jyurdon", "Frodo", "Magikarp"];
const secondName = ["Rodriguez", "Chad", "Skywalker", "Saruman", "Jupiter"];
const race = [
    "Dragonborn",
    "Dwarf",
    "Elf",
    "Gnome",
    "Half-Elf",
    "Halfling",
    "Half-Orc",
    "Human",
    "Tiefling",
];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function randomName() {
    var name =
        firstName[getRandomInt(0, firstName.length)] +
        " " +
        secondName[getRandomInt(0, secondName.length)];
    console.log(name);
}

function randomRace() {
    var newRace = race[getRandomInt(0, race.length)];
    console.log(newRace);
}

randomName();
randomRace();
