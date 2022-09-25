import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

import NavbarActiveStateHelper from "../../../Helpers/Components/NavbarActiveStateHelper";
import React from "react";
import SideBar from "../../Sidebar/SideBar";

/**
 * @Component
 * `LoginUserNavbar` component provides the UI for Navbar for Logged in user.
 */
const LoginUserNavbar = (props) => {
    const [activeStates, setActiveStates] = useState({});
    if (Object.keys(activeStates).length === 0) {
        setActiveStates(NavbarActiveStateHelper(props.currentLocation));
    }

    return (
        <Container fluid style={{ backgroundColor: "#000000" }}>
            <nav className="navbar navbar-dark navbar-expand-lg">
                {props.isSideBarShowing
                    ?
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <SideBar setSideBarForProfileUI={props.setSideBarForProfileUI}></SideBar>
                        </li>
                    </ul>
                    :
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <SideBar setSideBarForProfileUI={props.setSideBarForProfileUI}></SideBar>
                        </li>
                        <li className="nav-item">
                            <Link className="navbar-brand" to="/home">Smart Contact Manager</Link>
                        </li>
                    </ul>
                }

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className={activeStates.userAddContactClass} to="/user/add/contact">Add Contact<span className="sr-only"></span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className={activeStates.userViewContactsClass} to="/user/view/contacts">View Contacts<span className="sr-only"></span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className={activeStates.userDeleteContactClass} to="/user/delete/contact">Delete Contact<span className="sr-only"></span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className={activeStates.userModifyContactClass} to="/user/modify/contact">Modify Contact<span className="sr-only"></span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className={activeStates.userProfileClass} to="/user/profile">Profile<span className="sr-only"></span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className={activeStates.userSettingsClass} to="/user/settings">Settings<span className="sr-only"></span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className={activeStates.logoutClass} to="/logout">Logout<span className="sr-only"></span></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </Container >
    );
}

export default LoginUserNavbar;
