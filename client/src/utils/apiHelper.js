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
};

export default userController;
