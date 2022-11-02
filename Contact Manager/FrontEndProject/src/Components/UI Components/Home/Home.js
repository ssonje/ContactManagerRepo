import { useComponentTitle } from "../../Helpers/Hooks/useComponentTitle";
import { useHomeRender } from "./Hooks/useHomeRender";

import HomeForLoggedInUser from "./UI/HomeForLoggedInUser";
import HomeForNonLoggedInUser from "./UI/HomeForNonLoggedInUser";
import React from "react";

import * as ComponentsTitle from "../../../Constants/ComponentsTitle";

/**
 * @Component
 * `Home` component provides the UI for Home Section in Contact Manager Appication.
 */
const Home = () => {
    // Render the correct Home page for the Logged in / out user.
    useHomeRender(localStorage);

    useComponentTitle(ComponentsTitle.COMPONENT_TITLE_FOR_HOME);

    return (
        (localStorage.length === 1)
            ? <HomeForLoggedInUser />
            : <HomeForNonLoggedInUser />
    );
}

export default Home;
