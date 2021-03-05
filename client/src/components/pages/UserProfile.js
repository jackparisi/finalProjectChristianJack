import React, { useState, useEffect } from "react";
import {
  Card,
  Row,
  Col,
  Collapsible,
  CollapsibleItem,
  Icon,
} from "react-materialize";
import API from "../../utils/apiHelper";
import DeleteBtn from "../partials/DeleteBtn";
import "./style.css";
// import { List, ListItem } from "../../../../utils/List/List";
// import M from "materialize-css/dist/js/materialize.min.js";

function UserProfile() {
  const [characters, setCharacters] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    loadCharacters();
    loadUser();
  }, []);

  function loadCharacters() {
    API.getCharacters()
      .then((res) => setCharacters(res.data))
      .catch((err) => console.log(err));
  }

  function loadUser() {
    API.getUser()
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }

  function deleteCharacter(id) {
    API.deleteBook(id)
      .then((res) => loadCharacters(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <div className="container">
      <Card className="glass white-text divHead center-align">
        <h3>
          <b>{user.name}'s Profile</b>
        </h3>
      </Card>
      <Card className="glass white-text">
        <h5>
          <b>Characters</b>
        </h5>
        <Collapsible accordion>
          {characters.map((character) => (
            <CollapsibleItem
              key={character.id}
              expanded={false}
              header={`${character.name}
                ${(
                  <DeleteBtn onClick={() => deleteCharacter(character._id)} />
                )}`}
              icon={<Icon>person</Icon>}
              node="div"
              className=" blue-grey lighten-4 black-text"
            >
              <p>
                <b>Race: </b>
                {character.race}
              </p>
              <p>
                <b>Class: </b>
                {character.newClass}
              </p>
              <p>
                <b>Background: </b>
                {character.background}
              </p>
              <p>
                <b>Ideal: </b>
                {character.ideal}
              </p>
              <p>
                <b>Bond: </b>
                {character.bond}
              </p>
              <p>
                <b>Flaw: </b>
                {character.flaw}
              </p>
            </CollapsibleItem>
          ))}
        </Collapsible>
      </Card>
    </div>
  );
}

export default UserProfile;
