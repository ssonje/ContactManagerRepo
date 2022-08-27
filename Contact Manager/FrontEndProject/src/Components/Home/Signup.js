import React from "react";
import CustomNavbar from "../Navbar/CustomNavbar";
import baseAppCss from "../../CSS/BaseApp.module.css";

/**
 * @Component
 * `Signup` component provides the UI for Signup Section in Contact Manager Appication.
 */
const Signup = () => {
    return (
        <div>
            <CustomNavbar currentLocation="/signup"></CustomNavbar>
            <div>
                <div align="center" className={(baseAppCss.ComponentHeight) + " " + (baseAppCss.ComponentWidth) + " " + (baseAppCss.BackgroundImage)}>
                    <h1 className={(baseAppCss.Text)}>Sign Up</h1>
                </div>
            </div>
        </div>
    );
}

export default Signup;
