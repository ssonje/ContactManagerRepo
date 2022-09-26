import AddContactUI from "./UI/AddContactUI";
import React from "react";
import TrackURLForNonLoggedInUser from "../../Helpers/Components/TrackURLForNonLoggedInUser";

/**
 * @Component
 * `AddContact` component provides the UI and functionality for Adding the contact.
 */
const AddContact = () => {
    return (
        localStorage.length === 1
            ? <AddContactUI />
            : <TrackURLForNonLoggedInUser />
    );
}

export default AddContact;
