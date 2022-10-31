import { useEffect, useRef } from 'react';

/**
 * @Hook
 * `useForgotPasswordUpdatePasswordFormActionErrors` custom hook is used in-order to skip initial twice execution using useEffect 
 * and do some operation for user on the database.
 * @param {userForgotPasswordUpdatePasswordFormErrors} userForgotPasswordUpdatePasswordFormErrors
 * This is array of strings represents all the forgot password - update password form.
 * @param {forgotPasswordUpdatePassword} forgotPasswordUpdatePassword
 * This is the data model passed to the `verifyUpdatedPassword` function.
 * @param {isSubmit} isSubmit
 * This boolean is initially false, and becomes true when we submit the form.
 * @param {verifyUpdatedPassword} verifyUpdatedPassword
 * This function will be executed if `isSubmit` is true and there are no `userForgotPasswordUpdatePasswordFormErrors`.
 */
export const useForgotPasswordUpdatePasswordFormActionErrors = (userForgotPasswordUpdatePasswordFormErrors, forgotPasswordUpdatePassword, isSubmit, verifyUpdatedPassword) => {

    const isInitialRender = useRef(true);

    useEffect(() => {
        // Skip initial execution of useEffect
        if (isInitialRender.current) {
            // Set isInitialRender.current to false so subsequent changes of dependency array will make useEffect to execute
            isInitialRender.current = false;
            return;
        }

        if (Object.keys(userForgotPasswordUpdatePasswordFormErrors).length === 0 && isSubmit) {
            verifyUpdatedPassword(forgotPasswordUpdatePassword);
        }
    }, [userForgotPasswordUpdatePasswordFormErrors]);

}
