package com.smartcontactmanager.services.signup;

import org.springframework.web.multipart.MultipartFile;

import com.smartcontactmanager.entities.user.User;
import com.smartcontactmanager.payloads.apiResponse.APIResponse;

public interface UserSignUpService {

	public APIResponse addUser(User user, MultipartFile multipartFile);

}
