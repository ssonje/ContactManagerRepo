import { useEffect, useRef } from 'react';

/**
 * @hook
 * `useComponentTitle` custom hook is used in-order to skip initial twice execution of useEffect and add document title.
 * @param {pageTitle} pageTitle
 * This pageTitle is used to add the title to the document.
 */
 export const useComponentTitle = (pageTitle) => {

    const isInitialRender = useRef(true);

    useEffect(() => {
        // Skip initial execution of useEffect
        if (isInitialRender.current) {
            // Set isInitialRender.current to false so subsequent changes of dependency array will make useEffect to execute
            isInitialRender.current = false;
            return;
        }

        document.title = pageTitle;
    }, []);

}
