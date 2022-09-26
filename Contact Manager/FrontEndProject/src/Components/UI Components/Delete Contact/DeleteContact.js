import DeleteContactUI from "./UI/DeleteContactUI";
import React from "react";
import TrackURLForNonLoggedInUser from "../../Helpers/Components/TrackURLForNonLoggedInUser";

/**
 * @Component
 * `DeleteContact` component provides the UI and functionality for Deleting the contact.
 */
const DeleteContact = () => {
    return (
        localStorage.length === 1
            ? <DeleteContactUI />
            : <TrackURLForNonLoggedInUser />
    );
}

export default DeleteContact;
