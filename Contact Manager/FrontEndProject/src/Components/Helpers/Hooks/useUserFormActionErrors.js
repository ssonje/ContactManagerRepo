import { useEffect, useRef } from 'react';

/**
 * @Hook
 * `useUserFormActionErrors` custom hook is used in-order to skip initial twice execution using useEffect 
 * and do some operation for user on the database.
 * @param {userFormErrors} userFormErrors
 * This is array of strings represents all the user errors.
 * @param {user} user
 * This is the `user` passed to the `operationForUserOnDatabase` function.
 * @param {isSubmit} isSubmit
 * This boolean is initially false, and becomes true when we submit the form.
 * @param {operationForUserOnDatabase} operationForUserOnDatabase
 * This function will be executed if `isSubmit` is true and there are no `userErrors`.
 */
export const useUserFormActionErrors = (userFormErrors, user, isSubmit, operationForUserOnDatabase) => {

    const isInitialRender = useRef(true);

    useEffect(() => {
        // Skip initial execution of useEffect
        if (isInitialRender.current) {
            // Set isInitialRender.current to false so subsequent changes of dependency array will make useEffect to execute
            isInitialRender.current = false;
            return;
        }

        if (Object.keys(userFormErrors).length === 0 && isSubmit) {
            operationForUserOnDatabase(user);
        }
    }, [userFormErrors]);

}
