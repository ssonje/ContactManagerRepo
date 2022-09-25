import CustomNavbar from "../Navbar/CustomNavbar";
import LoginUI from "./UI/LoginUI";
import React from "react";

/**
 * @Component
 * `Login` component provides the UI and functionality for Login Section in Contact Manager Appication.
 */
const Login = () => {
    return (
        <div>
            <CustomNavbar currentLocation="/login"></CustomNavbar>
            <LoginUI />
        </div>
    );
}

export default Login;
