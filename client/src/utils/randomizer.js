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
];

const ideals = [
  "I trust that my deity will guide my actions. I have faith that if I work hard, things will go well.",
  "I am a free spirit--no one tells me what to do",
  "I never run the same con twice",
  "Chains are meant to be broken, as are those who would forge them.",
  "I'm loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care",
];

const bonds = [
  "I want to be famous, whatever it takes",
  "I would do anything to impress random people ",
  "I pursue wealth to secure my cats love.",
  "I escaped my life of poverty by robbing an important person, and I'm wanted for it. ",
  "I idolize a hero of the old tales and measure my deeds against that person's. ",
];
const flaws = [
  "Is cripplingly addicted to cheese",
  "Is irrationally paranoid when everyone agrees with them, immediately backtracking to disagree with themselves",
  "Is afraid of heights",
  "Is color blind",
  "Is a fervent disbeliever in magic",
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
