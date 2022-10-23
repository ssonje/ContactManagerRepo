package com.smartcontactmanager.controllers;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smartcontactmanager.entities.UserPasswordAuthentication;
import com.smartcontactmanager.services.UserPasswordAuthenticationControllerService;

@RestController
@RequestMapping("/user")
public class UserPasswordAuthenticationController {

	@Autowired
	private UserPasswordAuthenticationControllerService userPasswordAuthenticationControllerService;

	@PostMapping("/password/auth")
	public Boolean authenticateUserOldPassword(@RequestBody UserPasswordAuthentication userPasswordAuthentication, Principal principal) {
		return userPasswordAuthenticationControllerService.authenticateUserOldPassword(
				userPasswordAuthentication,
				principal);
	}

}
