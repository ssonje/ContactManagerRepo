import * as LoginFormValidationConstants from "./Constants/LoginFormValidationConstants";

/**
 * @helper @Component
 * `LoginFormValidation` component provides functionality to validate the Login form.
 */
export const LoginFormValidation = (user) => {

    const errors = {};

    /* User Email Validation */

    if (!user.email) {
        errors.email = LoginFormValidationConstants.LOGIN_EMAIL_EMPTY_VALIDATION;
    }

    var emailValidationRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (user.email && !user.email.match(emailValidationRegex)) {
        errors.email = LoginFormValidationConstants.LOGIN_EMAIL_REGEX_VALIDATION;
    }

    /* User Password Validation */

    if (!user.password) {
        errors.password = LoginFormValidationConstants.LOGIN_ENTERED_PASSWORD_EMPTY_VALIDATION;
    }

    return errors;
}
