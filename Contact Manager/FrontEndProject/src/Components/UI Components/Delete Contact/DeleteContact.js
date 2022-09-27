import { useComponentTitle } from "../../Helpers/Hooks/useComponentTitle";

import DeleteContactUI from "./UI/DeleteContactUI";
import React from "react";
import TrackURLForNonLoggedInUser from "../../Helpers/Components/TrackURLForNonLoggedInUser";

import * as ComponentsTitle from "../../../Constants/ComponentsTitle";

/**
 * @Component
 * `DeleteContact` component provides the UI and functionality for Deleting the contact.
 */
const DeleteContact = () => {

    useComponentTitle(ComponentsTitle.COMPONENT_TITLE_FOR_DELETE_CONTACT);

    return (
        localStorage.length === 1
            ? <DeleteContactUI />
            : <TrackURLForNonLoggedInUser />
    );
}

export default DeleteContact;
