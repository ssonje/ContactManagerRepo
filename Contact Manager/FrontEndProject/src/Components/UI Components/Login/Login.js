import { useComponentTitle } from "../../Helpers/Hooks/useComponentTitle";

import LoginUI from "./UI/LoginUI";
import React from "react";
import TrackURLForLoggedInUser from "../../Helpers/Components/TrackURLForLoggedInUser";

import * as ComponentsTitle from "../../../Constants/ComponentsTitle";

/**
 * @Component
 * `Login` component provides the UI and functionality for Login Section in Contact Manager Appication.
 */
const Login = () => {

    useComponentTitle(ComponentsTitle.COMPONENT_TITLE_FOR_LOGIN);

    return (
        localStorage.length === 0
            ? <LoginUI />
            : <TrackURLForLoggedInUser />
    );
}

export default Login;
