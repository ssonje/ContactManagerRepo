import CustomNavbar from "../Navbar/CustomNavbar";
import HomeCss from "./CSS/Home.module.css";
import React from "react";

/**
 * @Component
 * `HomeForLoggedInUser` component provides the UI for Home Section for logged in user in Contact Manager Appication.
 */
const HomeForLoggedInUser = () => {
    return (
        <div>
            <CustomNavbar currentLocation="/home"></CustomNavbar>
            <div className={"d-flex align-items-center justify-content-center " + (HomeCss.ContainerWindow)}>
                <div className={(HomeCss.HomeText)}>
                    <div>
                        <h1>Smart Contact Manager</h1>
                        <p>Start collecting your contacts in a very smarter way. We provide very efficient and smarter way of handling contacts.</p>
                        <p>Contact Test@gmail.com for more details.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeForLoggedInUser;
