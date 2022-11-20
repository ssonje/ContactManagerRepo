package com.smartcontactmanager.services.email;

import javax.management.AttributeNotFoundException;
import javax.servlet.http.HttpSession;

import com.smartcontactmanager.payloads.apiResponse.APIResponse;
import com.smartcontactmanager.payloads.forgotPassword.ForgotPasswordEmail;
import com.smartcontactmanager.payloads.forgotPassword.ForgotPasswordOTPValidation;
import com.smartcontactmanager.payloads.forgotPassword.ForgotPasswordValidation;

public interface ForgotPasswordService {

	public APIResponse sendEmail(ForgotPasswordEmail forgotPasswordEmail, HttpSession httpSession) throws AttributeNotFoundException;
	public APIResponse authenticateForgotPasswordOTP(ForgotPasswordOTPValidation forgotPasswordOTPValidation, HttpSession httpSession) throws AttributeNotFoundException;
	public APIResponse updateForgotPassword(ForgotPasswordValidation forgotPasswordValidation, HttpSession httpSession) throws AttributeNotFoundException;

}
