import { BASE_URL } from "../../Constants/BackEndServerURL";
import { HTTPStatusErrorHelper } from "./Helpers/HTTPStatusErrorHelper";

import axios from "axios";

/**
 * @component
 * `AuthenticateUser` provides the functionality to authenticate the user by using the `axios`.
 * @param {username} username
 * Username to be authenticated
 * @param {password} password
 * Password for above username to be authenticated
 */
export const AuthenticateUser = (navigate, username, password) => {
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
                }

                return response.data;
            },
            (error) => {
                // Show error while authenticating the user
                HTTPStatusErrorHelper(error.response.status);
            }
        )
    );
}
