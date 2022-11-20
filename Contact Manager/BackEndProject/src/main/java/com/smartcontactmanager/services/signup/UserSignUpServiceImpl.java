package com.smartcontactmanager.services.signup;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.smartcontactmanager.controllers.signup.SignUpControllerAPIResponseConstants;
import com.smartcontactmanager.controllers.signup.SignUpControllerHelper;
import com.smartcontactmanager.dao.UserRepository;
import com.smartcontactmanager.entities.user.User;
import com.smartcontactmanager.payloads.apiResponse.APIResponse;
import com.smartcontactmanager.services.profileImage.ProfileImageService;

@Service
public class UserSignUpServiceImpl implements UserSignUpService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private ProfileImageService profileImageService;

	@Autowired
	private BCryptPasswordEncoder passwordEncoder;

	@Override
	public APIResponse addUser(User user, MultipartFile multipartFile) {
		try {
			user = SignUpControllerHelper.setDefaultPropertiesForUser(user, passwordEncoder);

			APIResponse apiResponseOfStoreProfileImage = profileImageService.storeProfileImage(user, multipartFile);

			if (!apiResponseOfStoreProfileImage.getSuccess()) {
				return new APIResponse(apiResponseOfStoreProfileImage.getMessage(), false);
			}

			userRepository.save(user);
			return new APIResponse(SignUpControllerAPIResponseConstants.SIGNUP_ADD_USER_SUCCESS, true);
        } catch (Exception exception) {
            return new APIResponse(exception.getMessage(), false);
        }
	}

}
