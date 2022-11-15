package com.smartcontactmanager.services.email;

import javax.management.AttributeNotFoundException;
import javax.servlet.http.HttpSession;

import com.smartcontactmanager.entities.forgotPassword.ForgotPasswordEmail;
import com.smartcontactmanager.entities.forgotPassword.ForgotPasswordOTPValidation;
import com.smartcontactmanager.entities.forgotPassword.ForgotPasswordValidation;
import com.smartcontactmanager.entities.payloads.APIResponse;

public interface ForgotPasswordService {

	public APIResponse sendEmail(ForgotPasswordEmail forgotPasswordEmail, HttpSession httpSession) throws AttributeNotFoundException;
	public APIResponse authenticateForgotPasswordOTP(ForgotPasswordOTPValidation forgotPasswordOTPValidation, HttpSession httpSession) throws AttributeNotFoundException;
	public APIResponse updateForgotPassword(ForgotPasswordValidation forgotPasswordValidation, HttpSession httpSession) throws AttributeNotFoundException;

}
