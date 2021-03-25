import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./store/actions/authActions";
import { Store } from "./store";
import "materialize-css";
import { Button, Card, Row, Col } from "react-materialize";
import M from "materialize-css/dist/js/materialize.min.js";

import "./App.css";
import wood from "./assets/wood.JPG";
import coins from "./assets/coins.PNG";
import dagger from "./assets/dagger.PNG";

import Navbar from "./components/partials/Navbar";
import UserProfile from "./components/pages/UserProfile";
import Randomizer from "./components/pages/Randomizer";
// import Landing from "./components/pages/Landing";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import PrivateRoute from "./components/auth/PrivateRoute";
import Dashboard from "./components/pages/Dashboard";
import SpellSearch from "./components/pages/Search";
import MonsterSearch from "./components/pages/Monsters";

const App = () => {
  const { dispatch } = useContext(Store);

  useEffect(() => {
    if (localStorage.jwtToken) {
      const token = localStorage.jwtToken;
      const decoded = jwt_decode(token);
      const currentTime = Date.now() / 1000;

      setAuthToken(token);

      dispatch(setCurrentUser(decoded));

      if (decoded.exp < currentTime) {
        dispatch(logoutUser());
        window.location.href = "./login";
      }
    }
  }, [dispatch]);

  // Initilize Materialize
  useEffect(() => {
    var elem = document.querySelector(".sidenav");
    var instance = M.Sidenav.init(elem, {
      edge: "left",
      inDuration: 250,
    });
    // Initialize Materialize
  }, []);

    return (
        <Router>
            <img src={wood} id="wood"></img>
            <img src={coins} id="coins"></img>
            <img src={dagger} id="dagger"></img>
            <div className="App">
                <Navbar />
                <Route exact path="/" component={UserProfile} />
                <Route exact path="/randomizer" component={Randomizer} />
                {/* <Route exact path="/" component={Landing} /> */}
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/spellSearch" component={SpellSearch} />
                <Route exact path="/monsterSearch" component={MonsterSearch} />
                <Switch>
                    <PrivateRoute
                        exact
                        path="/dashboard"
                        component={Dashboard}
                    />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
