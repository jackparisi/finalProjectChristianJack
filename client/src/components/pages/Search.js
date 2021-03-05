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
        <div class="container">
            <Row>
                <Col size="md-3">
                    <div class="spellList">
                        <List className="spellList">
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
                    </div>
                </Col>
                {spellInfo.name ? (
                    <>
                        <Col size="md-9 offset-3">
                            <div class="card glass spellCardOne darken-1">
                                <div class="card-content white-text">
                                    <span class="card-title">
                                        {spellInfo.name}
                                    </span>
                                    <p>{spellInfo.desc}</p>
                                </div>
                            </div>
                        </Col>
                        <Col size="md-9 offset-3">
                            <div class="card glass spellCardTwo darken-1">
                                <div class="card-content white-text">
                                    <span class="card-title">Spell Info</span>
                                    <ul>
                                        <li>Range: {spellInfo.range}</li>
                                        <li>Ritual: {spellInfo.ritual}</li>
                                        <li>Duration: {spellInfo.duration}</li>
                                        <li>
                                            Casting Time:{" "}
                                            {spellInfo.casting_time}
                                        </li>
                                        <li>Level: {spellInfo.level}</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col size="md-9 offset-3">
                            <div class="card glass spellCardTwo darken-1">
                                <div class="card-content white-text">
                                    <span class="card-title">More</span>
                                    <ul>
                                        <li>School: {spellInfo.school.name}</li>
                                        {spellInfo.classes.map(({ name }) => {
                                            return <li>Class: {name}</li>;
                                        })}

                                        {spellInfo.subclasses.map(
                                            ({ name }) => {
                                                return (
                                                    <li>Subclass: {name}</li>
                                                );
                                            }
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </>
                ) : (
                    ""
                )}
            </Row>
        </div>
    );
}

export default Search;
