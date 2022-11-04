import { BASE_URL } from "../../../../../Constants/BackEndServerURL";
import { HTTPStatusErrorHelper } from "../../../../Helpers/Database Service Components/HTTPStatusErrorHelper";
import { toast } from "react-toastify";

import axios from "axios";

import * as ToastSuccessMessages from "../../../../../Constants/Toast Messages/ToastSuccessMessages";

/**
 * @component
 * `ForgotPasswordOTPAuthenticationDBService` provides the functionality for verifying OTP by using the `axios`.
 * @param {setIsAPICalled} setIsAPICalled
 * This function is used to set the correct value to the `isAPICalled`.
 * @param {navigate} navigate
 * Navigate to the destination where we want to go after successfully verifying OTP.
 * @param {forgotPasswordOTP} forgotPasswordOTP
 * This forgotPasswordOTP will contains the OTP entered by the user.
 */
const ForgotPasswordOTPAuthenticationDBService = (navigate, setIsAPICalled, forgotPasswordOTP) => {

    // Set the `isAPICalled` to true as we've started calling the Database API
    setIsAPICalled(true);

    return (
        axios.post(`${BASE_URL}/forgot/password/otp/auth`, forgotPasswordOTP).then(
            (response) => {
                // Successfully post the data to the server
                toast.success(ToastSuccessMessages.TOAST_SUCCESS_FOR_SUCCESSFUL_OTP_AUTHENTICATION);

                // Navigate to update password page
                navigate('/forgot/password/update/password');

                // Set the `isAPICalled` to false as API is called successfully and we want to show the result
                setIsAPICalled(false);
            },
            (error) => {
                // Show error while verifying the user
                HTTPStatusErrorHelper(error.response.status);

                // Set the `isAPICalled` to false as API is called successfully and we want to show the result
                setIsAPICalled(false);
            }
        )
    );
}

export default ForgotPasswordOTPAuthenticationDBService;
