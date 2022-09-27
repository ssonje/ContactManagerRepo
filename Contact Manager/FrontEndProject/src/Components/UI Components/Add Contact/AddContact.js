import { useComponentTitle } from "../../Helpers/Hooks/useComponentTitle";

import AddContactUI from "./UI/AddContactUI";
import React from "react";
import TrackURLForNonLoggedInUser from "../../Helpers/Components/TrackURLForNonLoggedInUser";

import * as ComponentsTitle from "../../../Constants/ComponentsTitle";

/**
 * @Component
 * `AddContact` component provides the UI and functionality for Adding the contact.
 */
const AddContact = () => {

    useComponentTitle(ComponentsTitle.COMPONENT_TITLE_FOR_ADD_CONTACT);

    return (
        localStorage.length === 1
            ? <AddContactUI />
            : <TrackURLForNonLoggedInUser />
    );
}

export default AddContact;
