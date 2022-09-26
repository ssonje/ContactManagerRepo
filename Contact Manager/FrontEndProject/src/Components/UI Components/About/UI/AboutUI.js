import AboutCss from "../CSS/About.module.css";
import CustomNavbar from "../../Navbar/CustomNavbar";
import React from "react";
import { useState } from "react";

/**
 * @Component
 * `AboutUI` component provides the UI for About Section in Contact Manager Appication.
 */
const AboutUI = () => {

    const [sideBarForProfileUI, setSideBarForProfileUI] = useState(false);

    return (
        <div>
            <CustomNavbar
                currentLocation="/about"
                setSideBarForProfileUI={setSideBarForProfileUI}
                isSideBarShowing={sideBarForProfileUI}>
            </CustomNavbar>
            <div className={"d-flex align-items-center justify-content-center " + (sideBarForProfileUI ? AboutCss.ContainerWindowForSideBarOn : AboutCss.ContainerWindowForSideBarOff)}>
                <div className={(AboutCss.AboutText)}>
                    <h1>About us</h1>
                </div>
            </div>
        </div>
    );
}

export default AboutUI;
