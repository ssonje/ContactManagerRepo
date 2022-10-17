import React from "react";
import SearchContactUI from "./UI/SearchContactUI";

/**
 * @Component
 * `SearchContact` component provides the UI and functionality for searching specific contact.
 */
const SearchContact = (props) => {

    return (
        <SearchContactUI setSearchContactQuery={props.setSearchContactQuery}/>
    );
}

export default SearchContact;
