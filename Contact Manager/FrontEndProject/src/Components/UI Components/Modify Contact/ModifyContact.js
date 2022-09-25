import ModifyContactUI from "./UI/ModifyContactUI";
import React from "react";
import TrackUserURL from "../../Helpers/Components/TrackUserURL";

/**
 * @Component
 * `ModifyContact` component provides the UI and functionality for Modifying the contact.
 */
const ModifyContact = () => {
    return (
        localStorage.length === 1
            ? <ModifyContactUI />
            : <TrackUserURL />
    );
}

export default ModifyContact;
