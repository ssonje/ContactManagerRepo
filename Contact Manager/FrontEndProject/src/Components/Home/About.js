import React from "react";
import CustomNavbar from "../Navbar/CustomNavbar";

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
