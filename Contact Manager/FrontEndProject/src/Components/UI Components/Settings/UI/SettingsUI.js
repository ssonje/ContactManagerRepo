import { useState } from "react";
import CustomNavbar from "../../Navbar/CustomNavbar";
import React from "react";
import SettingsCss from "../CSS/Settings.module.css";

/**
 * @Component
 * `SettingsUI` component provides the UI for User Profile Section in Contact Manager Appication.
 */
const SettingsUI = () => {

    const [sideBarForProfileUI, setSideBarForProfileUI] = useState(false);

    return (
        <div>
            <CustomNavbar
                currentLocation="/user/settings"
                setSideBarForProfileUI={setSideBarForProfileUI}
                isSideBarShowing={sideBarForProfileUI}>
            </CustomNavbar>
            <div className={"d-flex align-items-center justify-content-center " + (sideBarForProfileUI ? SettingsCss.ContainerWindowForSideBarOn : SettingsCss.ContainerWindowForSideBarOff)}>
                <div className={(SettingsCss.SettingsText)}>
                    <h1>Settings</h1>
                </div>
            </div>
        </div>
    );
}

export default SettingsUI;
