package com.smartcontactmanager.controllers;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smartcontactmanager.entities.user.data.models.UserPasswordAuthentication;
import com.smartcontactmanager.services.user.password.authentication.controller.UserPasswordAuthenticationControllerService;

@RestController
@RequestMapping("/api/user")
public class UserPasswordAuthenticationController {

	@Autowired
	private UserPasswordAuthenticationControllerService userPasswordAuthenticationControllerService;

	@PostMapping("/password/auth")
	public ResponseEntity<?> authenticateUserOldPassword(@RequestBody UserPasswordAuthentication userPasswordAuthentication, Principal principal) {
		Boolean isPasswordAuthenticated = userPasswordAuthenticationControllerService.authenticateUserOldPassword(
				userPasswordAuthentication,
				principal);
		return ResponseEntity.ok(isPasswordAuthenticated);
	}

}
