import { useState } from "react";
import CustomNavbar from "../Navbar/CustomNavbar";
import Profile from "./Profile";
import React from "react";

/**
 * @Component
 * `UserProfileUI` component provides the UI for User Profile Section in Contact Manager Appication.
 */
const UserProfileUI = () => {

    const [sideBarForProfileUI, setSideBarForProfileUI] = useState(false);

    return (
        <div>
            <CustomNavbar
                currentLocation="/user/profile"
                setSideBarForProfileUI={setSideBarForProfileUI}
                isSideBarShowing={sideBarForProfileUI}>
            </CustomNavbar>
            <Profile isSideBarShowing={sideBarForProfileUI} />
        </div>
    );
}

export default UserProfileUI;
