import { useComponentTitle } from "../../Helpers/Hooks/useComponentTitle";

import React from "react";
import TrackURLForNonLoggedInUser from "../../Helpers/Components/TrackURLForNonLoggedInUser";
import UserProfileUI from "./UI/UserProfileUI";

import * as ComponentsTitle from "../../../Constants/ComponentsTitle";

/**
 * @Component
 * `UserProfile` component provides the UI for User Profile Section in Contact Manager Appication.
 */
const UserProfile = () => {

    useComponentTitle(ComponentsTitle.COMPONENT_TITLE_FOR_PROFILE);

    return (
        localStorage.length === 1
            ? <UserProfileUI />
            : <TrackURLForNonLoggedInUser />
    );
}

export default UserProfile;
