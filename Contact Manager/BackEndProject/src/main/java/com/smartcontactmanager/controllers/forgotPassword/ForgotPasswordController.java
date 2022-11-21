package com.smartcontactmanager.controllers.forgotPassword;

import javax.management.AttributeNotFoundException;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smartcontactmanager.payloads.apiResponse.APIResponse;
import com.smartcontactmanager.payloads.forgotPassword.ForgotPasswordEmail;
import com.smartcontactmanager.payloads.forgotPassword.ForgotPasswordOTPValidation;
import com.smartcontactmanager.payloads.forgotPassword.ForgotPasswordValidation;
import com.smartcontactmanager.services.email.ForgotPasswordService;

@RestController
@RequestMapping("/api/v1/forgot/password")
public class ForgotPasswordController {

	@Autowired
	private ForgotPasswordService forgotPasswordService;

	@PostMapping("/email")
	public ResponseEntity<?> forgotPassword(@RequestBody ForgotPasswordEmail forgotPasswordEmail, HttpSession httpSession) throws AttributeNotFoundException {
		APIResponse apiResponse = forgotPasswordService.sendEmail(forgotPasswordEmail, httpSession);
		return ResponseEntity.ok(apiResponse);
	}

	@PostMapping("/auth/otp")
	public ResponseEntity<?> authenticateForgotPasswordOTP(@RequestBody ForgotPasswordOTPValidation forgotPasswordOTPValidation, HttpSession httpSession) throws AttributeNotFoundException {
		APIResponse apiResponse = forgotPasswordService.authenticateForgotPasswordOTP(forgotPasswordOTPValidation, httpSession);
		return ResponseEntity.ok(apiResponse);
	}

	@PostMapping("/update/password")
	public ResponseEntity<?> updateForgotPassword(@RequestBody ForgotPasswordValidation forgotPasswordValidation, HttpSession httpSession) throws AttributeNotFoundException {
		APIResponse apiResponse = forgotPasswordService.updateForgotPassword(forgotPasswordValidation, httpSession);
		return ResponseEntity.ok(apiResponse);
	}

}
