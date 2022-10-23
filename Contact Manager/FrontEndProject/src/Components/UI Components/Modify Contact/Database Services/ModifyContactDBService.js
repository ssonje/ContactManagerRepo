import { BASE_URL } from "../../../../Constants/BackEndServerURL";
import { HTTPStatusErrorHelper } from "../../../Database Service Components/Helpers/HTTPStatusErrorHelper";
import { toast } from "react-toastify";

import axios from "axios";

import * as ToastSuccessMessages from "../../../../Constants/Toast Messages/ToastSuccessMessages";
import * as ToastWarningMessages from "../../../../Constants/Toast Messages/ToastWarningMessages";

/**
 * @component
 * `ModifyContactDBService` provides the functionality for modifying the existing contact by using the `axios`.
 * @param {navigate} navigate
 * Navigate to the destination where we want to go after successfully modifying contact.
 * @param {id} id
 * Contact with this ID will be modified.
 * @param {contact} contact
 * This contact will modified from the contact list.
 */
const ModifyContactDBService = (navigate, id, contact) => {

    const authToken = JSON.parse(localStorage.getItem(localStorage.key(0)));

    return (
        axios.post(`${BASE_URL}/user/modify/contact/${id}`, contact, {
            headers: {
                Authorization: 'Bearer ' + authToken
            }
        }).then(
            (response) => {
                if (response.data) {
                    // Successfully modified the required contact
                    toast.success(ToastSuccessMessages.TOAST_SUCCESS_FOR_MODIFIED_CONTACT);
                } else {
                    // Unathorized user to modified others contacts
                    toast.warning(ToastWarningMessages.TOAST_WARNING_MODIFY_UNATHORIZED_CONTACT);
                }

                navigate("/user/view/contacts");
            },
            (error) => {
                // Show error while modifying the contact
                HTTPStatusErrorHelper(error.response.status);
            }
        )
    );
}

export default ModifyContactDBService;
