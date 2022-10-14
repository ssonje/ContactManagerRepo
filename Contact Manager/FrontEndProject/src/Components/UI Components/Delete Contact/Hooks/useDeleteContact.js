import { useEffect, useRef } from 'react';

/**
 * @Hook
 * `useDeleteContact` custom hook is used in-order to skip initial twice execution using useEffect 
 * and delete the required contact.
 * @param {deleteContact} deleteContact
 * Execute the deleteContact function in-order to delete the required contact.
 */
export const useDeleteContact = (deleteContact) => {

    const isInitialRender = useRef(true);

    useEffect(() => {
        // Skip initial execution of useEffect
        if (isInitialRender.current) {
            // Set isInitialRender.current to false so subsequent changes of dependency array will make useEffect to execute
            isInitialRender.current = false;
            return;
        }

        deleteContact();
    }, []);

}
