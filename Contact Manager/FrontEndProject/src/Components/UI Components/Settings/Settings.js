import React from "react";
import SettingsUI from "./UI/SettingsUI";
import TrackURLForNonLoggedInUser from "../../Helpers/Components/TrackURLForNonLoggedInUser";

/**
 * @Component
 * `Settings` component provides the UI for Settings Section in Contact Manager Appication.
 */
const Settings = () => {
    return (
        localStorage.length === 1
            ? <SettingsUI />
            : <TrackURLForNonLoggedInUser />
    );
}

export default Settings;
