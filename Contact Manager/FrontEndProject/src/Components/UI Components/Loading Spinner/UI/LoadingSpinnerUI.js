import { Spinner } from "reactstrap";

import BasAppCss from "../../../../CSS/BaseApp.module.css";
import LoadingSpinnerCss from "../CSS/LoadingSpinner.module.css";
import React from "react";

/**
 * @Component
 * `LoadingSpinnerUI` component provides the UI for showing Loading animation while fetching information from the API's.
 */
const LoadingSpinnerUI = (props) => {

    return (
        <div className={"d-flex align-items-center justify-content-center " + (props.sideBarForProfileUI ? BasAppCss.ContainerWindowForSideBarOn : BasAppCss.ContainerWindowForSideBarOff)}>
            <div className={(LoadingSpinnerCss.LoadingSpinnerFontColor)}>
                <div style={{ display: 'block', width: 700, padding: 30 }}>
                    <Spinner style={{ width: '3rem', height: '3rem' }} children={false} />
                </div>
            </div>
        </div>
    );
}

export default LoadingSpinnerUI;
