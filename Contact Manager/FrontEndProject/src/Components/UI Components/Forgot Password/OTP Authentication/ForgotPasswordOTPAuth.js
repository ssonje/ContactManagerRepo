import { useComponentTitle } from "../../../Helpers/Hooks/useComponentTitle";

import ForgotPasswordOTPAuthUI from "./UI/ForgotPasswordOTPAuthUI";
import React from "react";
import TrackURLForLoggedInUser from "../../../../Components/Helpers/Components/TrackURLForLoggedInUser";

import * as ComponentsTitle from "../../../../Constants/ComponentsTitle";

/**
 * @Component
 * `ForgotPasswordOTPAuth` component provides the UI and functionality for Forgot Password in Contact Manager Appication.
 */
const ForgotPasswordOTPAuth = () => {

    useComponentTitle(ComponentsTitle.COMPONENT_TITLE_FOR_FORGOT_PASSWORD);

    return (
        localStorage.length === 0
            ? <ForgotPasswordOTPAuthUI />
            : <TrackURLForLoggedInUser />
    );
}

export default ForgotPasswordOTPAuth;
