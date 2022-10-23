import { BASE_URL } from "../../../../Constants/BackEndServerURL";
import { HTTPStatusErrorHelper } from "../../../Database Service Components/Helpers/HTTPStatusErrorHelper";
import { SettingsDBService } from "./SettingsDBService";
import { toast } from "react-toastify";

import axios from "axios";

import * as ToastWarningMessages from "../../../../Constants/Toast Messages/ToastWarningMessages";

/**
 * @component
 * `OldPasswordAuthenticationDBService` provides the functionality authenticating the old password entered by the user by using the `axios`.
 * @param {navigate} navigate
 * This password will be authenticated.
 * @param {userPassword} userPassword
 * Model which contains the required password related fields.
 * @param {userPasswordAuthentication} userPasswordAuthentication
 * Model used to authenticate the user old password.
 */
export const OldPasswordAuthenticationDBService = (navigate, userPassword, userPasswordAuthentication) => {

    const authToken = JSON.parse(localStorage.getItem(localStorage.key(0)));

    return (
        axios.post(`${BASE_URL}/user/password/auth`, userPasswordAuthentication, {
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
            },
            (error) => {
                // Show error while changing the user's password
                HTTPStatusErrorHelper(error.response.status);
            }
        )
    );
}
