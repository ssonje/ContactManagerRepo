import { useState } from "react";

import CustomNavbar from "../../Navbar/CustomNavbar";
import React from "react";
import ViewContactsCss from "../CSS/ViewContacts.module.css";

/**
 * @Component
 * `ViewContactsUI` component provides the UI for viewing the contacts.
 */
const ViewContactsUI = () => {

    const [sideBarForProfileUI, setSideBarForProfileUI] = useState(false);

    return (
        <div>
            <CustomNavbar
                currentLocation="/user/view/contacts"
                setSideBarForProfileUI={setSideBarForProfileUI}
                isSideBarShowing={sideBarForProfileUI}>
            </CustomNavbar>
            <div className={"d-flex align-items-center justify-content-center " + (sideBarForProfileUI ? ViewContactsCss.ContainerWindowForSideBarOn : ViewContactsCss.ContainerWindowForSideBarOff)}>
                <div className={(ViewContactsCss.ViewContactsText)}>
                    <h1>View Contacts</h1>
                </div>
            </div>
        </div>
    );
}

export default ViewContactsUI;
