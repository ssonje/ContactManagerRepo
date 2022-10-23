package com.smartcontactmanager.services;

import java.security.Principal;

import com.smartcontactmanager.entities.UserPasswordAuthentication;

public interface UserPasswordAuthenticationControllerService {

	public Boolean authenticateUserOldPassword(UserPasswordAuthentication userPasswordAuthentication, Principal principal);

}
