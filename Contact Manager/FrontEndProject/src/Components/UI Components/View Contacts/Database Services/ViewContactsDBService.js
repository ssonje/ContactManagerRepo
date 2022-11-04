import { BASE_URL } from "../../../../Constants/BackEndServerURL";
import { HTTPStatusErrorHelper } from "../../../Database Service Components/Helpers/HTTPStatusErrorHelper";
import { toast } from "react-toastify";

import axios from "axios";

import * as ToastSuccessMessages from "../../../../Constants/Toast Messages/ToastSuccessMessages";
import * as ToastWarningMessages from "../../../../Constants/Toast Messages/ToastWarningMessages";

/**
 * @component
 * `ViewContactsDBService` provides the functionality for viewing all the contacts for the user by using the `axios`.
 * @param {setContacts} setContacts
 * Fetched contacts are now passed to the setContacts function.
 * @param {setIsAPICalled} setIsAPICalled
 * This function is used to set the correct value to the `isAPICalled`.
 */
const ViewContactsDBService = (setContacts, setIsAPICalled) => {

    const authToken = JSON.parse(localStorage.getItem(localStorage.key(0)));

    // Set the `isAPICalled` to true as we've started calling the Database API
    setIsAPICalled(true);

    return (
        axios.get(`${BASE_URL}/user/view/contacts`, {
            headers: {
                Authorization: 'Bearer ' + authToken
            }
        }).then(
            (response) => {
                // Successfully fetched the contacts
                setContacts(response.data);

                if (response.data.length === 0) {
                    toast.warning(ToastWarningMessages.TOAST_WARNING_NO_CONTACTS_FOUND);
                } else {
                    toast.success(ToastSuccessMessages.TOAST_SUCCESS_FOR_SUCCESSFULLY_FETCHING_CONTACTS);
                }

                // Set the `isAPICalled` to false as API is called successfully and we want to show the result
                setIsAPICalled(false);
            },
            (error) => {
                // Show error while fetching all the contacts
                HTTPStatusErrorHelper(error.response.status);

                // Set the `isAPICalled` to false as API is called successfully and we want to show the result
                setIsAPICalled(false);
            }
        )
    );
}

export default ViewContactsDBService;
