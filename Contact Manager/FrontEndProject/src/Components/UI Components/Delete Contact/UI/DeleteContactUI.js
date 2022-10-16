import { DeleteContactDBService } from "../Database Services/DeleteContactDBService";
import { useDeleteContact } from "../Hooks/useDeleteContact";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useState } from "react";

import CustomNavbar from "../../Navbar/CustomNavbar";
import React from "react";

/**
 * @Component
 * `DeleteContactUI` component provides the UI for deleting the contact.
 */
const DeleteContactUI = (props) => {

    const user = useState({
        email: null,
        password: null,
    });

    const [sideBarForProfileUI, setSideBarForProfileUI] = useState(false);
    const id = props.id;
    const isContactsDeleted = useRef(true);
    const navigate = useNavigate();

    // Delete the contact
    const deleteContact = () => {
        if (isContactsDeleted.current) {
            DeleteContactDBService(navigate, id, user);
            isContactsDeleted.current = false;
        }
    };

    // Call the useViewContacts in-order to skip initial execution of useEffect and delete contact.
    useDeleteContact(deleteContact);

    return (
        <div>
            <CustomNavbar
                setSideBarForProfileUI={setSideBarForProfileUI}
                isSideBarShowing={sideBarForProfileUI}>
            </CustomNavbar>
        </div>
    );
}

export default DeleteContactUI;
