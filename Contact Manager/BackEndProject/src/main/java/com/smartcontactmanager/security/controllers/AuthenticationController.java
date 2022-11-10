package com.smartcontactmanager.security.controllers;

import java.security.NoSuchAlgorithmException;
import java.security.Principal;
import java.security.spec.InvalidKeySpecException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smartcontactmanager.security.config.helpers.JWTTokenHelper;
import com.smartcontactmanager.security.controllers.helpers.AuthenticationControllerHelpers;
import com.smartcontactmanager.security.requests.AuthenticationRequest;
import com.smartcontactmanager.security.response.AuthenticationResponse;
import com.smartcontactmanager.security.services.UserDetailsImpl;

@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JWTTokenHelper jwtTokenHelper;

	@Autowired
	private UserDetailsService userDetailsService;

	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody AuthenticationRequest authenticationRequest) throws InvalidKeySpecException, NoSuchAlgorithmException {
		final Authentication authentication = authenticationManager.authenticate(
				AuthenticationControllerHelpers.generateUsernamePasswordAuthenticationToken(authenticationRequest));
		SecurityContextHolder.getContext().setAuthentication(authentication);
		UserDetailsImpl userDetailsImpl = (UserDetailsImpl) authentication.getPrincipal();
		String jwtToken = jwtTokenHelper.generateToken(userDetailsImpl.getUsername());
		AuthenticationResponse response = new AuthenticationResponse();
		response.setToken(jwtToken);
		return ResponseEntity.ok(response);
	}

	@GetMapping("/userinfo")
	public ResponseEntity<?> getUserInfo(Principal user) {
		UserDetails userDetails = (UserDetailsImpl) userDetailsService.loadUserByUsername(user.getName());
		return ResponseEntity.ok(userDetails);
	}

}
