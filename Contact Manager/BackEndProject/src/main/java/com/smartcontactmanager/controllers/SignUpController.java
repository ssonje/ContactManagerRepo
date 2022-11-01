package com.smartcontactmanager.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.smartcontactmanager.controllers.helpers.SignUpControllerHelper;
import com.smartcontactmanager.entities.user.User;
import com.smartcontactmanager.user.signup.services.UserSignUpService;

@RestController
public class SignUpController {

	@Autowired
	private UserSignUpService userSignUpService;

	@Autowired
	private BCryptPasswordEncoder passwordEncoder;

	@PostMapping("/signup")
	public User addUser(@Valid @RequestBody User user) {
		User updatedUser = SignUpControllerHelper.setDefaultPropertiesForUser(user, passwordEncoder);
		return userSignUpService.addUser(updatedUser);
	}

}
