import { BASE_URL } from "../../../../../Constants/BackEndServerURL";
import { HTTPStatusErrorHelper } from "../../../../Database Service Components/Helpers/HTTPStatusErrorHelper";
import { toast } from "react-toastify";

import axios from "axios";

import * as ToastSuccessMessages from "../../../../../Constants/Toast Messages/ToastSuccessMessages";

/**
 * @component
 * `ForgotPasswordUpdatePasswordDBService` provides the functionality for verifying new passwords by using the `axios`.
 * @param {navigate} navigate
 * Navigate to the destination where we want to go after successfully verifying new passwords.
 * @param {forgotPasswordUpdatePassword} forgotPasswordUpdatePassword
 * `forgotPasswordUpdatePassword` contains the required password fields.
 */
const ForgotPasswordUpdatePasswordDBService = (navigate, forgotPasswordUpdatePassword) => {

    return (
        axios.post(`${BASE_URL}/forgot/password/update/password`, forgotPasswordUpdatePassword).then(
            (response) => {
                // Successfully updated the user's password
                toast.success(ToastSuccessMessages.TOAST_SUCCESS_FOR_SUCCESSFUL_PASSWORD_CHANGE);

                // Navigate to login page
                navigate('/login');
            },
            (error) => {
                // Show error while verifying the updated password of the user
                HTTPStatusErrorHelper(error.response.status);
            }
        )
    );
}

export default ForgotPasswordUpdatePasswordDBService;
