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
  newClass: {
    type: String,
    // required: true,
  },
  background: {
    type: String,
    // required: true,
  },
  ideal: {
    type: String,
    // required: true,
  },
  flaw: {
    type: String,
    // required: true,
  },
  bond: {
    type: String,
    // required: true,
  },
});

module.exports = CharacterModel = mongoose.model("Character", CharacterSchema);
