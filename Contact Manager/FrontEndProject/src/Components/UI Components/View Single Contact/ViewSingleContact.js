import { useComponentTitle } from "../../Helpers/Hooks/useComponentTitle";
import {useParams} from "react-router-dom";

import React from "react";
import TrackURLForLoggedInUser from "../../Helpers/Components/TrackURLForLoggedInUser";
import ViewSingleContactUI from "./UI/ViewSingleContactUI";

import * as ComponentsTitle from "../../../Constants/ComponentsTitle";

/**
 * @Component
 * `ViewSingleContact` component provides the UI and functionality for Viewing single contact in Contact Manager Appication.
 */
const ViewSingleContact = () => {

    const {id} = useParams();

    useComponentTitle(ComponentsTitle.COMPONENT_TITLE_FOR_VIEW_CONTACT);

    return (
        localStorage.length === 1
            ? <ViewSingleContactUI id={id}/>
            : <TrackURLForLoggedInUser />
    );
}

export default ViewSingleContact;
