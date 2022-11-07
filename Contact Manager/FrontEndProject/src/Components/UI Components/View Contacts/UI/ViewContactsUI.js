import { Container } from "reactstrap";
import { useState } from "react";
import { useViewContacts } from "../Hooks/useViewContacts";

import BasAppCss from "../../../../CSS/BaseApp.module.css";
import CustomNavbar from "../../Navbar/CustomNavbar";
import LoadingSpinner from "../../Loading Spinner/LoadingSpinner";
import NoContactsAvailableUI from "./NoContactsAvailableUI";
import React from "react";
import ShowContactsTableUI from "./ShowContactsTableUI";
import ViewContactsCss from "../CSS/ViewContacts.module.css";
import ViewContactsDBService from "../Database Services/ViewContactsDBService";

/**
 * @Component
 * `ViewContactsUI` component provides the UI for viewing the contacts.
 */
const ViewContactsUI = () => {

    const [sideBarForProfileUI, setSideBarForProfileUI] = useState(false);
    const [isAPICalled, setIsAPICalled] = useState(false);

    const [contactContent, setContactContent] = useState({
        content: [],
        totalPages: null,
        totalElements: null,
        pageSize: null,
        pageNumber: null,
        lastPage: null
    });

    // Fetch the Contacts for the User
    const viewContacts = (pageNumber = 0) => {
        ViewContactsDBService(setContactContent, setIsAPICalled, pageNumber);
    };

    const changePageContent = (pageNumber = 0) => {
        if (pageNumber > contactContent.pageNumber && contactContent.lastPage) {
            return
        }

        if (pageNumber < contactContent.pageNumber && contactContent.pageNumber === 0) {
            return
        }

        viewContacts(pageNumber);
    }

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
                {
                    isAPICalled
                        ?
                            <LoadingSpinner sideBarForProfileUI={sideBarForProfileUI} />
                        :
                            <Container>
                                <h2 className={(ViewContactsCss.ViewContactsText) + " mb-4"}>Your Contacts</h2>
                                <div className={(ViewContactsCss.ViewContactsTextCenter)}>
                                    {
                                        contactContent.content.length > 0
                                            ? <ShowContactsTableUI contactContent={contactContent} changePageContent={changePageContent} />
                                            : <NoContactsAvailableUI />
                                    }
                                </div>
                            </Container>
                }
            </div>
        </div>
    );
}

export default ViewContactsUI;
