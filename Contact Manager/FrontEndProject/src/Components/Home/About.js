import { Container } from "reactstrap";
import BaseAppCss from "../../CSS/BaseApp.module.css";
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
            <div>
                <div align="center" className={"d-flex align-items-center justify-content-center " + (BaseAppCss.ComponentHeight) + " " + (BaseAppCss.ComponentWidth) + " " + (BaseAppCss.BackgroundImage)}>
                    <Container>
                        <h1 className={BaseAppCss.HomeText}>About us</h1>
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default About;
