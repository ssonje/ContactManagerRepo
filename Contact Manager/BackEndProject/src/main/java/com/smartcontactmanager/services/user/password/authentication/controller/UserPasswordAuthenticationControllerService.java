package com.smartcontactmanager.services.user.password.authentication.controller;

import java.security.Principal;

import com.smartcontactmanager.payloads.apiResponse.APIResponse;
import com.smartcontactmanager.payloads.user.password.UserPasswordAuthentication;

public interface UserPasswordAuthenticationControllerService {

	public APIResponse authenticateUserOldPassword(UserPasswordAuthentication userPasswordAuthentication, Principal principal);

}
