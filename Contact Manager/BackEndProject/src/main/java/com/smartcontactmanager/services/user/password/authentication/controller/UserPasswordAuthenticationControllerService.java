package com.smartcontactmanager.services.user.password.authentication.controller;

import java.security.Principal;

import com.smartcontactmanager.entities.user.data.models.UserPasswordAuthentication;
import com.smartcontactmanager.payloads.APIResponse;

public interface UserPasswordAuthenticationControllerService {

	public APIResponse authenticateUserOldPassword(UserPasswordAuthentication userPasswordAuthentication, Principal principal);

}
