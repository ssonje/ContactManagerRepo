import { BASE_URL } from "../../Constants/BackEndServerURL";
import { HTTPStatusErrorHelper } from "./Helpers/HTTPStatusErrorHelper";
import { toast } from "react-toastify";

import axios from "axios";

import * as AuthenticationToken from "../../Constants/AuthenticationToken";

/**
 * @component
 * `AddContact` provides the functionality for adding contact for the user by using the `axios`.
 * @param {navigate} navigate
 * Navigate to the destination where we want to go after successfully adding contact.
 * @param {contact} contact
 * This contact will added into the user's contact list.
 */
export const AddContact = (navigate, contact) => {

    const authToken = AuthenticationToken.AUTH_TOKEN;

    return (
        axios.post(`${BASE_URL}/user/add/contact`, contact, {
            headers: {
                Authorization: 'Bearer ' + authToken
            }
        }).then(
            (response) => {
                // Successfully post the data to the server
                toast.success("Contact Added Successfully.!!!");

                // Navigate to the view contact page after contact has been successfully added to the server
                navigate('/user/view/contacts');
            },
            (error) => {
                // Show error while signing up the user
                HTTPStatusErrorHelper(error.response.status);
            }
        )
    );
}
