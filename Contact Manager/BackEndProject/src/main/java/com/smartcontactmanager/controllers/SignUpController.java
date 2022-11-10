package com.smartcontactmanager.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smartcontactmanager.controllers.helpers.SignUpControllerHelper;
import com.smartcontactmanager.entities.user.User;
import com.smartcontactmanager.user.signup.services.UserSignUpService;

@RestController
@RequestMapping("/api/signup")
public class SignUpController {

	@Autowired
	private UserSignUpService userSignUpService;

	@Autowired
	private BCryptPasswordEncoder passwordEncoder;

	@PostMapping("/add/user")
	public ResponseEntity<?> addUser(@Valid @RequestBody User user) {
		User updatedUser = SignUpControllerHelper.setDefaultPropertiesForUser(user, passwordEncoder);
		User userResponse = userSignUpService.addUser(updatedUser);
		return ResponseEntity.ok(userResponse);
	}

}
