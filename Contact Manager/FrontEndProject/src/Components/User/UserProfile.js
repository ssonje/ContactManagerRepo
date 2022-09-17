import CustomNavbar from "../Navbar/CustomNavbar";
import React from "react";
import UserProfileCss from "../../CSS/UserProfile.module.css";

/**
 * @Component
 * `UserProfile` component provides the UI for User Profile Section in Contact Manager Appication.
 */
const UserProfile = () => {
    return (
        <div>
            <CustomNavbar currentLocation="/user/profile"></CustomNavbar>
            <div className={"d-flex align-items-center justify-content-center " + (UserProfileCss.ContainerWindow)}>
                <div className={(UserProfileCss.UserProfileText)}>
                    <h1>Your Profile</h1>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
