import { useEffect, useRef } from 'react';

/**
 * @Hook
 * `useUserLogoutFormAction` custom hook is used in-order to skip initial twice execution using useEffect
 * and navigate to the specific location wrt to the action.
 * @param {navigate} navigate
 * Navigate to the destination location.
 */
export const useUserLogoutFormAction = (navigate) => {

    const isInitialRender = useRef(true);

    useEffect(() => {
        // Skip initial execution of useEffect
        if (isInitialRender.current) {
            // Set isInitialRender.current to false so subsequent changes of dependency array will make useEffect to execute
            isInitialRender.current = false;
            return;
        }

        if (window.confirm("Are you sure you want to Logout?")) {
            // Navigate to the Home once user logout from the application.
            localStorage.clear();
            navigate("/home");
        } else {
            // Navigate to the Profile once user deny to logout from the application.
            navigate("/user/profile");
        }
    }, []);

}
