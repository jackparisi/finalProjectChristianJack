import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "react-materialize";
import API from "../../utils/apiHelper";
import { List, ListItem } from "../../utils/List/List";

function UserProfile() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    loadCharacters();
  }, []);

  function loadCharacters() {
    API.getCharacters()
      .then((res) => setCharacters(res.data))
      .catch((err) => console.log(err));
  }
  return (
    <div className="container">
      <Card>User Profile</Card>
      <Card>
        <b>Characters</b>
        <List>
          {characters.map((character) => (
            <ListItem key={character.id}>
              <p>
                <b>{character.name}</b>
              </p>
            </ListItem>
          ))}
        </List>
      </Card>
    </div>
  );
}

export default UserProfile;
