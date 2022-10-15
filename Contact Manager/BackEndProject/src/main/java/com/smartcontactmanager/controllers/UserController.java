package com.smartcontactmanager.controllers;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smartcontactmanager.dao.ContactRepository;
import com.smartcontactmanager.dao.UserRepository;
import com.smartcontactmanager.entities.Contact;
import com.smartcontactmanager.entities.User;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private ContactRepository contactRepository;

	@GetMapping("/profile")
	public User userProfile(Principal principal) {
		return userRepository.loadUserByEmail(principal.getName());
	}

	@PostMapping("/add/contact")
	public Contact addContact(@Valid @RequestBody Contact contact, Principal principal) {
		User user = userRepository.loadUserByEmail(principal.getName());
		contact.setUser(user);
		contactRepository.save(contact);
		return contact;
	}

	@GetMapping("/view/contacts")
	public List<Contact> viewContacts(Principal principal) {
		User user = userRepository.loadUserByEmail(principal.getName());
		List<Contact> contacts = contactRepository.findContactsByUserID(user.getId());
		return contacts;
	}

	@GetMapping("/view/contact/{id}")
	public Contact getContactByID(@PathVariable("id") Integer id, Principal principal) {
		User user = userRepository.loadUserByEmail(principal.getName());
		Optional<Contact> contactOptional = contactRepository.findById(id);
		Contact contact = contactOptional.get();

		if (user.getId() == contact.getUser().getId()) {
			return contact;
		}

		return null;
	}

	@PostMapping("/delete/contact/{id}")
	public Contact deleteContact(@PathVariable("id") Integer id, Principal principal) {
		User user = userRepository.loadUserByEmail(principal.getName());
		Optional<Contact> contactOptional = contactRepository.findById(id);
		Contact contact = contactOptional.get();

		if (user.getId() == contact.getUser().getId()) {
			contactRepository.deleteById(id);
			return contact;
		}

		return null;
	}

	@PostMapping("/modify/contact/{id}")
	public Contact modifyContact(@PathVariable("id") Integer id, Principal principal, @Valid @RequestBody Contact contact) {
		User user = userRepository.loadUserByEmail(principal.getName());
		Optional<Contact> contactOptional = contactRepository.findById(id);
		Contact contactFromID = contactOptional.get();

		if ((user.getId() == contactFromID.getUser().getId()) && (contactFromID.getId() == contact.getId())) {
			contactFromID.setDescription(contact.getDescription());
			contactFromID.setEmail(contact.getEmail());
			contactFromID.setImageURL(contact.getImageURL());
			contactFromID.setMobileNumber(contact.getMobileNumber());
			contactFromID.setName(contact.getName());
			contactFromID.setNickname(contact.getNickname());
			contactFromID.setWork(contact.getWork());
			contactRepository.save(contactFromID);
			return contactFromID;
		}

		return null;
	}

}
