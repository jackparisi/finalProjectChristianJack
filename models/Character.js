const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  race: {
    type: String,
    // required: true,
  },
  background: {
    type: String,
    // required: true,
  },
  ideals: {
    type: String,
    // required: true,
  },
  flaws: {
    type: String,
    // required: true,
  },
  bonds: {
    type: String,
    // required: true,
  },
});

module.exports = CharacterModel = mongoose.model("Character", CharacterSchema);
