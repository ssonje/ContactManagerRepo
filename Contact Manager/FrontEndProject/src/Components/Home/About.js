import React from "react";
import CustomNavbar from "../Navbar/CustomNavbar";

/**
 * @Component
 * `About` component provides the UI for About Section in Contact Manager Appication.
 */
const About = () => {
    return(
        <div>
            <CustomNavbar currentLocation="/about"></CustomNavbar>
            <div align="center">
            <h2>About Us</h2>
            </div>
        </div>
    );
}

export default About;
