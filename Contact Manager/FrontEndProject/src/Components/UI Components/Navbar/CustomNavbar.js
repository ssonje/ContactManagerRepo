import LoginUserNavbar from "./UI/LoginUserNavbar";
import NonLoginUserNavbar from "./UI/NonLoginUserNavbar";
import React from "react";

/**
 * @Component
 * `CustomNavbar` component provides the UI for Navbar for all the pages in the Contact Manager Appication.
 */
const CustomNavbar = (props) => {
    return (
        (localStorage.length === 1)
            ? <LoginUserNavbar
                currentLocation={props.currentLocation}
                setSideBarForProfileUI={props.setSideBarForProfileUI}
                isSideBarShowing={props.isSideBarShowing}>
            </LoginUserNavbar>
            : <NonLoginUserNavbar
                currentLocation={props.currentLocation}
                setSideBarForProfileUI={props.setSideBarForProfileUI}
                isSideBarShowing={props.isSideBarShowing}>
            </NonLoginUserNavbar>
    );
}

export default CustomNavbar;
