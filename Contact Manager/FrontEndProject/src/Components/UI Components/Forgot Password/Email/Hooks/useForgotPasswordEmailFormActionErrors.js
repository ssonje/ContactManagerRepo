import { useEffect, useRef } from 'react';

/**
 * @Hook
 * `useForgotPasswordEmailFormActionErrors` custom hook is used in-order to skip initial twice execution using useEffect 
 * and do some operation for user on the database.
 * @param {userForgotPasswordFormErrors} userForgotPasswordFormErrors
 * This is array of strings represents all the forgot password errors.
 * @param {forgotPasswordEmail} forgotPasswordEmail
 * This is the `forgotPasswordEmail` passed to the `sendOTP` function.
 * @param {isSubmit} isSubmit
 * This boolean is initially false, and becomes true when we submit the form.
 * @param {sendOTP} sendOTP
 * This function will be executed if `isSubmit` is true and there are no `userForgotPasswordFormErrors`.
 */
export const useForgotPasswordEmailFormActionErrors = (userForgotPasswordFormErrors, forgotPasswordEmail, isSubmit, sendOTP) => {

    const isInitialRender = useRef(true);

    useEffect(() => {
        // Skip initial execution of useEffect
        if (isInitialRender.current) {
            // Set isInitialRender.current to false so subsequent changes of dependency array will make useEffect to execute
            isInitialRender.current = false;
            return;
        }

        if (Object.keys(userForgotPasswordFormErrors).length === 0 && isSubmit) {
            sendOTP(forgotPasswordEmail);
        }
    }, [userForgotPasswordFormErrors]);

}
