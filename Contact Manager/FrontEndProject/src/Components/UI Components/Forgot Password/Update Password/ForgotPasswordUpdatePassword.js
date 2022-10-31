import { useComponentTitle } from "../../../Helpers/Hooks/useComponentTitle";

import ForgotPasswordUpdatePasswordUI from "./UI/ForgotPasswordUpdatePasswordUI";
import React from "react";
import TrackURLForLoggedInUser from "../../../Helpers/Components/TrackURLForLoggedInUser";

import * as ComponentsTitle from "../../../../Constants/ComponentsTitle";

/**
 * @Component
 * `ForgotPasswordUpdatePassword` component provides the UI and functionality for Forgot Password - Update Password in Contact Manager Appication.
 */
const ForgotPasswordUpdatePassword = () => {

    useComponentTitle(ComponentsTitle.COMPONENT_TITLE_FOR_FORGOT_PASSWORD);

    return (
        localStorage.length === 0
            ? <ForgotPasswordUpdatePasswordUI />
            : <TrackURLForLoggedInUser />
    );
}

export default ForgotPasswordUpdatePassword;
