import React, { useState, useEffect, Component } from "react";
import { Card, Row, Col } from "react-materialize";
import API from "../../utils/apiHelper";
import { List, ListItem } from "../../utils/List/List";

function Search() {
    const [spells, setSpells] = useState([]);
    const [spellInfo, setSpellInfo] = useState(false);
    useEffect(() => {
        API.getSpells().then((res) => {
            setSpells(res.data.results);
        });
    }, []);
    console.log(spells);
    const getSpellInfo = (e, index) => {
        e.preventDefault();
        API.getSpell(index).then((res) => {
            setSpellInfo(res.data);
        });
    };
    return (
        <div>
            <Row>
                <Col size="md-3">
                    <List>
                        {spells.map((spell) => (
                            <ListItem key={spell.id}>
                                <a
                                    onClick={(e) =>
                                        getSpellInfo(e, spell.index)
                                    }
                                >
                                    {spell.name}
                                </a>
                            </ListItem>
                        ))}
                    </List>
                </Col>
                <Col size="md-9 offset-3">
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                            <span class="card-title">{spellInfo.name}</span>
                            <p>{spellInfo.desc}</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Search;
