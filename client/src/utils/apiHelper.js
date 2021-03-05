import axios from "axios";

const userController = {
  getUser: function () {
    return axios.get(`/api/users/me`);
  },
  saveCharacter: function (characterData) {
    return axios.post(`/api/characters`, characterData);
  },
  getCharacters: function () {
    return axios.get("/api/characters");
  },
  getSpells: function () {
    return axios.get("https://www.dnd5eapi.co/api/spells");
  },
  getSpell: function (index) {
    return axios.get(`https://www.dnd5eapi.co/api/spells/${index}`);
  },
  getMonsters: function () {
    return axios.get("https://www.dnd5eapi.co/api/monsters");
  },
  getMonster: function (index) {
    return axios.get(`https://www.dnd5eapi.co/api/monsters/${index}`);
  },
  deleteCharacter: function (id) {
    return axios.delete("/api/characters/" + id);
  },
};

export default userController;
