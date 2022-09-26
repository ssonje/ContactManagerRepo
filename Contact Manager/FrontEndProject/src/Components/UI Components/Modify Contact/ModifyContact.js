import ModifyContactUI from "./UI/ModifyContactUI";
import React from "react";
import TrackURLForNonLoggedInUser from "../../Helpers/Components/TrackURLForNonLoggedInUser";

/**
 * @Component
 * `ModifyContact` component provides the UI and functionality for Modifying the contact.
 */
const ModifyContact = () => {
    return (
        localStorage.length === 1
            ? <ModifyContactUI />
            : <TrackURLForNonLoggedInUser />
    );
}

export default ModifyContact;
