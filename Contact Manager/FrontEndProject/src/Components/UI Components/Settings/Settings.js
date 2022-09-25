import React from "react";
import SettingsUI from "./UI/SettingsUI";
import TrackUserURL from "../../Helpers/Components/TrackUserURL";

/**
 * @Component
 * `Settings` component provides the UI for Settings Section in Contact Manager Appication.
 */
const Settings = () => {
    return (
        localStorage.length === 1
            ? <SettingsUI />
            : <TrackUserURL />
    );
}

export default Settings;
