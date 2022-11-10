package com.smartcontactmanager.controllers;

import javax.management.AttributeNotFoundException;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smartcontactmanager.entities.forgotPassword.ForgotPasswordEmail;
import com.smartcontactmanager.entities.forgotPassword.ForgotPasswordOTPValidation;
import com.smartcontactmanager.entities.forgotPassword.ForgotPasswordValidation;
import com.smartcontactmanager.services.email.ForgotPasswordService;

@RestController
@RequestMapping("/api/forgot/password")
public class ForgotPasswordController {

	@Autowired
	private ForgotPasswordService forgotPasswordService;

	@PostMapping("/email")
	public ResponseEntity<?> forgotPassword(@RequestBody ForgotPasswordEmail forgotPasswordEmail, HttpSession httpSession) throws AttributeNotFoundException {
		boolean isEmailSend = forgotPasswordService.sendEmail(forgotPasswordEmail, httpSession);
		return ResponseEntity.ok(isEmailSend);
	}

	@PostMapping("/otp/auth")
	public ResponseEntity<?> authenticateForgotPasswordOTP(@RequestBody ForgotPasswordOTPValidation forgotPasswordOTPValidation, HttpSession httpSession) throws AttributeNotFoundException {
		boolean isOTPAuthenticated = forgotPasswordService.authenticateForgotPasswordOTP(forgotPasswordOTPValidation, httpSession);
		return ResponseEntity.ok(isOTPAuthenticated);
	}

	@PostMapping("/update/password")
	public ResponseEntity<?> updateForgotPassword(@RequestBody ForgotPasswordValidation forgotPasswordValidation, HttpSession httpSession) throws AttributeNotFoundException {
		boolean isPasswordUpdated = forgotPasswordService.updateForgotPassword(forgotPasswordValidation, httpSession);
		return ResponseEntity.ok(isPasswordUpdated);
	}

}
