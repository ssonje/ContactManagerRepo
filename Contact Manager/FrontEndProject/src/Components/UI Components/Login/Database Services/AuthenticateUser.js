import { BASE_URL } from "../../../../Constants/BackEndServerURL";
import { HTTPStatusErrorHelper } from "../../../Helpers/Database Service Components/HTTPStatusErrorHelper";

import axios from "axios";

/**
 * @component
 * `AuthenticateUser` provides the functionality to authenticate the user by using the `axios`.
 * @param {navigate} navigate
 * Navigate to the destination where we want to go after authenticating the user.
 * @param {setIsAPICalled} setIsAPICalled
 * This function is used to set the correct value to the `isAPICalled`.
 * @param {username} username
 * Username to be authenticated
 * @param {password} password
 * Password for above username to be authenticated
 */
const AuthenticateUser = (navigate, setIsAPICalled, username, password) => {

    // Set the `isAPICalled` to true as we've started calling the Database API
    setIsAPICalled(true);

    return (
        axios.post(`${BASE_URL}/auth/login`, {
            username,
            password
        }).then(
            (response) => {
                // Successfully authenticated user
                if (response.status === 200 && response.data.token) {
                    localStorage.setItem(username, JSON.stringify(response.data.token));

                    // TODO: Dynamically open the profile of user as per the ROLE assigned to him/her.
                    navigate("/user/profile");

                    // Set the `isAPICalled` to false as API is called successfully and we want to show the result
                    setIsAPICalled(false);
                }

                return response.data;
            },
            (error) => {
                // Show error while authenticating the user
                HTTPStatusErrorHelper(error.response.status);

                // Set the `isAPICalled` to false as API is called successfully and we want to show the result
                setIsAPICalled(false);
            }
        )
    );
}

export default AuthenticateUser;
