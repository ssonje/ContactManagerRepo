import { useNavigate } from "react-router-dom";
import { useUserLogoutFormAction } from "../Hook/useUserLogoutFormAction";
import CustomNavbar from "../../Navbar/CustomNavbar";
import React from "react";

/**
 * @Component
 * `LogoutUI` component provides the UI for user to logout from the Application.
 */
const LogoutUI = () => {
    const navigate = useNavigate();

    // Perform respective action when click on the logout button.
    useUserLogoutFormAction(navigate);

    return (
        <CustomNavbar currentLocation="/logout"></CustomNavbar>
    );
}

export default LogoutUI;
