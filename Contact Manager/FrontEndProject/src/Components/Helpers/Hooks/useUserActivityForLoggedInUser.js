import { useEffect, useRef } from 'react';

/**
 * @Hook
 * `useUserActivityForLoggedInUser` custom hook is used in-order to skip initial twice execution using useEffect
 * and navigate to the logout page if user not logged in and tried to access the secure URL's.
 * @param {navigate} navigate
 * Navigate to the destination location.
 */
export const useUserActivityForLoggedInUser = (navigate) => {

    const isInitialRender = useRef(true);

    useEffect(() => {
        // Skip initial execution of useEffect
        if (isInitialRender.current) {
            // Set isInitialRender.current to false so subsequent changes of dependency array will make useEffect to execute
            isInitialRender.current = false;
            return;
        }

        navigate("/logout");
    }, []);

}
