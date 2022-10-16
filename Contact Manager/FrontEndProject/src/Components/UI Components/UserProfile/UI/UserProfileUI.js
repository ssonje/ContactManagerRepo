import { useState } from "react";

import CustomNavbar from "../../Navbar/CustomNavbar";
import Profile from "./Profile";
import React from "react";
import { FetchUserInformation } from "../Database Services/FetchUserInformation";
import { useFetchUserInformation } from "../Hooks/useFetchUserInformation";
import { useRef } from "react";

/**
 * @Component
 * `UserProfileUI` component provides the UI for User Profile Section in Contact Manager Appication.
 */
const UserProfileUI = () => {

    const [sideBarForProfileUI, setSideBarForProfileUI] = useState(false);
    const [user, setUser] = useState([]);
    const isContactsFetched = useRef(true);

    // Fetch the required User
    const fetchUser = () => {
        if (isContactsFetched.current) {
            FetchUserInformation(setUser);
            isContactsFetched.current = false;
        }
    };

    /*
    * Call the useFetchUserInformation in-order to skip initial execution of useEffect
    * and fetch contacts for the user.
    */
    useFetchUserInformation(fetchUser);

    return (
        <div>
            <CustomNavbar
                currentLocation="/user/profile"
                setSideBarForProfileUI={setSideBarForProfileUI}
                isSideBarShowing={sideBarForProfileUI}>
            </CustomNavbar>
            <Profile isSideBarShowing={sideBarForProfileUI} user={user}/>
        </div>
    );
}

export default UserProfileUI;
