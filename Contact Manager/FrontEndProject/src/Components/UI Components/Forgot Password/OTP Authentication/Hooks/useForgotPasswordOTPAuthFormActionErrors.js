import { useEffect, useRef } from 'react';

/**
 * @Hook
 * `useForgotPasswordOTPAuthFormActionErrors` custom hook is used in-order to skip initial twice execution using useEffect 
 * and do some operation for user on the database.
 * @param {userForgotPasswordOTPAuthFormErrors} userForgotPasswordOTPAuthFormErrors
 * This is array of strings represents all the forgot password - OTP authentication form.
 * @param {forgotPasswordOTP} forgotPasswordOTP
 * This is the `forgotPasswordOTP` passed to the `verifyOTP` function.
 * @param {isSubmit} isSubmit
 * This boolean is initially false, and becomes true when we submit the form.
 * @param {verifyOTP} verifyOTP
 * This function will be executed if `isSubmit` is true and there are no `userForgotPasswordOTPAuthFormErrors`.
 */
export const useForgotPasswordOTPAuthFormActionErrors = (userForgotPasswordOTPAuthFormErrors, forgotPasswordOTP, isSubmit, verifyOTP) => {

    const isInitialRender = useRef(true);

    useEffect(() => {
        // Skip initial execution of useEffect
        if (isInitialRender.current) {
            // Set isInitialRender.current to false so subsequent changes of dependency array will make useEffect to execute
            isInitialRender.current = false;
            return;
        }

        if (Object.keys(userForgotPasswordOTPAuthFormErrors).length === 0 && isSubmit) {
            verifyOTP(forgotPasswordOTP);
        }
    }, [userForgotPasswordOTPAuthFormErrors]);

}
