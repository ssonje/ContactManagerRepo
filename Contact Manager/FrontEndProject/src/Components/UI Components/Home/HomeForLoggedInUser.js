import { GetUserFromUsername } from "../../Database Service Components/GetUserFromUsername";
import { useState } from "react";
import { useUserAuthenticationFormAction } from "../../Helpers/Hooks/useUserAuthenticationFormAction";
import CustomNavbar from "../Navbar/CustomNavbar";
import HomeCss from "./CSS/Home.module.css";
import React from "react";

/**
 * @Component
 * `HomeForLoggedInUser` component provides the UI for Home Section for logged in user in Contact Manager Appication.
 */
const HomeForLoggedInUser = () => {
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
            <CustomNavbar currentLocation="/home" user_name={user.name === null ? "" : user.name}></CustomNavbar>
            <div className={"d-flex align-items-center justify-content-center " + (HomeCss.ContainerWindow)}>
                <div className={(HomeCss.HomeText)}>
                    <div>
                        <h1>Smart Contact Manager</h1>
                        <p>Start collecting your contacts in a very smarter way. We provide very efficient and smarter way of handling contacts.</p>
                        <p>Contact Test@gmail.com for more details.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeForLoggedInUser;
