import React from "react";
import UserProfileUI from "./UserProfileUI";
import TestComponent from "../../Helpers/Components/TrackUserURL";

/**
 * @Component
 * `UserProfile` component provides the UI for User Profile Section in Contact Manager Appication.
 */
const UserProfile = () => {
    return (
        localStorage.length === 1
            ? <UserProfileUI />
            : <TestComponent />
    );
}

export default UserProfile;
