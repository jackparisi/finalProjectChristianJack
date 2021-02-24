const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  characters: [
    {
      type: Schema.Types.ObjectId,
      ref: "Character",
    },
  ],
});

module.exports = User = mongoose.model("User", UserSchema);
