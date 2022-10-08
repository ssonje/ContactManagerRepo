import { Link } from "react-router-dom";

import ViewContactsCss from "../CSS/ViewContacts.module.css";

/**
 * @Component
 * `NoContactsAvailableUI` component provides the table formatted UI for viewing the contacts.
 */
const NoContactsAvailableUI = () => {

    return (
        <div className={(ViewContactsCss.ViewContactsText)}>
            <h5>NO CONTACTS AVAILABLE</h5>
            <Link className="btn btn-outline-light mt-3" to="/user/add/contact">Click here to add new contact</Link>
        </div>
    );
}

export default NoContactsAvailableUI;
