import { useEffect, useRef } from 'react';

/**
 * @Hook
 * `useChangeUserPassword` custom hook is used in-order to skip initial twice execution using useEffect 
 * and change the user password.
 * @param {changePasswordOfUser} changePasswordOfUser
 * Execute the changePasswordOfUser function in-order to change the user's password.
 * @param {userPassword} userPassword
 * Model which contains the required fields.
 * @param {userSettingsErrors} userSettingsErrors
 * This is array of strings represents all the user errors.
 * @param {isSubmit} isSubmit
 * This boolean is initially false, and becomes true when we submit the form.
 */
export const useChangeUserPassword = (changePasswordOfUser, userPassword, userSettingsErrors, isSubmit) => {

    const isInitialRender = useRef(true);

    useEffect(() => {
        // Skip initial execution of useEffect
        if (isInitialRender.current) {
            // Set isInitialRender.current to false so subsequent changes of dependency array will make useEffect to execute
            isInitialRender.current = false;
            return;
        }

        if (Object.keys(userSettingsErrors).length === 0 && isSubmit) {
            changePasswordOfUser(userPassword);
        }
    }, [userSettingsErrors]);

}
