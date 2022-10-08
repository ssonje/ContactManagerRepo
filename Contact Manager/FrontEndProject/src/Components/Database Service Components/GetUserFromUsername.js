import { BASE_URL } from "../../Constants/BackEndServerURL";
import { HTTPStatusErrorHelper } from "./Helpers/HTTPStatusErrorHelper";

import axios from "axios";

/**
 * @component
 * `GetUserFromUsername` provides the functionality to get the user information by using the `axios`.
 */
export const GetUserFromUsername = (setUser) => {

    const authToken = JSON.parse(localStorage.getItem(localStorage.key(0)));

    return (
        axios.get(`${BASE_URL}/user/profile`, {
            headers: {
                Authorization: 'Bearer ' + authToken
            }
        }).then(
            (response) => {
                // Successfully authenticated user
                setUser(response.data);
            },
            (error) => {
                // Show error while getting data from the authentication token
                HTTPStatusErrorHelper(error.response.status);
            }
        )
    );
}
