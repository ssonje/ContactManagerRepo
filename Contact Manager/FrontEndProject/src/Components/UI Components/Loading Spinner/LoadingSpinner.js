import LoadingSpinnerUI from "./UI/LoadingSpinnerUI";
import React from "react";

/**
 * @Component
 * `LoadingSpinner` component provides the UI and Funtionality for showing Loading animation while fetching information from the API's.
 */
const LoadingSpinner = (props) => {

    return (
        <LoadingSpinnerUI sideBarForProfileUI={props.sideBarForProfileUI}/>
    );
}

export default LoadingSpinner;
