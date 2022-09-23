import DeleteContactUI from "./DeleteContactUI";
import React from "react";
import TrackUserURL from "../../Helpers/Components/TrackUserURL";

/**
 * @Component
 * `DeleteContact` component provides the UI and functionality for Deleting the contact.
 */
const DeleteContact = () => {
    return (
        localStorage.length === 1
            ? <DeleteContactUI />
            : <TrackUserURL />
    );
}

export default DeleteContact;
