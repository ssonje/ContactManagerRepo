import {
    NAME_EMPTY_VALIDATION,
    NAME_SIZE_VALIDATION,
    EMAIL_EMPTY_VALIDATION,
    EMAIL_REGEX_VALIDATION,
    ENTERED_PASSWORD_EMPTY_VALIDATION,
    ENTERED_PASSWORD_LENGTH_VALIDATION,
    CONFIRMED_PASSWORD_EMPTY_VALIDATION,
    CONFIRMED_PASSWORD_LENGTH_VALIDATION,
    ABOUT_EMPTY_VALIDATION,
    CHECK_ENTERED_AND_CONFIMED_PASSWORD_VALIDATIONS
} from "../../../Constants/SignUp/SignUpFormValidationConstants";

/**
 * @Component
 * `SignUpFormValidation` component provides functionality to validate the form.
 */
export const SignUpFormValidation = (user, confirmPassword) => {

    const errors = {};

    /* User Name Validation */

    if (!user.name) {
        errors.name = NAME_EMPTY_VALIDATION;
    }

    if (user.name && (user.name.length < 2 || user.name.length > 100)) {
        errors.name = NAME_SIZE_VALIDATION;
    }

    /* User Email Validation */

    if (!user.email) {
        errors.email = EMAIL_EMPTY_VALIDATION;
    }

    var emailValidationRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (user.email && !user.email.match(emailValidationRegex)) {
        errors.email = EMAIL_REGEX_VALIDATION;
    }

    /* User Password Validation */

    if (!user.password) {
        errors.password = ENTERED_PASSWORD_EMPTY_VALIDATION;
    }

    if (user.password && (user.password.length < 6 || user.password.length > 20)) {
        errors.password = ENTERED_PASSWORD_LENGTH_VALIDATION;
    }

    /* User Confirmed Password Validation */

    if (!confirmPassword) {
        errors.confirmPassword = CONFIRMED_PASSWORD_EMPTY_VALIDATION;
    }

    if (confirmPassword && (confirmPassword.length < 6 || confirmPassword.length > 20)) {
        errors.confirmPassword = CONFIRMED_PASSWORD_LENGTH_VALIDATION;
    }

    /* Entered and Confirmed Password Validation */

    if (user.password && confirmPassword && user.password !== confirmPassword) {
        if (errors.password) {
            errors.password = errors.password + " " + CHECK_ENTERED_AND_CONFIMED_PASSWORD_VALIDATIONS;
        } else if (errors.confirmPassword) {
            errors.confirmPassword = errors.confirmPassword + " " + CHECK_ENTERED_AND_CONFIMED_PASSWORD_VALIDATIONS;
        } else {
            errors.password = CHECK_ENTERED_AND_CONFIMED_PASSWORD_VALIDATIONS;
            errors.confirmPassword = CHECK_ENTERED_AND_CONFIMED_PASSWORD_VALIDATIONS;
        }
    }

    /* User Confirmed Password Validation */

    if (user.about && user.about.length > 500) {
        errors.about = ABOUT_EMPTY_VALIDATION;
    }

    return errors;
}
