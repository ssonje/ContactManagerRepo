package com.smartcontactmanager.security.controllers.helpers;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import com.smartcontactmanager.security.requests.AuthenticationRequest;

public class AuthenticationControllerHelpers {

	// Generate user name and password authentication token for the current authenticating user
	public static UsernamePasswordAuthenticationToken generateUsernamePasswordAuthenticationToken(AuthenticationRequest authenticationRequest) {
		String username = authenticationRequest.getUsername();
		String password = authenticationRequest.getPassword();
		return new UsernamePasswordAuthenticationToken(username, password);
	}

}
