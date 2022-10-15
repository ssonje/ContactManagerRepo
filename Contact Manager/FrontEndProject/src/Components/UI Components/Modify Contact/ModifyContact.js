import { useComponentTitle } from "../../Helpers/Hooks/useComponentTitle";

import ModifyContactUI from "./UI/ModifyContactUI";
import React from "react";
import TrackURLForNonLoggedInUser from "../../Helpers/Components/TrackURLForNonLoggedInUser";

import * as ComponentsTitle from "../../../Constants/ComponentsTitle";
import { useParams } from "react-router-dom";

/**
 * @Component
 * `ModifyContact` component provides the UI and functionality for Modifying the contact.
 */
const ModifyContact = () => {

    const {id} = useParams();

    useComponentTitle(ComponentsTitle.COMPONENT_TITLE_FOR_MODIFY_CONTACT);

    return (
        localStorage.length === 1
            ? <ModifyContactUI id={id}/>
            : <TrackURLForNonLoggedInUser />
    );
}

export default ModifyContact;
