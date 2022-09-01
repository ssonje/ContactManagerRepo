import { useEffect, useRef } from 'react';

/**
 * @Hook
 * `useUserFormErrors` custom hook is used in-order to skip initial twice execution of useEffect and do some operation for user on the database.
 * @param {userSignupErrors} userSignupErrors
 * This is array of strings represents all the user errors.
 * @param {user} user
 * This is the `user` passed to the `operationForUserOnDatabase` function.
 * @param {isSubmit} isSubmit
 * This boolean is initially false, and becomes true when we submit the form.
 * @param {operationForUserOnDatabase} operationForUserOnDatabase
 * This function will be executed if `isSubmit` is true and there are no `userErrors`.
 */
export const useUserFormErrors = (userSignupErrors, user, isSubmit, operationForUserOnDatabase) => {

    const isInitialRender = useRef(true);

    useEffect(() => {
        // Skip initial execution of useEffect
        if (isInitialRender.current) {
            // Set isInitialRender.current to false so subsequent changes of dependency array will make useEffect to execute
            isInitialRender.current = false;
            return;
        }

        if (Object.keys(userSignupErrors).length === 0 && isSubmit) {
            operationForUserOnDatabase(user);
        }
    }, [userSignupErrors]);

}
