import * as ForgotPasswordOTPAuthFormValidationConstants from "../Constants/ForgotPasswordOTPAuthFormValidationConstants";

/**
 * @helper @Component
 * `ForgotPasswordOTPAuthenticationFormValidation` component provides functionality to validate 
 * the Forgot Password - OTP Authentication Form.
 * @param {forgotPasswordOTP} forgotPasswordOTP
 * forgotPasswordOTP contains the OTP
 */
export const ForgotPasswordOTPAuthenticationFormValidation = (forgotPasswordOTP) => {

    const errors = {};

    /* Forgot Password - OTP Validation */

    if (!forgotPasswordOTP.otp) {
        errors.otp = ForgotPasswordOTPAuthFormValidationConstants.FORGOT_PASSWORD_OTP_AUTH_EMPTY_VALIDATION;
    }

    if (forgotPasswordOTP.otp && !forgotPasswordOTP.otp.length === 6) {
        errors.otp = ForgotPasswordOTPAuthFormValidationConstants.FORGOT_PASSWORD_OTP_AUTH_LENGTH_VALIDATION;
    }

    return errors;
}
