package com.smartcontactmanager.services.user.password.authentication.controller;

import java.security.Principal;

import com.smartcontactmanager.entities.payloads.APIResponse;
import com.smartcontactmanager.entities.user.data.models.UserPasswordAuthentication;

public interface UserPasswordAuthenticationControllerService {

	public APIResponse authenticateUserOldPassword(UserPasswordAuthentication userPasswordAuthentication, Principal principal);

}
