import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
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
                        <li>
                            <Link to="/">Profile</Link>
                        </li>
                        <li>
                            <Link to="/randomizer">Rondomize</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
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
