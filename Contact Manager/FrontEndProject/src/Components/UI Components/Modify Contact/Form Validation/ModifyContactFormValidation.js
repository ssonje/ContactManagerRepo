import * as ModifyContactFormValidationConstants from "../Constants/ModifyContactFormValidationConstants";

/**
 * @helper @Component
 * `ModifyContactFormValidation` component provides functionality to validate the Modify Contact form.
 */
export const ModifyContactFormValidation = (contact) => {

    const errors = {};

    /* Contact Email Validation */

    if (!contact.email) {
        errors.email = ModifyContactFormValidationConstants.MODIFY_CONTACT_EMAIL_EMPTY_VALIDATION;
    }

    var emailValidationRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (contact.email && !contact.email.match(emailValidationRegex)) {
        errors.email = ModifyContactFormValidationConstants.MODIFY_CONTACT_EMAIL_REGEX_VALIDATION;
    }

    /* Contact Name Validation */

    if (!contact.name) {
        errors.name = ModifyContactFormValidationConstants.MODIFY_CONTACT_NAME_EMPTY_VALIDATION;
    }

    if (contact.name && (contact.name.length < 2 || contact.name.length > 100)) {
        errors.name = ModifyContactFormValidationConstants.MODIFY_CONTACT_NAME_LENGTH_VALIDATION;
    }

    /* Contact Mobile Number Validation */

    if (!contact.mobileNumber) {
        errors.mobileNumber = ModifyContactFormValidationConstants.MODIFY_CONTACT_MOBILE_NUMBER_EMPTY_VALIDATION;
    }

    var mobileNumberRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (contact.mobileNumber && !contact.mobileNumber.match(mobileNumberRegex)) {
        errors.mobileNumber = ModifyContactFormValidationConstants.MODIFY_CONTACT_MOBILE_NUMBER_REGEX_VALIDATION;
    }

    /* Contact Name Validation */

    if (contact.description && contact.description.length > 15000) {
        errors.description = ModifyContactFormValidationConstants.MODIFY_CONTACT_DESCRIPTION_LENGTH_VALIDATION;
    }

    return errors;
}
