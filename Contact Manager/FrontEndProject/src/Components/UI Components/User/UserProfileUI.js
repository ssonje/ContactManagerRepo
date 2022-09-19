import { GetUserFromUsername } from "../../Database Service Components/GetUserFromUsername";
import { useState } from "react";
import { useUserAuthenticationFormAction } from "../../Helpers/Hooks/useUserAuthenticationFormAction";
import CustomNavbar from "../Navbar/CustomNavbar";
import React from "react";
import UserProfileCss from "./CSS/UserProfile.module.css";

/**
 * @Component
 * `UserProfileUI` component provides the UI for User Profile Section in Contact Manager Appication.
 */
const UserProfileUI = () => {
    const [user, setUser] = useState({
        name: null
    });
    const authToken = JSON.parse(localStorage.getItem(localStorage.key(0)));
    const getUserData = (authToken) => {
        GetUserFromUsername(authToken, setUser);
    }

    // use `useUserAuthenticationFormAction` hook in-order to skip the twice execution using useEffect
    // and get the user data from username.
    useUserAuthenticationFormAction(authToken, getUserData);

    return (
        <div>
            <CustomNavbar currentLocation="/user/profile" user_name={user.name === null ? "" : user.name}></CustomNavbar>
            <div className={"d-flex align-items-center justify-content-center " + (UserProfileCss.ContainerWindow)}>
                <div className={(UserProfileCss.UserProfileText)}>
                    <h1>Your Profile</h1>
                </div>
            </div>
        </div>
    );
}

export default UserProfileUI;
