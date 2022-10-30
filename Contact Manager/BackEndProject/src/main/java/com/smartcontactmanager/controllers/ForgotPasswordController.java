package com.smartcontactmanager.controllers;

import javax.management.AttributeNotFoundException;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smartcontactmanager.entities.ForgotPasswordEmail;
import com.smartcontactmanager.entities.ForgotPasswordOTPValidation;
import com.smartcontactmanager.entities.ForgotPasswordValidation;
import com.smartcontactmanager.services.email.ForgotPasswordService;

@RestController
@RequestMapping("/forgot/password")
public class ForgotPasswordController {

	@Autowired
	private ForgotPasswordService forgotPasswordService;

	@PostMapping("/email")
	public boolean forgotPassword(@RequestBody ForgotPasswordEmail forgotPasswordEmail, HttpSession httpSession) throws AttributeNotFoundException {
		return forgotPasswordService.sendEmail(forgotPasswordEmail, httpSession);
	}

	@PostMapping("/otp/auth")
	public boolean authenticateForgotPasswordOTP(@RequestBody ForgotPasswordOTPValidation forgotPasswordOTPValidation, HttpSession httpSession) throws AttributeNotFoundException {
		return forgotPasswordService.authenticateForgotPasswordOTP(forgotPasswordOTPValidation, httpSession);
	}

	@PostMapping("/update")
	public boolean updateForgotPassword(@RequestBody ForgotPasswordValidation forgotPasswordValidation, HttpSession httpSession) throws AttributeNotFoundException {
		return forgotPasswordService.updateForgotPassword(forgotPasswordValidation, httpSession);
	}

}
