import { BASE_URL } from "../../../../Constants/BackEndServerURL";
import { HTTPStatusErrorHelper } from "../../../Helpers/Database Service Components/HTTPStatusErrorHelper";
import { toast } from "react-toastify";

import axios from "axios";

import * as ToastSuccessMessages from "../../../../Constants/Toast Messages/ToastSuccessMessages";
import * as ToastWarningMessages from "../../../../Constants/Toast Messages/ToastWarningMessages";

/**
 * @component
 * `ViewContactsDBService` provides the functionality for viewing all the contacts for the user by using the `axios`.
 * @param {setContactContent} setContactContent
 * Fetched contacts content are now passed to the `setContactContent` function.
 * @param {setIsAPICalled} setIsAPICalled
 * This function is used to set the correct value to the `isAPICalled`.
 * @param {pageNumber} pageNumber
 * The data for this `pageNumber` will be loaded.
 */
const ViewContactsDBService = (setContactContent, setIsAPICalled, pageNumber) => {

    const authToken = JSON.parse(localStorage.getItem(localStorage.key(0)));

    // Set the `isAPICalled` to true as we've started calling the Database API
    setIsAPICalled(true);

    return (
        axios.get(`${BASE_URL}/user/view/contacts?pageNumber=${pageNumber}`, {
            headers: {
                Authorization: 'Bearer ' + authToken
            }
        }).then(
            (response) => {
                // Successfully fetched the contacts content
                setContactContent({
                    content: response.data.content,
                    totalPages: response.data.totalPages,
                    totalElements: response.data.totalElements,
                    pageSize: response.data.pageable.size,
                    pageNumber: response.data.pageable.pageNumber,
                    lastPage: response.data.last
                });

                if (response.data.content.length === 0) {
                    toast.warning(ToastWarningMessages.TOAST_WARNING_NO_CONTACTS_FOUND);
                } else {
                    toast.success(ToastSuccessMessages.TOAST_SUCCESS_FOR_SUCCESSFULLY_FETCHING_CONTACTS);
                }

                // Set the `isAPICalled` to false as API is called successfully and we want to show the result
                setIsAPICalled(false);

                // Scroll to the top of the window
                window.scroll(0, 0);
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
