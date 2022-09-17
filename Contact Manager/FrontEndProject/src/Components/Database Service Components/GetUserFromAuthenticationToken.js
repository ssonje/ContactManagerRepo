import axios from "axios";
import { BASE_URL } from "../../Constants/BackEndServerURL";
import { toast } from "react-toastify";

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
                // Error while authenticating the user
                // TODO: add complete http errors here
                toast.error("Something Went Wrong!");
            }
        )
    );
}
