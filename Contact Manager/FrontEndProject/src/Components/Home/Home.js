import { useHomeRender } from "../Helpers/Hooks/useHomeRender";
import HomeForLoggedInUser from "./HomeForLoggedInUser";
import HomeForNonLoggedInUser from "./HomeForNonLoggedInUser";
import React from "react";

/**
 * @Component
 * `Home` component provides the UI for Home Section in Contact Manager Appication.
 */
const Home = () => {
    // Render the correct Home page for the Logged in / out user.
    useHomeRender(localStorage);

    return (
        (localStorage.length === 1)
            ? <HomeForLoggedInUser />
            : <HomeForNonLoggedInUser />
    );
}

export default Home;
