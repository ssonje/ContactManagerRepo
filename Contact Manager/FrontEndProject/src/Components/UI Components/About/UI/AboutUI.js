import AboutCss from "../CSS/About.module.css";
import React from "react";

/**
 * @Component
 * `AboutUI` component provides the UI for About Section in Contact Manager Appication.
 */
const AboutUI = () => {
    return (
        <div className={"d-flex align-items-center justify-content-center " + (AboutCss.ContainerWindow)}>
            <div className={(AboutCss.AboutText)}>
                <h1>About us</h1>
            </div>
        </div>
    );
}

export default AboutUI;
