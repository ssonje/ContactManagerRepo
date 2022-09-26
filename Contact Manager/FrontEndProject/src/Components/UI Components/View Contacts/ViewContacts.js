import React from "react";
import TrackURLForNonLoggedInUser from "../../Helpers/Components/TrackURLForNonLoggedInUser";
import ViewContactsUI from "./UI/ViewContactsUI";

/**
 * @Component
 * `ViewContacts` component provides the UI and functionality for viewing the contacts.
 */
const ViewContacts = () => {
    return (
        localStorage.length === 1
            ? <ViewContactsUI />
            : <TrackURLForNonLoggedInUser />
    );
}

export default ViewContacts;
