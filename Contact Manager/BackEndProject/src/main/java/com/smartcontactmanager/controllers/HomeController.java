package com.smartcontactmanager.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.smartcontactmanager.entities.User;
import com.smartcontactmanager.services.UserService;

@RestController
public class HomeController {

	@Autowired
	private UserService userService;

	@PostMapping("/user")
	public User addUser(@Valid @RequestBody User user) throws Exception {
		try {
			User updatedUser = HomeController.setDefaultPropertiesForUser(user);
			return userService.addUser(updatedUser);
		} catch (Exception e) {
			throw new Exception(e.getCause());
		}
	}

	// Set the role and enabled fields of @C User
	private static User setDefaultPropertiesForUser(User user) {
		user.setRole("ROLE_USER");
		user.setEnabled(true);
		return user;
	}
}
