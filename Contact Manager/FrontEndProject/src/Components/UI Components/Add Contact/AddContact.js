import AddContactUI from "./UI/AddContactUI";
import React from "react";
import TrackUserURL from "../../Helpers/Components/TrackUserURL";

/**
 * @Component
 * `AddContact` component provides the UI and functionality for Adding the contact.
 */
const AddContact = () => {
    return (
        localStorage.length === 1
            ? <AddContactUI />
            : <TrackUserURL />
    );
}

export default AddContact;
