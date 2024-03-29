import { BASE_URL } from "../../../../../Constants/BackEndServerURL";
import { HTTPStatusErrorHelper } from "../../../../Helpers/Database Service Components/HTTPStatusErrorHelper";
import { toast } from "react-toastify";

import axios from "axios";

import * as ToastSuccessMessages from "../../../../../Constants/Toast Messages/ToastSuccessMessages";

/**
 * @component
 * `ForgotPasswordEmailDBService` provides the functionality for sending OTP to the entered email by using the `axios`.
 * @param {navigate} navigate
 * Navigate to the destination where we want to go after successfully sending OTP to the entered email ID.
 * @param {setIsAPICalled} setIsAPICalled
 * This function is used to set the correct value to the `isAPICalled`.
 * @param {forgotPasswordEmail} forgotPasswordEmail
 * This forgotPasswordEmail will contains the email id of the user where we've send OTP.
 */
const ForgotPasswordEmailDBService = (navigate, setIsAPICalled, forgotPasswordEmail) => {

    // Set the `isAPICalled` to true as we've started calling the Database API
    setIsAPICalled(true);

    return (
        axios.post(`${BASE_URL}/api/v1/forgot/password/email`, forgotPasswordEmail).then(
            (response) => {
                // Successfully post the data to the server
                toast.success(ToastSuccessMessages.TOAST_SUCCESS_FOR_SUCCESSFUL_OTP);

                // Navigate to enter received OTP page 
                navigate('/forgot/password/otp/auth');

                // Set the `isAPICalled` to false as API is called successfully and we want to show the result
                setIsAPICalled(false);
            },
            (error) => {
                // Show error while sending the OTP
                HTTPStatusErrorHelper(error.response.status);

                // Set the `isAPICalled` to false as API is called successfully and we want to show the result
                setIsAPICalled(false);
            }
        )
    );
}

export default ForgotPasswordEmailDBService;
