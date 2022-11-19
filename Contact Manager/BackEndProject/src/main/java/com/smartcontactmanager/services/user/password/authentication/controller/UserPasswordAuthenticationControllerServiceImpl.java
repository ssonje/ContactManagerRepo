package com.smartcontactmanager.services.user.password.authentication.controller;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.smartcontactmanager.controllers.passwordAuth.UserPasswordAuthenticationControllerAPIResponseConstants;
import com.smartcontactmanager.dao.UserRepository;
import com.smartcontactmanager.entities.payloads.APIResponse;
import com.smartcontactmanager.entities.user.User;
import com.smartcontactmanager.entities.user.data.models.UserPasswordAuthentication;

@Service
public class UserPasswordAuthenticationControllerServiceImpl implements UserPasswordAuthenticationControllerService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private BCryptPasswordEncoder passwordEncoder;

	@Override
	public APIResponse authenticateUserOldPassword(UserPasswordAuthentication userPasswordAuthentication, Principal principal) {
		User user = userRepository.loadUserByEmail(principal.getName());
		return passwordEncoder.matches(userPasswordAuthentication.getPassword(), user.getPassword())
				? new APIResponse(UserPasswordAuthenticationControllerAPIResponseConstants.USER_OLD_PASSWORD_AUTH_SUCCESS, true)
				: new APIResponse(UserPasswordAuthenticationControllerAPIResponseConstants.USER_OLD_PASSWORD_AUTH_FAILED, false);
	}

}
