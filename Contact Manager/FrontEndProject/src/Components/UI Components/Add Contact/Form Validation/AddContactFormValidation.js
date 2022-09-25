import * as AddContactFormValidationConstants from "../Constants/AddContactFormValidationConstants";

/**
 * @helper @Component
 * `AddContactFormValidation` component provides functionality to validate the Add Contact form.
 */
export const AddContactFormValidation = (contact) => {

    const errors = {};

    /* Contact Email Validation */

    if (!contact.email) {
        errors.email = AddContactFormValidationConstants.ADD_CONTACT_EMAIL_EMPTY_VALIDATION;
    }

    var emailValidationRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (contact.email && !contact.email.match(emailValidationRegex)) {
        errors.email = AddContactFormValidationConstants.ADD_CONTACT_EMAIL_REGEX_VALIDATION;
    }

    /* Contact Name Validation */

    if (!contact.name) {
        errors.name = AddContactFormValidationConstants.ADD_CONTACT_NAME_EMPTY_VALIDATION;
    }

    if (contact.name && (contact.name.length < 2 || contact.name.length > 100)) {
        errors.name = AddContactFormValidationConstants.ADD_CONTACT_NAME_LENGTH_VALIDATION;
    }

    /* Contact Name Validation */

    if (contact.description && contact.description.length > 15000) {
        errors.description = AddContactFormValidationConstants.ADD_CONTACT_DESCRIPTION_LENGTH_VALIDATION;
    }

    return errors;
}
