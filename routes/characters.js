const express = require("express");
const router = express.Router();
const Character = require("../models/Character");
const User = require("../models/User");

router.post("/", (req, res) => {
  Character.create(req.body)
    .then(({ _id }) =>
      User.findOneAndUpdate(
        { _id: req.user._id },
        { $push: { characters: _id } },
        { new: true }
      )
    )
    .then((character) => res.json(character))
    .catch((err) => res.status(422).json(err));
});
router.get("/", (req, res) => {
  User.findById(req.user._id)
    .populate("characters")
    .then((user) => res.json(user.characters))
    .catch((err) => res.status(422).json(err));
});
router.delete("/:id", (req, res) => {
  Character.findById({ _id: req.params.id })
    .then((dbModel) => dbModel.remove())
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
});
module.exports = router;
