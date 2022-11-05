package com.smartcontactmanager.controllers;

import java.security.Principal;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
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
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserControllerService userControllerService;

	@GetMapping("/profile")
	public User userProfile(Principal principal) {
		return userControllerService.userProfile(principal);
	}

	@PostMapping("/add/contact")
	public Contact addContact(@Valid @RequestBody Contact contact, Principal principal) {
		return userControllerService.addContact(contact, principal);
	}

	@GetMapping("/view/contacts")
	public Page<Contact> viewContacts(@RequestParam(value = "pageNumber", defaultValue = "0", required = false) Integer pageNumber, 
			Principal principal) {
		return userControllerService.viewContacts(pageNumber, principal);
	}

	@GetMapping("/view/contact/{id}")
	public Contact getContactByID(@PathVariable("id") Integer id, Principal principal) {
		return userControllerService.getContactByID(id, principal);
	}

	@PostMapping("/delete/contact/{id}")
	public Contact deleteContact(@PathVariable("id") Integer id, Principal principal) {
		return userControllerService.deleteContact(id, principal);
	}

	@PostMapping("/modify/contact/{id}")
	public Contact modifyContact(@PathVariable("id") Integer id, Principal principal, @Valid @RequestBody Contact contact) {
		return userControllerService.modifyContact(id, principal, contact);
	}

	@PostMapping("/settings/password")
	public User changePassword(@Valid @RequestBody UserPassword userPassword, Principal principal) {
		return userControllerService.changePassword(userPassword, principal);
	}

}
