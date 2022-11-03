import { BASE_URL } from "../../../../Constants/BackEndServerURL";
import { HTTPStatusErrorHelper } from "../../../Database Service Components/Helpers/HTTPStatusErrorHelper";
import { toast } from "react-toastify";

import axios from "axios";

import * as ToastSuccessMessages from "../../../../Constants/Toast Messages/ToastSuccessMessages";
import * as ToastWarningMessages from "../../../../Constants/Toast Messages/ToastWarningMessages";

/**
 * @component
 * `DeleteContactDBService` provides the functionality for deleting single contact by using the `axios`.
 * @param {setIsAPICalled} setIsAPICalled
 * This function is used to set the correct value to the `isAPICalled`.
 * @param {id} id
 * This contact id will used to delete the contact details.
 * @param {user} user
 * This user is used to avoid mismatched call to the API at the server side.
 */
const DeleteContactDBService = (navigate, setIsAPICalled, id, user) => {

    const authToken = JSON.parse(localStorage.getItem(localStorage.key(0)));

    // Set the `isAPICalled` to true as we've started calling the Database API
    setIsAPICalled(true);

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

                // Navigate to the view contacts page after contact has been successfully deleted to the server
                navigate("/user/view/contacts");

                // Set the `isAPICalled` to false as API is called successfully and we want to show the result
                setIsAPICalled(false);
            },
            (error) => {
                // Show error while deleting the required contact
                HTTPStatusErrorHelper(error.response.status);

                // Navigate to the view contact page after there are problems while deleting the contact
                navigate("/user/view/contacts");

                // Set the `isAPICalled` to false as API is called successfully and we want to show the result
                setIsAPICalled(false);
            }
        )
    );
}

export default DeleteContactDBService;
