import { useEffect, useRef } from 'react';

/**
 * @Hook
 * `useViewSingleContact` custom hook is used in-order to skip initial twice execution using useEffect 
 * and fetch contact details.
 * @param {fetchContactDetails} fetchContactDetails
 * Execute the fetchContactDetails function in-order to fetch the contact details.
 */
export const useViewSingleContact = (fetchContactDetails) => {

    const isInitialRender = useRef(true);

    useEffect(() => {
        // Skip initial execution of useEffect
        if (isInitialRender.current) {
            // Set isInitialRender.current to false so subsequent changes of dependency array will make useEffect to execute
            isInitialRender.current = false;
            return;
        }

        fetchContactDetails();
    }, []);

}
