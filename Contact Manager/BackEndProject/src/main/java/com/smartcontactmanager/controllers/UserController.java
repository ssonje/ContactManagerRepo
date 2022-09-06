package com.smartcontactmanager.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.smartcontactmanager.controllers.helpers.UserControllerHelpers;
import com.smartcontactmanager.entities.User;
import com.smartcontactmanager.services.UserService;

@RestController
public class UserController {

	@Autowired
	private UserService userService;

	@Autowired
	private BCryptPasswordEncoder passwordEncoder;

	@PostMapping("/user")
	public User addUser(@Valid @RequestBody User user) throws Exception {
		User updatedUser = UserControllerHelpers.setDefaultPropertiesForUser(user, passwordEncoder);
		return userService.addUser(updatedUser);
	}

}
