import React, { useState } from "react";
import { Card, Row, Col } from "react-materialize";
import RerollBtn from "../partials/RerollBtn";
import SaveChar from "../partials/SaveChar";
import API from "../../utils/apiHelper";
import {
  randomName,
  randomRace,
  randomClass,
  randomBackground,
  randomIdeal,
  randomBond,
  randomFlaw,
} from "../../utils/randomizer";
import M from "materialize-css/dist/js/materialize.min.js";

function Randomizer() {
  const [name, setName] = useState("");
  const [race, setRace] = useState("");
  const [newClass, setClass] = useState("");
  const [background, setBackground] = useState("");
  const [ideal, setIdeal] = useState("");
  const [bond, setBond] = useState("");
  const [flaw, setFlaw] = useState("");

  const newCharacter = (e) => {
    e.preventDefault();
    console.log("newCharcter");
    setName(randomName());
    setRace(randomRace());
    setClass(randomClass());
    setBackground(randomBackground());
    setIdeal(randomIdeal());
    setBond(randomBond());
    setFlaw(randomFlaw());
  };

  const saveCharacter = (e) => {
    e.preventDefault();
    console.log("saveCharcter");
    API.saveCharacter({
      name: name,
      race: race,
      newClass: newClass,
      background: background,
      ideal: ideal,
      bond: bond,
      flaw: flaw,
    }).then(M.toast({ html: "Character Saved!" }));
  };

  return (
    <div className="container">
      <Card className="glass divHead ">
        <div className="white-text" id="nameDiv">
          <b>Name:</b> {name}{" "}
        </div>
        <div className="white-text" id="raceDiv">
          <b>Race:</b> {race}
        </div>
        <div className="white-text" id="classDiv">
          <b>Class:</b> {newClass}
        </div>
        <div className="white-text" id="backgroundDiv">
          <b>Background:</b> {background}
        </div>
        <div className="white-text" id="idealsDiv">
          <b>Ideals:</b> {ideal}
        </div>
        <div className="white-text" id="bondsDiv">
          <b>Bonds:</b> {bond}
        </div>
        <div className="white-text" id="flawsDiv">
          <b>Flaws:</b> {flaw}
        </div>
      </Card>
      <RerollBtn handleReroll={newCharacter} handleSave={saveCharacter} />
      {/* <SaveChar /> */}
    </div>
  );
}

export default Randomizer;
