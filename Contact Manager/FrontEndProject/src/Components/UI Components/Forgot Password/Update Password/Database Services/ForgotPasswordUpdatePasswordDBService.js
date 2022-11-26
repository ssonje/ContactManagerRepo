import { BASE_URL } from "../../../../../Constants/BackEndServerURL";
import { HTTPStatusErrorHelper } from "../../../../Helpers/Database Service Components/HTTPStatusErrorHelper";
import { toast } from "react-toastify";

import axios from "axios";

import * as ToastSuccessMessages from "../../../../../Constants/Toast Messages/ToastSuccessMessages";

/**
 * @component
 * `ForgotPasswordUpdatePasswordDBService` provides the functionality for verifying new passwords by using the `axios`.
 * @param {navigate} navigate
 * Navigate to the destination where we want to go after successfully verifying new passwords.
 * @param {setIsAPICalled} setIsAPICalled
 * This function is used to set the correct value to the `isAPICalled`.
 * @param {forgotPasswordUpdatePassword} forgotPasswordUpdatePassword
 * `forgotPasswordUpdatePassword` contains the required password fields.
 */
const ForgotPasswordUpdatePasswordDBService = (navigate, setIsAPICalled, forgotPasswordUpdatePassword) => {

    // Set the `isAPICalled` to true as we've started calling the Database API
    setIsAPICalled(true);

    return (
        axios.post(`${BASE_URL}/api/v1/forgot/password/update`, forgotPasswordUpdatePassword).then(
            (response) => {
                // Successfully updated the user's password
                toast.success(ToastSuccessMessages.TOAST_SUCCESS_FOR_SUCCESSFUL_PASSWORD_CHANGE);

                // Navigate to login page
                navigate('/login');

                // Set the `isAPICalled` to false as API is called successfully and we want to show the result
                setIsAPICalled(false);
            },
            (error) => {
                // Show error while verifying the updated password of the user
                HTTPStatusErrorHelper(error.response.status);

                // Set the `isAPICalled` to false as API is called successfully and we want to show the result
                setIsAPICalled(false);
            }
        )
    );
}

export default ForgotPasswordUpdatePasswordDBService;
