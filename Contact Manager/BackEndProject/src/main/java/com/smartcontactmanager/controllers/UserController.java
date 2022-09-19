package com.smartcontactmanager.controllers;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smartcontactmanager.dao.UserRepository;
import com.smartcontactmanager.entities.User;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserRepository userRepository;

	@GetMapping("/profile")
	public User userProfile(Principal principal) {
		User user = userRepository.loadUserByEmail(principal.getName());
		return user;
	}

}
