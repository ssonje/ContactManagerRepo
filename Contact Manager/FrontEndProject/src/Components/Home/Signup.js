import React from "react";
import CustomNavbar from "../Navbar/CustomNavbar";

/**
 * @Component
 * `Signup` component provides the UI for Signup Section in Contact Manager Appication.
 */
const Signup = () => {
    return(
        <div>
            <CustomNavbar currentLocation="/signup"></CustomNavbar>
            <div align="center">
            <h2>Sign Up</h2>
            </div>
        </div>
    );
}

export default Signup;
