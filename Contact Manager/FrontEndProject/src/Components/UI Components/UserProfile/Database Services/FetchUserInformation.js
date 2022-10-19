import { BASE_URL } from "../../../../Constants/BackEndServerURL";
import { HTTPStatusErrorHelper } from "../../../Database Service Components/Helpers/HTTPStatusErrorHelper";
import { toast } from "react-toastify";

import axios from "axios";

import * as ToastSuccessMessages from "../../../../Constants/Toast Messages/ToastSuccessMessages";

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
                // Successfully fetched user information
                toast.success(ToastSuccessMessages.TOAST_SUCCESS_FOR_SUCCESSFULLY_FETCHING_USER_INFORMATION);
                setUser(response.data);
            },
            (error) => {
                // Show error while fetching data of user
                HTTPStatusErrorHelper(error.response.status);
            }
        )
    );
}
