import axios from "axios";
import { BASE_URL } from "../../Constants/BackEndServerURL";
import { toast } from "react-toastify";

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
                // Error while authenticating the user
                switch (error.response.status) {
                    case 400:
                        toast.error("Bad Request - HTTP status - 400");
                        break;

                    case 401:
                        toast.error("Username and Password didn't match - HTTP status - 401");
                        break;

                    case 403:
                        toast.error("You do not have access rights - HTTP status - 403");
                        break;

                    case 404:
                        toast.error("Page not found - HTTP status - 404");
                        break;

                    default:
                        toast.error("Something went wrong. Please contact test@gmail.com.");
                        break;
                }
            }
        )
    );
}
