import * as ForgotPasswordUpdatePasswordFormValidationConstants from "../Constants/ForgotPasswordUpdatePasswordFormValidationConstants";

/**
 * @helper @Component
 * `ForgotPasswordUpdatePasswordFormValidation` component provides functionality to validate 
 * the Forgot Password - OTP Authentication Form.
 * @param {forgotPasswordUpdatePassword} forgotPasswordUpdatePassword
 * `forgotPasswordUpdatePassword` contains the required password fields.
 */
export const ForgotPasswordUpdatePasswordFormValidation = (forgotPasswordUpdatePassword) => {

    const errors = {};

    /* Forgot Password - New Password Validation */

    if (!forgotPasswordUpdatePassword.newPassword) {
        errors.newPassword = ForgotPasswordUpdatePasswordFormValidationConstants.FORGOT_PASSWORD_UPDATED_NEW_PASSWORD_EMPTY_VALIDATION;
    }

    if (forgotPasswordUpdatePassword.newPassword
        && (forgotPasswordUpdatePassword.newPassword.length < 6
            || forgotPasswordUpdatePassword.newPassword.length > 75)) {
        errors.newPassword = ForgotPasswordUpdatePasswordFormValidationConstants.FORGOT_PASSWORD_UPDATED_NEW_PASSWORD_LENGTH_VALIDATION;
    }

    /* Forgot Password - Confirmed New Password Validation */

    if (!forgotPasswordUpdatePassword.confirmedNewPassword) {
        errors.confirmedNewPassword = ForgotPasswordUpdatePasswordFormValidationConstants.FORGOT_PASSWORD_UPDATED_CONFIMED_NEW_PASSWORD_EMPTY_VALIDATION;
    }

    if (forgotPasswordUpdatePassword.confirmedNewPassword
        && (forgotPasswordUpdatePassword.confirmedNewPassword.length < 6
            || forgotPasswordUpdatePassword.confirmedNewPassword.length > 75)) {
        errors.confirmedNewPassword = ForgotPasswordUpdatePasswordFormValidationConstants.FORGOT_PASSWORD_UPDATED_CONFIMED_NEW_PASSWORD_LENGTH_VALIDATION;
    }

    /* Forgot Password - New and Confirmed new Password Validation */

    if (forgotPasswordUpdatePassword.newPassword
        && forgotPasswordUpdatePassword.confirmedNewPassword
        && forgotPasswordUpdatePassword.newPassword !== forgotPasswordUpdatePassword.confirmedNewPassword) {
        if (errors.newPassword) {
            errors.newPassword = errors.newPassword + " " + ForgotPasswordUpdatePasswordFormValidationConstants.FORGOT_PASSWORD_CHECK_ENTERED_AND_CONFIMED_PASSWORD_VALIDATIONS;
        } else {
            errors.newPassword = ForgotPasswordUpdatePasswordFormValidationConstants.FORGOT_PASSWORD_CHECK_ENTERED_AND_CONFIMED_PASSWORD_VALIDATIONS;
        }

        if (errors.confirmedNewPassword) {
            errors.confirmedNewPassword = errors.confirmedNewPassword + " " + ForgotPasswordUpdatePasswordFormValidationConstants.FORGOT_PASSWORD_CHECK_ENTERED_AND_CONFIMED_PASSWORD_VALIDATIONS;
        } else {
            errors.confirmedNewPassword = ForgotPasswordUpdatePasswordFormValidationConstants.FORGOT_PASSWORD_CHECK_ENTERED_AND_CONFIMED_PASSWORD_VALIDATIONS;
        }
    }

    return errors;
}
