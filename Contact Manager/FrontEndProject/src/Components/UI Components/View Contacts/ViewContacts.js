import { useComponentTitle } from "../../Helpers/Hooks/useComponentTitle";

import React from "react";
import TrackURLForNonLoggedInUser from "../../Helpers/Components/TrackURLForNonLoggedInUser";
import ViewContactsUI from "./UI/ViewContactsUI";

import * as ComponentsTitle from "../../../Constants/ComponentsTitle";

/**
 * @Component
 * `ViewContacts` component provides the UI and functionality for viewing the contacts.
 */
const ViewContacts = () => {

    useComponentTitle(ComponentsTitle.COMPONENT_TITLE_FOR_VIEW_CONTACT);

    return (
        localStorage.length === 1
            ? <ViewContactsUI />
            : <TrackURLForNonLoggedInUser />
    );
}

export default ViewContacts;
