import AboutUI from "./UI/AboutUI";
import React from "react";
import TrackURLForLoggedInUser from "../../Helpers/Components/TrackURLForLoggedInUser";

/**
 * @Component
 * `About` component provides the UI and functionality for About Section in Contact Manager Appication.
 */
const About = () => {
    return (
        localStorage.length === 0
            ? <AboutUI />
            : <TrackURLForLoggedInUser />
    );
}

export default About;
