import * as ForgotPasswordEmailFormValidationConstants from "../Constants/ForgotPasswordEmailFormValidationConstants";

/**
 * @helper @Component
 * `ForgotPasswordFormValidation` component provides functionality to validate the Forgot Password Form.
 */
export const ForgotPasswordFormValidation = (forgotPasswordEmail) => {

    const errors = {};

    /* Forgot Password - Email Validation */

    if (!forgotPasswordEmail.email) {
        errors.email = ForgotPasswordEmailFormValidationConstants.FORGOT_PASSWORD_EMAIL_EMPTY_VALIDATION;
    }

    var emailValidationRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (forgotPasswordEmail.email && !forgotPasswordEmail.email.match(emailValidationRegex)) {
        errors.email = ForgotPasswordEmailFormValidationConstants.FORGOT_PASSWORD_EMAIL_REGEX_VALIDATION;
    }

    return errors;
}
