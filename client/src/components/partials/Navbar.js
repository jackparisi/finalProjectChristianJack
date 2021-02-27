import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Store } from "../../store";
import { logoutUser } from "../../store/actions/authActions";

const Navbar = (props) => {
    const { state, dispatch } = useContext(Store);
    const user = state.auth.user || false;
    const logout = (e) => {
        e.preventDefault();
        logoutUser(props.history)(dispatch);
    };

    return (
        <div className="navbar-fixed">
            <nav>
                <div class="nav-wrapper blue-grey darken-1">
                    <a href="/" class="brand-logo">
                        DnD Project
                    </a>
                    <a
                        href="#"
                        data-target="mobile-demo"
                        class="sidenav-trigger"
                    >
                        <i class="material-icons">menu</i>
                    </a>
                    <ul class="right hide-on-med-and-down">
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

            <ul class="sidenav" id="mobile-demo">
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
