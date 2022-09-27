import { useComponentTitle } from "../../Helpers/Hooks/useComponentTitle";

import React from "react";
import SettingsUI from "./UI/SettingsUI";
import TrackURLForNonLoggedInUser from "../../Helpers/Components/TrackURLForNonLoggedInUser";

import * as ComponentsTitle from "../../../Constants/ComponentsTitle";

/**
 * @Component
 * `Settings` component provides the UI for Settings Section in Contact Manager Appication.
 */
const Settings = () => {

    useComponentTitle(ComponentsTitle.COMPONENT_TITLE_FOR_SETTINGS);

    return (
        localStorage.length === 1
            ? <SettingsUI />
            : <TrackURLForNonLoggedInUser />
    );
}

export default Settings;
