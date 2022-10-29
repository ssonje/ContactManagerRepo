package com.smartcontactmanager.services.user.password.authentication.controller;

import java.security.Principal;

import com.smartcontactmanager.entities.UserPasswordAuthentication;

public interface UserPasswordAuthenticationControllerService {

	public Boolean authenticateUserOldPassword(UserPasswordAuthentication userPasswordAuthentication, Principal principal);

}
