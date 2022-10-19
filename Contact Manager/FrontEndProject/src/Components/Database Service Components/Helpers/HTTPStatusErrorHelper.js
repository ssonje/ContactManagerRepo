import { toast } from "react-toastify";

import * as ToastErrorMessages from "../../../Constants/Toast Messages/ToastErrorMessages";

/**
 * @helper @component
 * `HTTPStatusErrorHelper` provides the functionality to show HTTP error if any coming from the HTTP request.
 * @param {statusCode} statusCode
 * statusCode of the HTTP request error
 */
export const HTTPStatusErrorHelper = (statusCode) => {
    switch (statusCode) {
        case 400:
            toast.error(ToastErrorMessages.TOAST_ERROR_HTTP_ERROR_400);
            break;

        case 401:
            toast.error(ToastErrorMessages.TOAST_ERROR_HTTP_ERROR_401);
            break;

        case 403:
            toast.error(ToastErrorMessages.TOAST_ERROR_HTTP_ERROR_403);
            break;

        case 404:
            toast.error(ToastErrorMessages.TOAST_ERROR_HTTP_ERROR_404);
            break;

        default:
            toast.error(ToastErrorMessages.TOAST_ERROR_HTTP_ERROR_DEFAULT);
            break;
    }
}
