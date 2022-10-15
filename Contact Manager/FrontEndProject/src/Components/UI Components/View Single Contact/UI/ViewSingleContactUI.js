import { useRef, useState } from "react";
import { useViewSingleContact } from "../Hooks/useViewSingleContact";
import { ViewSingleContactDBService } from "../Database Services/ViewSingleContactDBService";

import BasAppCss from "../../../../CSS/BaseApp.module.css";
import ContactDetailsTable from "./ContactDetailsTable";
import CustomNavbar from "../../Navbar/CustomNavbar";
import React from "react";
import UnauthorizedContactDetails from "./UnauthorizedContactDetails";
import ViewSingleContactCss from "../CSS/ViewSingleContact.module.css";

/**
 * @Component
 * `ViewSingleContactUI` component provides the UI for Viewing single in Contact Manager Appication.
 */
const ViewSingleContactUI = (props) => {

    const [sideBarForProfileUI, setSideBarForProfileUI] = useState(false);

    const id = props.id;
    const [contact, setContact] = useState([]);
    const isContactFetched = useRef(true);

    // Fetch the Contact details
    const fetchContactDetails = () => {
        if (isContactFetched.current) {
            ViewSingleContactDBService(setContact, id);
            isContactFetched.current = false;
        }
    };

    // Call the useViewSingleContact in-order to skip initial execution of useEffect and fetch contact details.
    useViewSingleContact(fetchContactDetails);

    return (
        <div>
            <CustomNavbar
                currentLocation="/user/view/contacts"
                setSideBarForProfileUI={setSideBarForProfileUI}
                isSideBarShowing={sideBarForProfileUI}>
            </CustomNavbar>
            <div className={"d-flex align-items-center justify-content-center " + (sideBarForProfileUI ? BasAppCss.ContainerWindowForSideBarOn : BasAppCss.ContainerWindowForSideBarOff)}>
                <div className={(ViewSingleContactCss.ViewSingleContactText)}>
                    <h2>View Contact</h2>
                    {
                        contact
                        ? <ContactDetailsTable contact={contact}></ContactDetailsTable>
                        : <UnauthorizedContactDetails></UnauthorizedContactDetails>
                    }
                </div>
            </div>
        </div>
    );
}

export default ViewSingleContactUI;
