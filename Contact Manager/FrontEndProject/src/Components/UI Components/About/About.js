import { useComponentTitle } from "../../Helpers/Hooks/useComponentTitle";

import AboutUI from "./UI/AboutUI";
import React from "react";
import TrackURLForLoggedInUser from "../../Helpers/Components/TrackURLForLoggedInUser";

import * as ComponentsTitle from "../../../Constants/ComponentsTitle";

/**
 * @Component
 * `About` component provides the UI and functionality for About Section in Contact Manager Appication.
 */
const About = () => {

    useComponentTitle(ComponentsTitle.COMPONENT_TITLE_FOR_ABOUT);

    return (
        localStorage.length === 0
            ? <AboutUI />
            : <TrackURLForLoggedInUser />
    );
}

export default About;
