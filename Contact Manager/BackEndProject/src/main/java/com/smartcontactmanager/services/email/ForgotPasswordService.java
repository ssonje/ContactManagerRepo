package com.smartcontactmanager.services.email;

import javax.management.AttributeNotFoundException;
import javax.servlet.http.HttpSession;

import com.smartcontactmanager.entities.ForgotPasswordEmail;
import com.smartcontactmanager.entities.ForgotPasswordOTPValidation;
import com.smartcontactmanager.entities.ForgotPasswordValidation;

public interface ForgotPasswordService {

	public boolean sendEmail(ForgotPasswordEmail forgotPasswordEmail, HttpSession httpSession) throws AttributeNotFoundException;
	public boolean authenticateForgotPasswordOTP(ForgotPasswordOTPValidation forgotPasswordOTPValidation, HttpSession httpSession) throws AttributeNotFoundException;
	public boolean updateForgotPassword(ForgotPasswordValidation forgotPasswordValidation, HttpSession httpSession) throws AttributeNotFoundException;

}