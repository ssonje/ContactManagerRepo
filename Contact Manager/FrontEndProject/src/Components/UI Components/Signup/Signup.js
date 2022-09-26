import React from "react";
import TrackURLForLoggedInUser from "../../Helpers/Components/TrackURLForLoggedInUser";
import SignupUI from "./UI/SignupUI";

/**
 * @Component
 * `Signup` component provides the UI and functionality for Signup Section in Contact Manager Appication.
 */
const Signup = () => {

    return (
        localStorage.length === 0
            ? <SignupUI />
            : <TrackURLForLoggedInUser />
    );
}

export default Signup;
