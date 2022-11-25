package com.smartcontactmanager.services.signup;

import com.smartcontactmanager.dto.UserDTO;
import com.smartcontactmanager.payloads.apiResponse.APIResponse;

public interface UserSignUpService {

	public APIResponse addUser(UserDTO userDTO);

}
