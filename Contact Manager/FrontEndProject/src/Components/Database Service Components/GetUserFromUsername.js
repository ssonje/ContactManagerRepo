import { BASE_URL } from "../../Constants/BackEndServerURL";
import { HTTPStatusErrorHelper } from "./Helpers/HTTPStatusErrorHelper";
import axios from "axios";
import * as AuthenticationToken from "../../Constants/AuthenticationToken";

/**
 * @component
 * `GetUserFromUsername` provides the functionality to get the user information by using the `axios`.
 */
export const GetUserFromUsername = (setUser) => {

    const authToken = AuthenticationToken.AUTH_TOKEN;

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
