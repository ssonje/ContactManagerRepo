import { useFetchUserInformation } from "../Hooks/useFetchUserInformation";
import { useRef } from "react";
import { useState } from "react";

import CustomNavbar from "../../Navbar/CustomNavbar";
import FetchUserInformation from "../Database Services/FetchUserInformation";
import LoadingSpinner from "../../Loading Spinner/LoadingSpinner";
import Profile from "./Profile";
import React from "react";

/**
 * @Component
 * `UserProfileUI` component provides the UI for User Profile Section in Contact Manager Appication.
 */
const UserProfileUI = () => {

    const [sideBarForProfileUI, setSideBarForProfileUI] = useState(false);
    const [isAPICalled, setIsAPICalled] = useState(false);

    const [user, setUser] = useState([]);
    const isUserInformationFetched = useRef(true);

    // Fetch the required User
    const fetchUser = () => {
        if (isUserInformationFetched.current) {
            FetchUserInformation(setUser, setIsAPICalled);
            isUserInformationFetched.current = false;
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
            {
                isAPICalled
                    ?
                        <LoadingSpinner sideBarForProfileUI={sideBarForProfileUI} />
                    :
                        <Profile isSideBarShowing={sideBarForProfileUI} user={user} />
            }
        </div>
    );
}

export default UserProfileUI;
