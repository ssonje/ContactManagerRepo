import { useState } from "react";

import CustomNavbar from "../../Navbar/CustomNavbar";
import ModifyContactCss from "../CSS/ModifyContact.module.css";
import React from "react";

/**
 * @Component
 * `ModifyContactUI` component provides the UI for Modifying the User.
 */
const ModifyContactUI = () => {

    const [sideBarForProfileUI, setSideBarForProfileUI] = useState(false);

    return (
        <div>
            <CustomNavbar
                currentLocation="/user/modify/contact"
                setSideBarForProfileUI={setSideBarForProfileUI}
                isSideBarShowing={sideBarForProfileUI}>
            </CustomNavbar>
            <div className={"d-flex align-items-center justify-content-center " + (sideBarForProfileUI ? ModifyContactCss.ContainerWindowForSideBarOn : ModifyContactCss.ContainerWindowForSideBarOff)}>
                <div className={(ModifyContactCss.ModifyContactText)}>
                    <h1>Modify Contact</h1>
                </div>
            </div>
        </div>
    );
}

export default ModifyContactUI;
