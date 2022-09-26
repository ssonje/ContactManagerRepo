import React from "react";
import TrackURLForNonLoggedInUser from "../../Helpers/Components/TrackURLForNonLoggedInUser";
import LogoutUI from "./UI/LogoutUI";

/**
 * @Component
 * `Logout` component provides the Logout Funtionality for the user.
 */
const Logout = () => {
    return (
        (localStorage.length === 1)
            ? <LogoutUI />
            : <TrackURLForNonLoggedInUser />
    );
}

export default Logout;
