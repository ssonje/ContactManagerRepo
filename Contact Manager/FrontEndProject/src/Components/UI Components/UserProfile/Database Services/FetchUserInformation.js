import { BASE_URL } from "../../../../Constants/BackEndServerURL";
import { HTTPStatusErrorHelper } from "../../../Helpers/Database Service Components/HTTPStatusErrorHelper";
import { toast } from "react-toastify";

import axios from "axios";

import * as ToastSuccessMessages from "../../../../Constants/Toast Messages/ToastSuccessMessages";

/**
 * @component
 * `FetchUserInformation` provides the functionality to fetch the user information by using the `axios`.
 * @param {setUser} setUser
 * This function is used to set the user.
 * @param {setIsAPICalled} setIsAPICalled
 * This function is used to set the correct value to the `isAPICalled`.
 */
const FetchUserInformation = (setUser, setIsAPICalled) => {

    const authToken = JSON.parse(localStorage.getItem(localStorage.key(0)));

    // Set the `isAPICalled` to true as we've started calling the Database API
    setIsAPICalled(true);
    
    return (
        axios.get(`${BASE_URL}/api/user/profile`, {
            headers: {
                Authorization: 'Bearer ' + authToken
            }
        }).then(
            (response) => {
                // Successfully fetched user information
                toast.success(ToastSuccessMessages.TOAST_SUCCESS_FOR_SUCCESSFULLY_FETCHING_USER_INFORMATION);
                setUser(response.data);

                 // Set the `isAPICalled` to false as API is called successfully and we want to show the result
                 setIsAPICalled(false);
            },
            (error) => {
                // Show error while fetching data of user
                HTTPStatusErrorHelper(error.response.status);

                 // Set the `isAPICalled` to false as API is called successfully and we want to show the result
                 setIsAPICalled(false);
            }
        )
    );
}

export default FetchUserInformation;
