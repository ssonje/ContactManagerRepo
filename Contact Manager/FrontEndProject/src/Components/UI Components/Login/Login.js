import LoginUI from "./UI/LoginUI";
import React from "react";
import TrackURLForLoggedInUser from "../../Helpers/Components/TrackURLForLoggedInUser";

/**
 * @Component
 * `Login` component provides the UI and functionality for Login Section in Contact Manager Appication.
 */
const Login = () => {
    return (
        localStorage.length === 0
            ? <LoginUI />
            : <TrackURLForLoggedInUser />
    );
}

export default Login;
