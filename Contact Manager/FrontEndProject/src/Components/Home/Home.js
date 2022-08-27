import React from "react";
import CustomNavbar from "../Navbar/CustomNavbar";

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
