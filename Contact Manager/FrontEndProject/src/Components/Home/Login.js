import React from "react";
import CustomNavbar from "../Navbar/CustomNavbar";

/**
 * @Component
 * `Login` component provides the UI for Login Section in Contact Manager Appication.
 */
const Login = () => {
    return(
        <div>
            <CustomNavbar currentLocation="/login"></CustomNavbar>
            <div align="center">
            <h2>Login</h2>
            </div>
        </div>
    );
}

export default Login;
