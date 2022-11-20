package com.smartcontactmanager.controllers.signup;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.smartcontactmanager.entities.user.User;
import com.smartcontactmanager.payloads.apiResponse.APIResponse;
import com.smartcontactmanager.services.signup.UserSignUpService;

@RestController
@RequestMapping("/api/signup")
public class SignUpController {

	@Autowired
	private UserSignUpService userSignUpService;

	@RequestMapping(value = "/add/user" , method = RequestMethod.POST, consumes={ MediaType.MULTIPART_FORM_DATA_VALUE })
	public ResponseEntity<?> addUser(@Valid @RequestPart User user, @RequestPart MultipartFile multipartFile) {
		try {
			APIResponse apiResponse = userSignUpService.addUser(user, multipartFile);
			return ResponseEntity.ok(apiResponse);
		} catch (Exception exception) {
			APIResponse apiResponse = new APIResponse(exception.getMessage(), false);
			return ResponseEntity.ok(apiResponse);
		}
	}

}
