import React from "react";
import CustomNavbar from "../Navbar/CustomNavbar";
import baseAppCss from "../../CSS/BaseApp.module.css";

/**
 * @Component
 * `Login` component provides the UI for Login Section in Contact Manager Appication.
 */
const Login = () => {
    return (
        <div>
            <CustomNavbar currentLocation="/login"></CustomNavbar>
            <div>
                <div align="center" className={(baseAppCss.ComponentHeight) + " " + (baseAppCss.ComponentWidth) + " " + (baseAppCss.BackgroundImage)}>
                    <h1 className={(baseAppCss.Text)}>Login</h1>
                </div>
            </div>
        </div>
    );
}

export default Login;
