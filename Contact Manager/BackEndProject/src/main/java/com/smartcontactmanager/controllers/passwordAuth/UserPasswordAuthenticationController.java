package com.smartcontactmanager.controllers.passwordAuth;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smartcontactmanager.payloads.apiResponse.APIResponse;
import com.smartcontactmanager.payloads.user.password.UserPasswordAuthentication;
import com.smartcontactmanager.services.user.password.authentication.controller.UserPasswordAuthenticationControllerService;

@RestController
@RequestMapping("/api/user")
public class UserPasswordAuthenticationController {

	@Autowired
	private UserPasswordAuthenticationControllerService userPasswordAuthenticationControllerService;

	@PostMapping("/password/auth")
	public ResponseEntity<?> authenticateUserOldPassword(@RequestBody UserPasswordAuthentication userPasswordAuthentication, Principal principal) {
		APIResponse apiResponse = userPasswordAuthenticationControllerService.authenticateUserOldPassword(
				userPasswordAuthentication,
				principal);
		return ResponseEntity.ok(apiResponse);
	}

}
