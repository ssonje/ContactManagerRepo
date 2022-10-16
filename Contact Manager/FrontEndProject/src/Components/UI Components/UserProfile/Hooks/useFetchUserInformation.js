import { useEffect, useRef } from 'react';

/**
 * @Hook
 * `useFetchUserInformation` custom hook is used in-order to skip initial twice execution using useEffect 
 * and fetch user information.
 * @param {fetchUser} fetchUser
 * Execute the fetchUser function in-order to fetch the user information.
 */
export const useFetchUserInformation = (fetchUser) => {

    const isInitialRender = useRef(true);

    useEffect(() => {
        // Skip initial execution of useEffect
        if (isInitialRender.current) {
            // Set isInitialRender.current to false so subsequent changes of dependency array will make useEffect to execute
            isInitialRender.current = false;
            return;
        }

        fetchUser();
    }, []);

}
