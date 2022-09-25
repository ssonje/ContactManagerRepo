import AboutUI from "./UI/AboutUI";
import CustomNavbar from "../Navbar/CustomNavbar";
import React from "react";

/**
 * @Component
 * `About` component provides the UI and functionality for About Section in Contact Manager Appication.
 */
const About = () => {
    return (
        <div>
            <CustomNavbar currentLocation="/about"></CustomNavbar>
            <AboutUI />
        </div>
    );
}

export default About;
