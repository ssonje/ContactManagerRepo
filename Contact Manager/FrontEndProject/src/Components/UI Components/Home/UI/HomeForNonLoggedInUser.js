import { Link } from "react-router-dom";

import CustomNavbar from "../../Navbar/CustomNavbar";
import HomeCss from "../CSS/Home.module.css";
import React from "react";
import { useState } from "react";

/**
 * @Component
 * `HomeForNonLoggedInUser` component provides the UI for Home Section for non logged in user in Contact Manager Appication.
 */
const HomeForNonLoggedInUser = () => {

    const [sideBarForProfileUI, setSideBarForProfileUI] = useState(false);

    return (
        <div>
            <CustomNavbar
                currentLocation="/home"
                setSideBarForProfileUI={setSideBarForProfileUI}
                isSideBarShowing={sideBarForProfileUI}>
            </CustomNavbar>
            <div className={"d-flex align-items-center justify-content-center " + (sideBarForProfileUI ? HomeCss.ContainerWindowForSideBarOn : HomeCss.ContainerWindowForSideBarOff)}>
                <div className={(HomeCss.HomeText)}>
                    <div>
                        <h1>Smart Contact Manager</h1>
                        <p>Start collecting your contacts in a very smarter way. We provide very efficient and smarter way of handling contacts.</p>
                        <Link className="btn btn-outline-light" to="/login">Get Started</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeForNonLoggedInUser;
