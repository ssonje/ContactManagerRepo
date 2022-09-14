import axios from "axios";
import { BASE_URL } from "../../Constants/BackEndServerURL";
import { toast } from "react-toastify";

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
                // Error while posting the data
                toast.error("Something went wrong while signing up!!!");
            }
        )
    );
}
