import { BASE_URL } from "../../../../Constants/BackEndServerURL";
import { HTTPStatusErrorHelper } from "../../../Database Service Components/Helpers/HTTPStatusErrorHelper";
import { toast } from "react-toastify";

import axios from "axios";

import * as ToastSuccessMessages from "../../../../Constants/Toast Messages/ToastSuccessMessages";
import * as ToastWarningMessages from "../../../../Constants/Toast Messages/ToastWarningMessages";

/**
 * @component
 * `DeleteContactDBService` provides the functionality for deleting single contact by using the `axios`.
 * @param {id} id
 * This contact id will used to delete the contact details.
 */
const DeleteContactDBService = (navigate, id, user) => {

    const authToken = JSON.parse(localStorage.getItem(localStorage.key(0)));

    return (
        axios.post(`${BASE_URL}/user/delete/contact/${id}`, user, {
            headers: {
                Authorization: 'Bearer ' + authToken
            }
        }).then(
            (response) => {
                if (response.data) {
                    // Successfully deleted the required contact
                    toast.success(ToastSuccessMessages.TOAST_SUCCESS_FOR_DELETED_CONTACT);
                } else {
                    // Unathorized user deleting others contacts
                    toast.warning(ToastWarningMessages.TOAST_WARNING_DELETE_UNATHORIZED_CONTACT);
                }

                navigate("/user/view/contacts");
            },
            (error) => {
                // Show error while deleting the required contact
                HTTPStatusErrorHelper(error.response.status);
            }
        )
    );
}

export default DeleteContactDBService;
