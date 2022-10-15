import { BASE_URL } from "../../../../Constants/BackEndServerURL";
import { HTTPStatusErrorHelper } from "../../../Database Service Components/Helpers/HTTPStatusErrorHelper";
import { toast } from "react-toastify";

import axios from "axios";

/**
 * @component
 * `ModifyContactDBService` provides the functionality for modifying the existing contact by using the `axios`.
 * @param {navigate} navigate
 * Navigate to the destination where we want to go after successfully adding contact.
 * @param {id} id
 * Contact with this ID will be modified.
 * @param {contact} contact
 * This contact will modified from the contact list.
 */
export const ModifyContactDBService = (navigate, id, contact) => {

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
                    toast.success("Contact modified successfully!");
                } else {
                    // Unathorized user to modified others contacts
                    toast.warning("Your not authorized to modify others contact details!");
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
