import { BASE_URL } from "../../../../Constants/BackEndServerURL";
import { HTTPStatusErrorHelper } from "../../../Database Service Components/Helpers/HTTPStatusErrorHelper";
import { toast } from "react-toastify";

import axios from "axios";

/**
 * @component
 * `ViewSingleContactDBService` provides the functionality for viewing single contact by using the `axios`.
 * @param {id} id
 * This contact id will used to fetched the contact details.
 * @param {setContact} setContact
 * This setContact function is used to set the contact details.
 */
export const ViewSingleContactDBService = (setContact, id) => {

    const authToken = JSON.parse(localStorage.getItem(localStorage.key(0)));

    return (
        axios.get(`${BASE_URL}/user/view/contact/${id}`, {
            headers: {
                Authorization: 'Bearer ' + authToken
            }
        }).then(
            (response) => {
                if (response.data) {
                    // Successfully fetched contact details
                    toast.success("Contact details fetched successfully!");
                } else {
                    // Unathorized user viewing others contact details
                    toast.warning("Your not authorized to view others contact details!");
                }

                setContact(response.data);
            },
            (error) => {
                // Show error while fetching the contact details
                setContact(error.data);
                HTTPStatusErrorHelper(error.response.status);
            }
        )
    );
}
