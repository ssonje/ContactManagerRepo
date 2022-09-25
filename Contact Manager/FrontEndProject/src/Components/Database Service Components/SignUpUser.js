import { BASE_URL } from "../../Constants/BackEndServerURL";
import { HTTPStatusErrorHelper } from "./Helpers/HTTPStatusErrorHelper";
import { toast } from "react-toastify";

import axios from "axios";

/**
 * @component
 * `SignUpUser` provides the functionality for signing up the user by using the `axios`.
 * @param {navigate} navigate
 * Navigate to the destination where we want to go after successfully signing up the user.
 * @param {user} user
 * This user will signed up into the server.
 */
export const SignUpUser = (navigate, user) => {
    return (
        axios.post(`${BASE_URL}/signup`, user).then(
            (response) => {
                // Successfully post the data to the server
                toast.success("Signup successful.!!!");

                // Navigate to the login page after user has been successfully added to the server
                navigate('/login');
            },
            (error) => {
                // Show error while signing up the user
                HTTPStatusErrorHelper(error.response.status);
            }
        )
    );
}
