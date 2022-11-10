package com.smartcontactmanager.controllers;

import java.security.Principal;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.smartcontactmanager.entities.contact.Contact;
import com.smartcontactmanager.entities.user.User;
import com.smartcontactmanager.entities.user.data.models.UserPassword;
import com.smartcontactmanager.services.user.controller.UserControllerService;

@RestController
@RequestMapping("/api/user")
public class UserController {

	@Autowired
	private UserControllerService userControllerService;

	@GetMapping("/profile")
	public ResponseEntity<?> userProfile(Principal principal) {
		User userResponse = userControllerService.userProfile(principal);
		return ResponseEntity.ok(userResponse);
	}

	@PostMapping("/add/contact")
	public ResponseEntity<?> addContact(@Valid @RequestBody Contact contact, Principal principal) {
		Contact contactResponse = userControllerService.addContact(contact, principal);
		return ResponseEntity.ok(contactResponse);
	}

	@GetMapping("/view/contacts")
	public ResponseEntity<?> viewContacts(@RequestParam(value = "pageNumber", defaultValue = "0", required = false) Integer pageNumber, 
			Principal principal) {
		Page<Contact> pagableResponse = userControllerService.viewContacts(pageNumber, principal);
		return ResponseEntity.ok(pagableResponse);
	}

	@GetMapping("/view/contact/{id}")
	public ResponseEntity<?> getContactByID(@PathVariable("id") Integer id, Principal principal) {
		Contact contactResponse = userControllerService.getContactByID(id, principal);
		return ResponseEntity.ok(contactResponse);
	}

	@PostMapping("/delete/contact/{id}")
	public ResponseEntity<?> deleteContact(@PathVariable("id") Integer id, Principal principal) {
		Contact contactResponse = userControllerService.deleteContact(id, principal);
		return ResponseEntity.ok(contactResponse);
	}

	@PostMapping("/modify/contact/{id}")
	public ResponseEntity<?> modifyContact(@PathVariable("id") Integer id, Principal principal, @Valid @RequestBody Contact contact) {
		Contact contactResponse = userControllerService.modifyContact(id, principal, contact);
		return ResponseEntity.ok(contactResponse);
	}

	@PostMapping("/settings/password")
	public ResponseEntity<?> changePassword(@Valid @RequestBody UserPassword userPassword, Principal principal) {
		User userResponse = userControllerService.changePassword(userPassword, principal);
		return ResponseEntity.ok(userResponse);
	}

}
