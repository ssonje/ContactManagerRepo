import LoginUserNavbar from "./LoginUserNavbar";
import NonLoginUserNavbar from "./NonLoginUserNavbar";
import React from "react";

/**
 * @Component
 * `CustomNavbar` component provides the UI for Navbar for all the pages in the Contact Manager Appication.
 */
const CustomNavbar = (props) => {
    return (
        (localStorage.length === 1)
        ? <LoginUserNavbar currentLocation={props.currentLocation}></LoginUserNavbar>
        : <NonLoginUserNavbar currentLocation={props.currentLocation}></NonLoginUserNavbar>
    );
}

export default CustomNavbar;
