import { useComponentTitle } from "../../Helpers/Hooks/useComponentTitle";

import React from "react";
import TrackURLForNonLoggedInUser from "../../Helpers/Components/TrackURLForNonLoggedInUser";
import LogoutUI from "./UI/LogoutUI";

import * as ComponentsTitle from "../../../Constants/ComponentsTitle";

/**
 * @Component
 * `Logout` component provides the Logout Funtionality for the user.
 */
const Logout = () => {

    useComponentTitle(ComponentsTitle.COMPONENT_TITLE_FOR_LOGOUT);

    return (
        (localStorage.length === 1)
            ? <LogoutUI />
            : <TrackURLForNonLoggedInUser />
    );
}

export default Logout;
