package com.smartcontactmanager.controllers;

import java.security.Principal;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smartcontactmanager.entities.Contact;
import com.smartcontactmanager.entities.User;
import com.smartcontactmanager.services.UserControllerService;

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
	public List<Contact> viewContacts(Principal principal) {
		return userControllerService.viewContacts(principal);
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

}
