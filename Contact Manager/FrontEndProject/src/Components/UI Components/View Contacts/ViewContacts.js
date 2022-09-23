import React from "react";
import TrackUserURL from "../../Helpers/Components/TrackUserURL";
import ViewContactsUI from "./ViewContactsUI";

/**
 * @Component
 * `ViewContacts` component provides the UI and functionality for viewing the contacts.
 */
const ViewContacts = () => {
    return (
        localStorage.length === 1
            ? <ViewContactsUI />
            : <TrackUserURL />
    );
}

export default ViewContacts;
