import CustomNavbar from "../Navbar/CustomNavbar";
import React from "react";
import SignupUI from "./UI/SignupUI";

/**
 * @Component
 * `Signup` component provides the UI and functionality for Signup Section in Contact Manager Appication.
 */
const Signup = () => {

    return (
        <div>
            <CustomNavbar currentLocation="/signup"></CustomNavbar>
            <SignupUI />
        </div>
    );
}

export default Signup;
