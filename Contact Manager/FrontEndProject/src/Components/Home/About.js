import React from "react";
import CustomNavbar from "../Navbar/CustomNavbar";
import baseAppCss from "../../CSS/BaseApp.module.css";

/**
 * @Component
 * `About` component provides the UI for About Section in Contact Manager Appication.
 */
const About = () => {
    return (
        <div>
            <CustomNavbar currentLocation="/about"></CustomNavbar>
            <div>
                <div align="center" className={(baseAppCss.ComponentHeight) + " " + (baseAppCss.ComponentWidth) + " " + (baseAppCss.BackgroundImage)}>
                    <h1 className={(baseAppCss.Text)}>About Us</h1>
                </div>
            </div>
        </div>
    );
}

export default About;
