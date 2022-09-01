import AboutCss from "../../CSS/About.module.css";
import CustomNavbar from "../Navbar/CustomNavbar";
import React from "react";

/**
 * @Component
 * `About` component provides the UI for About Section in Contact Manager Appication.
 */
const About = () => {
    return (
        <div>
            <CustomNavbar currentLocation="/about"></CustomNavbar>
            <div className={"d-flex align-items-center justify-content-center " + (AboutCss.ContainerWindow)}>
                <div className={(AboutCss.AboutText)}>
                    <h1>About us</h1>
                </div>
            </div>
        </div>
    );
}

export default About;
