import { useComponentTitle } from "../../Helpers/Hooks/useComponentTitle";
import { useParams } from "react-router-dom";

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
    const {id} = useParams();

    return (
        localStorage.length === 1
            ? <DeleteContactUI id={id}/>
            : <TrackURLForNonLoggedInUser />
    );
}

export default DeleteContact;
