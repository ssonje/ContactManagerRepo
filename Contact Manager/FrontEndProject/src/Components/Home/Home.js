import React from "react";
import CustomNavbar from "../Navbar/CustomNavbar";

/**
 * @Component
 * `Home` component provides the UI for Home Section in Contact Manager Appication.
 */
const Home = () => {
    return(
        <div>
            <CustomNavbar currentLocation="/home"></CustomNavbar>
            <div align="center">
            <h2>Home</h2>
            </div>
        </div>
    );
}

export default Home;
