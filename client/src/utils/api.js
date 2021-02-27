const axios = require("axios");
const router = require("express").Router();

router.get("/spellSearch", async (req, res) => {
    const spellConfig = {
        baseURL: "https://www.dnd5eapi.co/api/spells",
        method: "GET",
        params,
    };
});
