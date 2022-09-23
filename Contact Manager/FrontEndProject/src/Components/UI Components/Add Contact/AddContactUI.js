import { useState } from "react";
import CustomNavbar from "../Navbar/CustomNavbar";
import AddContactCss from "./CSS/AddContact.module.css";
import React from "react";

/**
 * @Component
 * `AddContactUI` component provides the UI for Adding the contact.
 */
const AddContactUI = () => {

    const [sideBarForProfileUI, setSideBarForProfileUI] = useState(false);

    return (
        <div>
            <CustomNavbar
                currentLocation="/user/add/contact"
                setSideBarForProfileUI={setSideBarForProfileUI}
                isSideBarShowing={sideBarForProfileUI}>
            </CustomNavbar>
            <div className={"d-flex align-items-center justify-content-center " + (sideBarForProfileUI ? AddContactCss.ContainerWindowForSideBarOn : AddContactCss.ContainerWindowForSideBarOff)}>
                <div className={(AddContactCss.AddContactText)}>
                    <h1>Add Contact</h1>
                </div>
            </div>
        </div>
    );
}

export default AddContactUI;
