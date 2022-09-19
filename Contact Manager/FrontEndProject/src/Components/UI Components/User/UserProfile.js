import React from "react";
import TrackUserURL from "../../Helpers/Components/TrackUserURL";
import UserProfileUI from "./UserProfileUI";

/**
 * @Component
 * `UserProfile` component provides the UI for User Profile Section in Contact Manager Appication.
 */
const UserProfile = () => {
    return (
        localStorage.length === 1
            ? <UserProfileUI />
            : <TrackUserURL />
    );
}

export default UserProfile;
