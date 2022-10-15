import { BASE_URL } from "../../../../Constants/BackEndServerURL";
import { HTTPStatusErrorHelper } from "../../../Database Service Components/Helpers/HTTPStatusErrorHelper";
import { toast } from "react-toastify";

import axios from "axios";

/**
 * @component
 * `DeleteContactDBService` provides the functionality for deleting single contact by using the `axios`.
 * @param {id} id
 * This contact id will used to delete the contact details.
 */
export const DeleteContactDBService = (navigate, id, user) => {

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
                    toast.success("Contact deleted successfully!");
                } else {
                    // Unathorized user deleting others contacts
                    toast.warning("Your not authorized to delete others contact details!");
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
