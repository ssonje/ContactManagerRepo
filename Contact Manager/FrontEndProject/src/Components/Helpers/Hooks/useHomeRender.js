import { useEffect, useState } from 'react';

/**
 * @Hook
 * `useHomeRender` custom hook is used in-order to skip initial twice execution of useEffect 
 * and refresh the Home wrt to the localstorage.
 * @param {localStorage} localStorage
 * Refresh the Home page wrt to the localStorage length.
 */
export const useHomeRender = (localStorage) => {

    const [isFirstLoad, setIsFirstLoad] = useState(true);

    useEffect(() => {
        // Skip initial execution of useEffect
        if (!isFirstLoad) {
            window.location.reload();
        } else {
            // Set isFirstLoad to false so subsequent changes of dependency array will make useEffect to execute
            setIsFirstLoad(false);
        }
    }, [localStorage]);
}
