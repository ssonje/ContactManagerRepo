package com.smartcontactmanager.controllers.signup;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.smartcontactmanager.entities.user.User;

public class SignUpControllerHelper {

	// Set the role, enabled field and encode the password of @C User
	public static User setDefaultPropertiesForUser(User user, BCryptPasswordEncoder passwordEncoder) {
		user.setRole("ROLE_USER");
		user.setEnabled(true);
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		return user;
	}

}
