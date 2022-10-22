import * as SettingsFormValidationConstants from "../Constants/SettingsFormValidationConstants"

/**
 * @helper @Component
 * `SettingsFormValidation` component provides functionality to validate the form.
 */
export const SettingsFormValidation = (oldPassword, newPassword, confirmedNewPassword) => {

    const errors = {};

    /* User Old Password Validation */

    if (!oldPassword) {
        errors.oldPassword = SettingsFormValidationConstants.SETTINGS_ENTERED_OLD_PASSWORD_EMPTY_VALIDATION;
    }

    if (oldPassword && (oldPassword.length < 6 || oldPassword.length > 75)) {
        errors.oldPassword = SettingsFormValidationConstants.SETTINGS_ENTERED_OLD_PASSWORD_LENGTH_VALIDATION;
    }

    /* User New Password Validation */

    if (!newPassword) {
        errors.newPassword = SettingsFormValidationConstants.SETTINGS_ENTERED_NEW_PASSWORD_EMPTY_VALIDATION;
    }

    if (newPassword && (newPassword.length < 6 || newPassword.length > 75)) {
        errors.newPassword = SettingsFormValidationConstants.SETTINGS_ENTERED_NEW_PASSWORD_LENGTH_VALIDATION;
    }

    /* User Password Validation */

    if (!confirmedNewPassword) {
        errors.confirmedNewPassword = SettingsFormValidationConstants.SETTINGS_ENTERED_CONFIRM_NEW_PASSWORD_EMPTY_VALIDATION;
    }

    if (confirmedNewPassword && (confirmedNewPassword.length < 6 || confirmedNewPassword.length > 75)) {
        errors.confirmedNewPassword = SettingsFormValidationConstants.SETTINGS_ENTERED_CONFIRM_NEW_PASSWORD_LENGTH_VALIDATION
    }

    /* Verify User Old and New Password Validation */

    if (oldPassword 
        && newPassword 
        && (oldPassword.length >= 6 && oldPassword.length <= 75)
        && (newPassword.length >= 6 || newPassword.length <= 75)
        && (oldPassword === newPassword)) {
        errors.oldPassword = SettingsFormValidationConstants.SETTINGS_ENTERED_OLD_AND_NEW_PASSWORD_VALIDATION;
        errors.newPassword = SettingsFormValidationConstants.SETTINGS_ENTERED_OLD_AND_NEW_PASSWORD_VALIDATION;
    }

    /* Verify User New and Confirmed New Password Validation */

    if (newPassword 
        && confirmedNewPassword 
        && (newPassword.length >= 6 || newPassword.length <= 75)
        && (confirmedNewPassword.length >= 6 || confirmedNewPassword.length <= 75)
        && (newPassword !== confirmedNewPassword)) {
        errors.newPassword = SettingsFormValidationConstants.SETTINGS_ENTERED_NEW_AND_CONFIRMED_NEW_PASSWORD_VALIDATION;
        errors.confirmedNewPassword = SettingsFormValidationConstants.SETTINGS_ENTERED_NEW_AND_CONFIRMED_NEW_PASSWORD_VALIDATION;
    }

    return errors;
}
