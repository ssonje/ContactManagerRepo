import { useEffect, useRef } from 'react';

/**
 * @Hook
 * `useViewSingleContact` custom hook is used in-order to skip initial twice execution using useEffect 
 * and fetch contacts for the user.
 * @param {fetchContactDetails} fetchContactDetails
 * Execute the viewContacts function in-order to fetch the contacts.
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
