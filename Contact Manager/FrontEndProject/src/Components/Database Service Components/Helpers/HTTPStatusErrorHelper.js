import { toast } from "react-toastify";

/**
 * @helper @component
 * `HTTPStatusErrorHelper` provides the functionality to show HTTP error if any coming from the HTTP request.
 * @param {statusCode} statusCode
 * statusCode of the HTTP request error
 */
export const HTTPStatusErrorHelper = (statusCode) => {
    switch (statusCode) {
        case 400:
            toast.error("Bad Request - HTTP status - 400");
            break;

        case 401:
            toast.error("Username and Password didn't match - HTTP status - 401");
            break;

        case 403:
            toast.error("You do not have access rights - HTTP status - 403");
            break;

        case 404:
            toast.error("Page not found - HTTP status - 404");
            break;

        default:
            toast.error("Something went wrong. Please contact Test@gmail.com.");
            break;
    }
}
