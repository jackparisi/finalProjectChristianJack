import React from "react";
import { Card, Row, Col } from "react-materialize";

function Randomizer() {
  return (
    <div className="container">
      <Card>
        <div className="nameDiv">Name: </div>
        <div className="raceDiv">Race: </div>
        <div className="classDiv">Class: </div>
        <div className="backgroundDiv">Background: </div>
        <div className="idealsDiv">Ideals: </div>
        <div className="bondsDiv">Bonds: </div>
        <div className="flawsDiv">Flaws: </div>
      </Card>
      {/* <Rerandomize />
      <Save /> */}
    </div>
  );
}

export default Randomizer;
