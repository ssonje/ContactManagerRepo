package com.smartcontactmanager.controllers.signup;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smartcontactmanager.dto.UserDTO;
import com.smartcontactmanager.payloads.apiResponse.APIResponse;
import com.smartcontactmanager.services.signup.UserSignUpService;

@RestController
@RequestMapping("/api/v1/signup")
public class SignUpController {

	@Autowired
	private UserSignUpService userSignUpService;

	@PostMapping("/user")
	public ResponseEntity<?> addUser(@Valid @RequestBody UserDTO userDTO) {
		try {
			APIResponse apiResponse = userSignUpService.addUser(userDTO);
			return ResponseEntity.ok(apiResponse);
		} catch (Exception exception) {
			APIResponse apiResponse = new APIResponse(exception.getMessage(), false);
			return ResponseEntity.ok(apiResponse);
		}
	}

}
