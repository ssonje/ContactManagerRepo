import {
    SIGNUP_NAME_EMPTY_VALIDATION,
    SIGNUP_NAME_SIZE_VALIDATION,
    SIGNUP_EMAIL_EMPTY_VALIDATION,
    SIGNUP_EMAIL_REGEX_VALIDATION,
    SIGNUP_ENTERED_PASSWORD_EMPTY_VALIDATION,
    SIGNUP_ENTERED_PASSWORD_LENGTH_VALIDATION,
    SIGNUP_CONFIRMED_PASSWORD_EMPTY_VALIDATION,
    SIGNUP_CONFIRMED_PASSWORD_LENGTH_VALIDATION,
    SIGNUP_CHECK_ENTERED_AND_CONFIMED_PASSWORD_VALIDATIONS,
    SIGNUP_ABOUT_EMPTY_VALIDATION
} from "../../../Constants/SignUp/SignUpFormValidationConstants"


/**
 * @helper @Component
 * `SignUpFormValidation` component provides functionality to validate the form.
 */
export const SignUpFormValidation = (user, confirmPassword) => {

    const errors = {};

    /* User Name Validation */

    if (!user.name) {
        errors.name = SIGNUP_NAME_EMPTY_VALIDATION;
    }

    if (user.name && (user.name.length < 2 || user.name.length > 100)) {
        errors.name = SIGNUP_NAME_SIZE_VALIDATION;
    }

    /* User Email Validation */

    if (!user.email) {
        errors.email = SIGNUP_EMAIL_EMPTY_VALIDATION;
    }

    var emailValidationRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (user.email && !user.email.match(emailValidationRegex)) {
        errors.email = SIGNUP_EMAIL_REGEX_VALIDATION;
    }

    /* User Password Validation */

    if (!user.password) {
        errors.password = SIGNUP_ENTERED_PASSWORD_EMPTY_VALIDATION;
    }

    if (user.password && (user.password.length < 6 || user.password.length > 75)) {
        errors.password = SIGNUP_ENTERED_PASSWORD_LENGTH_VALIDATION;
    }

    /* User Confirmed Password Validation */

    if (!confirmPassword) {
        errors.confirmPassword = SIGNUP_CONFIRMED_PASSWORD_EMPTY_VALIDATION;
    }

    if (confirmPassword && (confirmPassword.length < 6 || confirmPassword.length > 75)) {
        errors.confirmPassword = SIGNUP_CONFIRMED_PASSWORD_LENGTH_VALIDATION;
    }

    /* Entered and Confirmed Password Validation */

    if (user.password && confirmPassword && user.password !== confirmPassword) {
        if (errors.password) {
            errors.password = errors.password + " " + SIGNUP_CHECK_ENTERED_AND_CONFIMED_PASSWORD_VALIDATIONS;
        } else if (errors.confirmPassword) {
            errors.confirmPassword = errors.confirmPassword + " " + SIGNUP_CHECK_ENTERED_AND_CONFIMED_PASSWORD_VALIDATIONS;
        } else {
            errors.password = SIGNUP_CHECK_ENTERED_AND_CONFIMED_PASSWORD_VALIDATIONS;
            errors.confirmPassword = SIGNUP_CHECK_ENTERED_AND_CONFIMED_PASSWORD_VALIDATIONS;
        }
    }

    /* User About Password Validation */

    if (user.about && user.about.length > 500) {
        errors.about = SIGNUP_ABOUT_EMPTY_VALIDATION;
    }

    return errors;
}
