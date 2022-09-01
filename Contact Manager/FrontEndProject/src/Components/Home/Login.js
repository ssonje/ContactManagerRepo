import CustomNavbar from "../Navbar/CustomNavbar";
import LoginCss from "../../CSS/Login.module.css";
import React from "react";

/**
 * @Component
 * `Login` component provides the UI for Login Section in Contact Manager Appication.
 */
const Login = () => {
    return (
        <div>
            <CustomNavbar currentLocation="/login"></CustomNavbar>
            <div className={"d-flex align-items-center justify-content-center " + (LoginCss.ContainerWindow)}>
                <div className={(LoginCss.LoginText)}>
                    <h1>Login</h1>
                </div>
            </div>
        </div>
    );
}

export default Login;
