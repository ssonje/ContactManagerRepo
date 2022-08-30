import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import ActiveStateHelper from "../Helpers/Components/ActiveStateHelper"

/**
 * @Component
 * `CustomNavbar` component provides the UI for Navbar for all the pages in the Contact Manager Appication.
 */
const CustomNavbar = (props) => {
    const [activeStates, setActiveStates] = useState({});
    if (Object.keys(activeStates).length === 0) {
        setActiveStates(ActiveStateHelper(props.currentLocation));
    }

    return (
        <Container fluid style={{backgroundColor: "#000000"}}>
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

export default CustomNavbar;
