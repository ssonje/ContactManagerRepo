import BaseAppCss from "../../CSS/BaseApp.module.css";
import CustomNavbar from "../Navbar/CustomNavbar";
import React from "react";

/**
 * @Component
 * `Login` component provides the UI for Login Section in Contact Manager Appication.
 */
const Login = () => {
    return (
        <div>
            <CustomNavbar currentLocation="/login"></CustomNavbar>
            <div>
                <div align="center" className={(BaseAppCss.ComponentHeight) + " " + (BaseAppCss.ComponentWidth) + " " + (BaseAppCss.BackgroundImage)}>
                    <h1 className={(BaseAppCss.Text)}>Login</h1>
                </div>
            </div>
        </div>
    );
}

export default Login;
