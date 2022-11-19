package com.smartcontactmanager.user.signup.services;

import org.springframework.web.multipart.MultipartFile;

import com.smartcontactmanager.entities.payloads.APIResponse;
import com.smartcontactmanager.entities.user.User;

public interface UserSignUpService {

	public APIResponse addUser(User user, MultipartFile multipartFile);

}
