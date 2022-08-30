import React from "react";
import CustomNavbar from "../Navbar/CustomNavbar";
import BaseAppCss from "../../CSS/BaseApp.module.css";

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
