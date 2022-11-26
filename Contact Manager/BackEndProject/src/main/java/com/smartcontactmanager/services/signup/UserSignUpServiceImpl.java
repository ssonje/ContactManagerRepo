package com.smartcontactmanager.services.signup;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.smartcontactmanager.controllers.signup.SignUpControllerAPIResponseConstants;
import com.smartcontactmanager.controllers.signup.SignUpControllerHelper;
import com.smartcontactmanager.controllers.user.UserControllerHelper;
import com.smartcontactmanager.dao.UserRepository;
import com.smartcontactmanager.dto.UserDTO;
import com.smartcontactmanager.entities.user.User;
import com.smartcontactmanager.payloads.apiResponse.APIResponse;

@Service
public class UserSignUpServiceImpl implements UserSignUpService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private UserControllerHelper userControllerHelper;

	@Autowired
	private BCryptPasswordEncoder passwordEncoder;

	@Override
	public APIResponse addUser(UserDTO userDTO) {
		try {
			User user = userControllerHelper.userDTOToUser(userDTO);
			user = SignUpControllerHelper.setDefaultPropertiesForUser(user, passwordEncoder);
			userRepository.save(user);
			return new APIResponse(SignUpControllerAPIResponseConstants.SIGNUP_ADD_USER_SUCCESS, true);
        } catch (Exception exception) {
            return new APIResponse(exception.getMessage(), false);
        }
	}

}
