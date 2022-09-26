import React from "react";
import TrackURLForNonLoggedInUser from "../../Helpers/Components/TrackURLForNonLoggedInUser";
import UserProfileUI from "./UI/UserProfileUI";

/**
 * @Component
 * `UserProfile` component provides the UI for User Profile Section in Contact Manager Appication.
 */
const UserProfile = () => {
    return (
        localStorage.length === 1
            ? <UserProfileUI />
            : <TrackURLForNonLoggedInUser />
    );
}

export default UserProfile;
