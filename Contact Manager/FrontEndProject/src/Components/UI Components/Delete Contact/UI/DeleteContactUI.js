import { useState } from "react";
import CustomNavbar from "../../Navbar/CustomNavbar";
import DeleteContactCss from "../CSS/DeleteContact.module.css";
import React from "react";

/**
 * @Component
 * `DeleteContactUI` component provides the UI for deleting the contact.
 */
const DeleteContactUI = () => {

    const [sideBarForProfileUI, setSideBarForProfileUI] = useState(false);

    return (
        <div>
            <CustomNavbar
                currentLocation="/user/delete/contact"
                setSideBarForProfileUI={setSideBarForProfileUI}
                isSideBarShowing={sideBarForProfileUI}>
            </CustomNavbar>
            <div className={"d-flex align-items-center justify-content-center " + (sideBarForProfileUI ? DeleteContactCss.ContainerWindowForSideBarOn : DeleteContactCss.ContainerWindowForSideBarOff)}>
                <div className={(DeleteContactCss.DeleteContactText)}>
                    <h1>Delete Contact</h1>
                </div>
            </div>
        </div>
    );
}

export default DeleteContactUI;
