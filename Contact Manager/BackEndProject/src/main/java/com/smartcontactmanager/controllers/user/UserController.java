package com.smartcontactmanager.controllers.user;

import java.security.Principal;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smartcontactmanager.dto.UserDTO;
import com.smartcontactmanager.entities.user.User;
import com.smartcontactmanager.payloads.apiResponse.APIResponse;
import com.smartcontactmanager.payloads.user.password.UserPassword;
import com.smartcontactmanager.services.user.UserControllerService;

@RestController
@RequestMapping("/api/v1/user")
public class UserController {

	@Autowired
	private UserControllerService userControllerService;

	@Autowired
	private UserControllerHelper userControllerHelper;

	@PostMapping("/settings/password")
	public ResponseEntity<?> changePassword(@Valid @RequestBody UserPassword userPassword, Principal principal) {
		APIResponse apiResponse = userControllerService.changePassword(userPassword, principal);
		return ResponseEntity.ok(apiResponse);
	}

	@GetMapping("/profile")
	public ResponseEntity<?> userProfile(Principal principal) {
		User userResponse = userControllerService.userProfile(principal);
		UserDTO userDTOResponse = userControllerHelper.userToUserDTO(userResponse);
		return ResponseEntity.ok(userDTOResponse);
	}

}
