import { BASE_URL } from "../../../../Constants/BackEndServerURL";
import { HTTPStatusErrorHelper } from "../../../Helpers/Database Service Components/HTTPStatusErrorHelper";
import { toast } from "react-toastify";

import axios from "axios";

import * as ToastSuccessMessages from "../../../../Constants/Toast Messages/ToastSuccessMessages";

/**
 * @component
 * `SettingsDBService` provides the functionality for changing user's password by using the `axios`.
 * @param {navigate} navigate
 * Navigate to the destination where we want to go after successfully changing password.
 * @param {userPassword} userPassword
 * This userPassword will used to update the user's password.
 */
const SettingsDBService = (navigate, userPassword) => {

    const authToken = JSON.parse(localStorage.getItem(localStorage.key(0)));

    return (
        axios.post(`${BASE_URL}/user/settings/password`, userPassword, {
            headers: {
                Authorization: 'Bearer ' + authToken
            }
        }).then(
            (response) => {
                // Successfully changed the password
                toast.success(ToastSuccessMessages.TOAST_SUCCESS_FOR_SUCCESSFUL_PASSWORD_CHANGE);

                // Navigate to the user's profile component after user password has been successfully changed
                navigate('/user/profile');
            },
            (error) => {
                // Show error while changing the user's password
                HTTPStatusErrorHelper(error.response.status);
            }
        )
    );
}

export default SettingsDBService;
