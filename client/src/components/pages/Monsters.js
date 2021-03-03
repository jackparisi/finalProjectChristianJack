import React, { useState, useEffect, Component } from "react";
import { Card, Row, Col } from "react-materialize";
import API from "../../utils/apiHelper";
import { List, ListItem } from "../../utils/List/List";

function MonsterSearch() {
  const [monsters, setMonsters] = useState([]);
  const [monsterInfo, setMonsterInfo] = useState(false);
  useEffect(() => {
    API.getMonsters().then((res) => {
      setMonsters(res.data.results);
    });
  }, []);
  const getMonsterInfo = (e, index) => {
    e.preventDefault();
    API.getMonster(index).then((res) => {
      setMonsterInfo(res.data);
    });
  };
  return (
    <div>
      <Row>
        <Col size="md-3">
          <List className="list">
            {monsters.map((monster) => (
              <ListItem key={monster.id}>
                <a onClick={(e) => getMonsterInfo(e, monster.index)}>
                  {monster.name}
                </a>
              </ListItem>
            ))}
          </List>
        </Col>
        <Col size="md-9">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">{monsterInfo.name}</span>
              <p>
                <ul>
                  <li>Size: {monsterInfo.size}</li>
                  <li>Type: {monsterInfo.type}</li>
                  <li>Hit Points: {monsterInfo.hit_points}</li>
                  <li>Challenge Rating: {monsterInfo.challenge_rating}</li>
                  <li>XP: {monsterInfo.xp} Points</li>
                  <li>Alignment: {monsterInfo.alignment}</li>
                  <li>Language: {monsterInfo.languages}</li>
                </ul>
              </p>
            </div>
          </div>
        </Col>
        <Col>
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Monster Stats</span>
              <p>
                <ul>
                  <li>Strength: {monsterInfo.strength}</li>
                  <li>Dexterity: {monsterInfo.dexterity}</li>
                  <li>Intelligence: {monsterInfo.intelligence}</li>
                  <li>Wisdom: {monsterInfo.wisdom}</li>
                  <li>Charisma: {monsterInfo.charisma}</li>
                </ul>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default MonsterSearch;
