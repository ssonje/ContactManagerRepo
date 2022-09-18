import { BASE_URL } from "../../Constants/BackEndServerURL";
import { HTTPStatusErrorHelper } from "./Helpers/HTTPStatusErrorHelper";
import axios from "axios";

/**
 * @component
 * `GetUserFromAuthenticationToken` provides the functionality to get the user information 
 * from the authentication token by using the `axios`.
 * @param {authToken} authToken
 * token from which we're getting user information
 */
export const GetUserFromAuthenticationToken = (authToken) => {
    return (
        axios.get(`${BASE_URL}/auth/userinfo`, {
            headers: {
                Authorization: 'Bearer ' + authToken
            }
        }).then(
            (response) => {
                // Successfully authenticated user
                const dataFetch = {
                    username: response.data.username,
                    authorities: response.data.authorities
                };

                return dataFetch;
            },
            (error) => {
                // Show error while getting data from the authentication token
                HTTPStatusErrorHelper(error.response.status);
            }
        )
    );
}
