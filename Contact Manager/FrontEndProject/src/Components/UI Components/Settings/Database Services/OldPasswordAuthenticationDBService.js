import { BASE_URL } from "../../../../Constants/BackEndServerURL";
import { HTTPStatusErrorHelper } from "../../../Helpers/Database Service Components/HTTPStatusErrorHelper";
import { toast } from "react-toastify";

import axios from "axios";
import SettingsDBService from "./SettingsDBService";

import * as ToastWarningMessages from "../../../../Constants/Toast Messages/ToastWarningMessages";

/**
 * @component
 * `OldPasswordAuthenticationDBService` provides the functionality authenticating the old password entered by the user by using the `axios`.
 * @param {navigate} navigate
 * This password will be authenticated.
 * @param {setIsAPICalled} setIsAPICalled
 * This function is used to set the correct value to the `isAPICalled`.
 * @param {userPassword} userPassword
 * Model which contains the required password related fields.
 * @param {userPasswordAuthentication} userPasswordAuthentication
 * Model used to authenticate the user old password.
 */
const OldPasswordAuthenticationDBService = (navigate, setIsAPICalled, userPassword, userPasswordAuthentication) => {

    const authToken = JSON.parse(localStorage.getItem(localStorage.key(0)));

    // Set the `isAPICalled` to true as we've started calling the Database API
    setIsAPICalled(true);

    return (
        axios.post(`${BASE_URL}/api/user/password/auth`, userPasswordAuthentication, {
            headers: {
                Authorization: 'Bearer ' + authToken
            }
        }).then(
            (response) => {
                if (response.data === true) {
                    // Successfully authenticated the user's old password now change the password
                    SettingsDBService(navigate, userPassword);
                } else {
                    // Warning messager for the incorrect user's old password
                    toast.warning(ToastWarningMessages.TOAST_WARNING_INCORRECT_USER_OLD_PASSWORD);
                }

                // Set the `isAPICalled` to false as API is called successfully and we want to show the result
                setIsAPICalled(false);
            },
            (error) => {
                // Show error while changing the user's password
                HTTPStatusErrorHelper(error.response.status);

                // Set the `isAPICalled` to false as API is called successfully and we want to show the result
                setIsAPICalled(false);
            }
        )
    );
}

export default OldPasswordAuthenticationDBService;
