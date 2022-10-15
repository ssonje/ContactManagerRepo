import { useComponentTitle } from "../../Helpers/Hooks/useComponentTitle";

import ModifyContactUI from "./UI/ModifyContactUI";
import React from "react";
import TrackURLForNonLoggedInUser from "../../Helpers/Components/TrackURLForNonLoggedInUser";

import * as ComponentsTitle from "../../../Constants/ComponentsTitle";

/**
 * @Component
 * `ModifyContact` component provides the UI and functionality for Modifying the contact.
 */
const ModifyContact = () => {

    useComponentTitle(ComponentsTitle.COMPONENT_TITLE_FOR_MODIFY_CONTACT);

    return (
        localStorage.length === 1
            ? <ModifyContactUI />
            : <TrackURLForNonLoggedInUser />
    );
}

export default ModifyContact;
