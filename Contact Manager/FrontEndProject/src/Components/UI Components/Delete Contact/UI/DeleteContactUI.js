import { useDeleteContact } from "../Hooks/useDeleteContact";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useState } from "react";

import CustomNavbar from "../../Navbar/CustomNavbar";
import DeleteContactDBService from "../Database Services/DeleteContactDBService";
import LoadingSpinner from "../../Loading Spinner/LoadingSpinner";
import React from "react";

/**
 * @Component
 * `DeleteContactUI` component provides the UI for deleting the contact.
 */
const DeleteContactUI = (props) => {

    const [sideBarForProfileUI, setSideBarForProfileUI] = useState(false);
    const [isAPICalled, setIsAPICalled] = useState(false);

    // this user is used to avoid mismatched call to the API at the server side
    const user = useState({
        email: null,
        password: null,
    });

    const id = props.id;
    const isContactsDeleted = useRef(true);
    const navigate = useNavigate();

    // Delete the contact
    const deleteContact = () => {
        if (isContactsDeleted.current) {
            DeleteContactDBService(navigate, setIsAPICalled, id, user);
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
            {
                isAPICalled
                ? <LoadingSpinner sideBarForProfileUI={sideBarForProfileUI} />
                : <></>
            }
        </div>
    );
}

export default DeleteContactUI;
