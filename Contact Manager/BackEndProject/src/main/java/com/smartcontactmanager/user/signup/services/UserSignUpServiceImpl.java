package com.smartcontactmanager.user.signup.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smartcontactmanager.controllers.api.responses.constants.SignUpControllerAPIResponseConstants;
import com.smartcontactmanager.dao.UserRepository;
import com.smartcontactmanager.entities.payloads.APIResponse;
import com.smartcontactmanager.entities.user.User;

@Service
public class UserSignUpServiceImpl implements UserSignUpService {

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public APIResponse addUser(User user) {
		try {
			userRepository.save(user);
			return new APIResponse(SignUpControllerAPIResponseConstants.SIGNUP_ADD_USER_SUCCESS, true);
		} catch (Exception e) {
			return new APIResponse(e.getMessage(), false);
		}
	}

}
