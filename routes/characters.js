const express = require("express");
const router = express.Router();
const Character = require("../models/Character");

router.post("/", (req, res) => {
  Character.create(req.body)
    .then((character) => res.json(character))
    .catch((err) => res.status(422).json(err));
});

module.exports = router;
