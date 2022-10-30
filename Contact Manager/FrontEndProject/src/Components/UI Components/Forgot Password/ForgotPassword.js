import { useComponentTitle } from "../../Helpers/Hooks/useComponentTitle";

import ForgotPasswordEmailUI from "./Email/UI/ForgotPasswordEmailUI";
import React from "react";
import TrackURLForLoggedInUser from "../../../Components/Helpers/Components/TrackURLForLoggedInUser";

import * as ComponentsTitle from "../../../Constants/ComponentsTitle";

/**
 * @Component
 * `ForgotPassword` component provides the UI and functionality for Forgot Password in Contact Manager Appication.
 */
const ForgotPassword = () => {

    useComponentTitle(ComponentsTitle.COMPONENT_TITLE_FOR_FORGOT_PASSWORD);

    return (
        localStorage.length === 0
            ? <ForgotPasswordEmailUI />
            : <TrackURLForLoggedInUser />
    );
}

export default ForgotPassword;
