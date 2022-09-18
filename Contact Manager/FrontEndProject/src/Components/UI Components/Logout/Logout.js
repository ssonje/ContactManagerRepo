import React from "react";
import TrackUserURL from "../../Helpers/Components/TrackUserURL";
import LogoutUI from "./LogoutUI";

/**
 * @Component
 * `Logout` component provides the Logout Funtionality for the user.
 */
const Logout = () => {
    return (
        (localStorage.length === 1)
            ? <LogoutUI />
            : <TrackUserURL />
    );
}

export default Logout;
