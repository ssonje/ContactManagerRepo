import { BASE_URL } from "../../../../Constants/BackEndServerURL";
import { HTTPStatusErrorHelper } from "../../../Database Service Components/Helpers/HTTPStatusErrorHelper";
import { toast } from "react-toastify";

import axios from "axios";

/**
 * @component
 * `FetchUserInformation` provides the functionality to fetch the user information by using the `axios`.
 */
export const FetchUserInformation = (setUser) => {

    const authToken = JSON.parse(localStorage.getItem(localStorage.key(0)));

    return (
        axios.get(`${BASE_URL}/user/profile`, {
            headers: {
                Authorization: 'Bearer ' + authToken
            }
        }).then(
            (response) => {
                // Successfully authenticated user
                toast.success("User information fetched successfully!");
                setUser(response.data);
            },
            (error) => {
                // Show error while fetching data of user
                HTTPStatusErrorHelper(error.response.status);
            }
        )
    );
}
