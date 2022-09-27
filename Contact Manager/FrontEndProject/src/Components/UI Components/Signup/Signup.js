import { useComponentTitle } from "../../Helpers/Hooks/useComponentTitle";

import React from "react";
import TrackURLForLoggedInUser from "../../Helpers/Components/TrackURLForLoggedInUser";
import SignupUI from "./UI/SignupUI";

import * as ComponentsTitle from "../../../Constants/ComponentsTitle";

/**
 * @Component
 * `Signup` component provides the UI and functionality for Signup Section in Contact Manager Appication.
 */
const Signup = () => {

    useComponentTitle(ComponentsTitle.COMPONENT_TITLE_FOR_SIGNUP);

    return (
        localStorage.length === 0
            ? <SignupUI />
            : <TrackURLForLoggedInUser />
    );
}

export default Signup;
