import { useEffect, useRef } from 'react';

/**
 * @Hook
 * `useUserAuthenticationFormAction` custom hook is used in-order to skip initial twice execution of useEffect and do some operation for user on the database.
 * @param {authToken} authToken
 * This is the `authToken` passed to the `operationForUserOnDatabase` function.
 * @param {operationForUserOnDatabase} operationForUserOnDatabase
 * This function will be executed if `isSubmit` is true and there are no `userErrors`.
 */
export const useUserAuthenticationFormAction = (authToken, operationForUserOnDatabase) => {

    const isInitialRender = useRef(true);

    useEffect(() => {
        // Skip initial execution of useEffect
        if (isInitialRender.current) {
            // Set isInitialRender.current to false so subsequent changes of dependency array will make useEffect to execute
            isInitialRender.current = false;
            return;
        }

        operationForUserOnDatabase(authToken);
    }, []);

}
