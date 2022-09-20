import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import NavbarActiveStateHelper from "../../Helpers/Components/NavbarActiveStateHelper";
import React from "react";

/**
 * @Component
 * `LoginUserNavbar` component provides the UI for Navbar for Logged in user.
 */
const LoginUserNavbar = (props) => {
    const [activeStates, setActiveStates] = useState({});
    if (Object.keys(activeStates).length === 0) {
        setActiveStates(NavbarActiveStateHelper(props.currentLocation));
    }

    // get the user name of the user from the props
    const user_name = props.user_name;

    return (
        <Container fluid style={{ backgroundColor: "#000000" }}>
            <nav className="navbar navbar-dark navbar-expand-lg">
                <Link className="navbar-brand" to="/home">Smart Contact Manager</Link>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className={activeStates.userProfileClass} to="/user/profile">{user_name ? user_name : ""}<span className="sr-only"></span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className={activeStates.logoutClass} to="/logout">Logout<span className="sr-only"></span></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </Container>
    );
}

export default LoginUserNavbar;
