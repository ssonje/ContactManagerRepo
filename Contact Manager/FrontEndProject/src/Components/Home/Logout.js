import CustomNavbar from "../Navbar/CustomNavbar";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserLogoutFormAction } from "../Helpers/Hooks/useUserLogoutFormAction";

/**
 * @Component
 * `Logout` component provides the UI for user to logout from the Application.
 */
const Logout = () => {
    const navigate = useNavigate();

    // Perform respective action when click on the logout button.
    useUserLogoutFormAction(navigate);

    return (
        <CustomNavbar currentLocation="/logout"></CustomNavbar>
    );
}

export default Logout;
