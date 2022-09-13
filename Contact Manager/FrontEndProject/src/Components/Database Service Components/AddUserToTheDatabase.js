import axios from "axios";
import { BASE_URL } from "../../Constants/BackEndServerURL";
import { toast } from "react-toastify";

/**
 * @function
 * `AddUserToTheDatabase` provides the functionality to post data into the database by using the `axios`.
 * @param {navigate} navigate
 * Navigate to the destination where we want to go after successfully adding user to the database.
 * @param {user} user
 * This user will be added into the database.
 */
export const AddUserToTheDatabase = (navigate, user) => {
    return (
        axios.post(`${BASE_URL}/signup`, user).then(
            (response) => {
                // Successfully post the data to the database
                toast.success("Signup successful.!!!");

                // Navigate to the login page after user has been successfully added to the system
                navigate('/login');
            },
            (error) => {
                // Error while posting the data
                toast.error("Something went wrong!!!");
            }
        )
    );
}
