import { Container } from "reactstrap";
import { useRef, useState } from "react";
import { useViewContacts } from "../Hooks/useViewContacts";
import { ViewContactsDBService } from "../Database Services/ViewContactsDBService";

import BasAppCss from "../../../../CSS/BaseApp.module.css";
import CustomNavbar from "../../Navbar/CustomNavbar";
import NoContactsAvailableUI from "./NoContactsAvailableUI";
import React from "react";
import ShowContactsTableUI from "./ShowContactsTableUI";
import ViewContactsCss from "../CSS/ViewContacts.module.css";

/**
 * @Component
 * `ViewContactsUI` component provides the UI for viewing the contacts.
 */
const ViewContactsUI = () => {

    const [contacts, setContacts] = useState([]);
    const [sideBarForProfileUI, setSideBarForProfileUI] = useState(false);
    const isContactsFetched = useRef(true);

    // Fetch the Contacts for the User
    const viewContacts = () => {
        if (isContactsFetched.current) {
            ViewContactsDBService(setContacts);
            isContactsFetched.current = false;
        }
    };

    // Call the useViewContacts in-order to skip initial execution of useEffect and fetch contacts for the user.
    useViewContacts(viewContacts);

    return (
        <div>
            <CustomNavbar
                currentLocation="/user/view/contacts"
                setSideBarForProfileUI={setSideBarForProfileUI}
                isSideBarShowing={sideBarForProfileUI}>
            </CustomNavbar>
            <div className={"d-flex align-items-center justify-content-center " + (sideBarForProfileUI ? BasAppCss.ContainerWindowForSideBarOn : BasAppCss.ContainerWindowForSideBarOff)}>
                <Container>
                    <h2 className={(ViewContactsCss.ViewContactsText) + " mb-4"}>Your Contacts</h2>
                    <div className={(ViewContactsCss.ViewContactsTextCenter)}>
                        {
                            contacts.length > 0
                                ? <ShowContactsTableUI contacts={contacts}></ShowContactsTableUI>
                                : <NoContactsAvailableUI />
                        }
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default ViewContactsUI;
