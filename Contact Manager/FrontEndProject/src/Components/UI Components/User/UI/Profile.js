import React from "react";
import UserProfileCss from "../CSS/UserProfile.module.css";

/**
 * @Component
 * `Profile` component provides the UI for User Profile Section in Contact Manager Appication.
 */
const Profile = (props) => {
    return (
        <div className={"d-flex align-items-center justify-content-center " + (props.isSideBarShowing ? UserProfileCss.ContainerWindowForSideBarOn : UserProfileCss.ContainerWindowForSideBarOff)}>
            <div className={(UserProfileCss.UserProfileText)}>
                <h1>Your Profile</h1>
            </div>
        </div>
    );
}

export default Profile;
