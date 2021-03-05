import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Store } from "../../store";
import { logoutUser } from "../../store/actions/authActions";
import "./style.css";

const Navbar = (props) => {
  const { state, dispatch } = useContext(Store);
  const user = state.auth.user || false;
  const history = useHistory();
  const logout = (e) => {
    e.preventDefault();
    logoutUser(history)(dispatch);
  };

  return (
    <div className="navbar-fixed">
      <nav>
        <div className="glass nav-wrapper blue-grey darken-1">
          <a href="/" className="brand-logo">
            <img src="./assets/rpgenerator.png" className="logo"></img>
          </a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            {user ? (
              <>
                <li>
                  <Link to="/">Profile</Link>
                </li>
                <li>
                  <Link to="/randomizer">Randomize</Link>
                </li>
                <li>
                  <Link to="/spellSearch">Spell Book</Link>
                </li>
                <li>
                  <Link to="/monsterSearch">Bestiary</Link>
                </li>
                <li>
                  <a onClick={logout}>Logout</a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/register">Register</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <Link to="/">Profile</Link>
        </li>
        <li>
          <Link to="/randomizer">Randomize</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
