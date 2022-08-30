import { Link } from "react-router-dom";

import BaseAppCss from "../../CSS/BaseApp.module.css";
import CustomNavbar from "../Navbar/CustomNavbar";
import React from "react";

/**
 * @Component
 * `Home` component provides the UI for Home Section in Contact Manager Appication.
 */
const Home = () => {

    return (
        <div>
            <CustomNavbar currentLocation="/home"></CustomNavbar>
            <div className={"d-flex align-items-center justify-content-center " + (BaseAppCss.ComponentHeight) + " " + (BaseAppCss.ComponentWidth) + " " + (BaseAppCss.BackgroundImage)}>
                <div className={BaseAppCss.HomeText}>
                    <h1>Smart Contact Manager</h1>
                    <p>Start collecting your contacts in a very smarter way. We provide very efficient and smarter way of handling contacts.</p>
                    <Link className="btn btn-outline-light" to="/login">Get Started</Link>
                </div>
            </div>

        </div>
    );
}

export default Home;
