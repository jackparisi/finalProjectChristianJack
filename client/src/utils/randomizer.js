const firstName = [
    "Orlok",
    "Legolas",
    "Mikhail Jyurdon",
    "Frodo",
    "Magikarp",
    "Reuben",
    "Jethro Tull",
    "Rick Astley",
    "Slash",
    "Goofy",
    "Turok",
    "Eric",
    "Hans Moleman",
    "Kal-El",
    "Cortana",
    "Karen",
    "LaVerne",
    "Courtney Love",
    "Jenny",
    "Elvira",
    "She Hulk",
    "Rosalita",
    "Orlando",
    "Eartha",
    "Bertha",
    "Arya",
    "Zelda",
    "Clarice",
    "Cher",
    "Condaleeza",
    "Oreo",
    "ChiChi",
    "Lamar",
];

const secondName = [
    "Rodriguez",
    "Chad",
    "Skywalker",
    "Saruman",
    "Jupiter",
    "Seinfeld",
    "Hermanhouser",
    "Daytona",
    "FancySon",
    "Exodius",
    "Papadapoulos",
    "Corky",
];

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

const classes = [
    "Barbarian",
    "Bard",
    "Cleric",
    "Druid",
    "Fighter",
    "Monk",
    "Paladin",
    "Ranger",
    "Rogue",
    "Sorcerer",
    "Warlock",
    "Wizard",
];

const backgrounds = [
    "Acolyte: Insight and Religion",
    "Athlete: Athletics and Acrobatics",
    "Charlatan: Deception and Slight of Hand",
    "Courtier: Insight and Persuasion",
    "Criminal: Deception and Stealth",
    "Folk Hero: Animal Handling and Survival",
    "Hermit: Medicine and Religion",
    "Noble: History and Persuasion",
    "Outlander: Athletics and Survival",
    "Pirate: Athletics and Perception",
    "Sage: Arcana and History",
    "Soldier: Athletics and Intimidation",
    "Urchin: Sleight of Hand and Stealth",
];

const ideals = [
    "I trust that my deity will guide my actions. I have faith that if I work hard, things will go well.",
    "I am a free spirit--no one tells me what to do",
    "I never run the same con twice",
    "Chains are meant to be broken, as are those who would forge them.",
    "I'm loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care",
    "Honor. I don't steal from others in the trade",
    "Redemption. There's a spark of good in everyone",
    "Destiny. Nothing and no one can steer me away from my higher callingDestiny. Nothing and no one can steer me away from my higher calling",
    "Might. If I become strong, I can take what I want--what I deserve",
    "Honor. If I dishonor myself, I dishonor my whole clan",
    "Fairness. We all do the work, so we all share in the rewards",
    "Someday I'll own my own ship and chart my own destiny",
];

const bonds = [
    "I want to be famous, whatever it takes",
    "I would do anything to impress random people ",
    "I pursue wealth to secure my cats love.",
    "I escaped my life of poverty by robbing an important person, and I'm wanted for it. ",
    "I idolize a hero of the old tales and measure my deeds against that person's.",
    "A powerful person killed someone I love. Some day soon, I'll have my revenge",
    "I am in love with the heir of a family that my family despises",
    "I'm guilty of a terrible crime. I hope I can redeem myself for it",
    "A proud noble once gave me a horrible beating, and I will take my revenge on any bully I encounter",
    "My tools are symbols of my past life, and I carry them so that I will never forget my roots",
    "I wish my childhood sweetheart had come with me to pursue my destiny",
    "My loyalty to my sovereign is unwavering",
    "I will bring terrible wrath down on the evildoers who destroyed my homeland",
    "I work to preserve a library, university, scriptorium, or monastery",
    "I have an ancient text that holds terrible secrets that must not fall into the wrong hands",
    "I'll always remember my first ship",
    "In a harbor town, I have a paramour whose eyes nearly stole me from the sea",
    "My town or city is my home, and I'll fight to defend it",
    "I owe my survival to another urchin who taught me to live on the streetsI owe my survival to another urchin who taught me to live on the streets",
];
const flaws = [
    "Is cripplingly addicted to cheese",
    "Is irrationally paranoid when everyone agrees with them, immediately backtracking to disagree with themselves",
    "Is afraid of heights",
    "Is color blind",
    "Is a fervent disbeliever in magic",
    "I can't resist a pretty face",
    "I'm always in debt. I spend my ill-gotten gains on decadent luxuries faster than I bring them in",
    "A scandal prevents me from ever going home again",
    "I turn tail and run when things go bad",
    "An innocent person is in prison for a crime that I committed. I'm okay with that",
    "I secretly believe that everyone is beneath me",
    "By my words and actions, I often bring shame to my family",
    "I am too enamored of ale, wine, and other intoxicants",
    "Unlocking an ancient mystery is worth the price of a civilization",
];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export function randomName() {
    var name =
        firstName[getRandomInt(0, firstName.length)] +
        " " +
        secondName[getRandomInt(0, secondName.length)];
    console.log(name);

    return name;
}

export function randomRace() {
    var newRace = race[getRandomInt(0, race.length)];
    console.log(newRace);
    return newRace;
}

export function randomClass() {
    var newClass = classes[getRandomInt(0, classes.length)];
    console.log(newClass);
    return newClass;
}

export function randomBackground() {
    var newBackground = backgrounds[getRandomInt(0, backgrounds.length)];
    console.log(newBackground);
    return newBackground;
}

export function randomIdeal() {
    var ideal = ideals[getRandomInt(0, ideals.length)];
    console.log(ideal);
    return ideal;
}

export function randomBond() {
    var bond = bonds[getRandomInt(0, bonds.length)];
    console.log(bond);
    return bond;
}

export function randomFlaw() {
    var flaw = flaws[getRandomInt(0, flaws.length)];
    console.log(flaw);
    return flaw;
}

// randomName();
// randomRace();
// randomClass();
// randomBackground();
// randomIdeal();
// randomBond();
// randomFlaw();
