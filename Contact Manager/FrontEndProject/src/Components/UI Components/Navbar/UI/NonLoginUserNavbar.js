import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import NavbarActiveStateHelper from "../../../Helpers/Components/NavbarActiveStateHelper";
import React from "react";

/**
 * @Component
 * `NonLoginUserNavbar` component provides the UI for Navbar for Non Logged in user.
 */
const NonLoginUserNavbar = (props) => {
    const [activeStates, setActiveStates] = useState({});
    if (Object.keys(activeStates).length === 0) {
        setActiveStates(NavbarActiveStateHelper(props.currentLocation));
    }

    return (
        <Container fluid style={{ backgroundColor: "#000000" }}>
            <nav className="navbar navbar-dark navbar-expand-lg">
                <Link className="navbar-brand" to="/home">Smart Contact Manager</Link>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className={activeStates.homeClass} to="/home">Home<span className="sr-only"></span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className={activeStates.aboutClass} to="/about">About<span className="sr-only"></span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className={activeStates.loginClass} to="/login">Login<span className="sr-only"></span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className={activeStates.signupClass} to="/signup">Sign Up<span className="sr-only"></span></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </Container>
    );
}

export default NonLoginUserNavbar;
