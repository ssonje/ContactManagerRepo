package com.smartcontactmanager.services;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.smartcontactmanager.dao.ContactRepository;
import com.smartcontactmanager.dao.UserRepository;
import com.smartcontactmanager.entities.Contact;
import com.smartcontactmanager.entities.User;
import com.smartcontactmanager.entities.UserPassword;

@Service
public class UserControllerServiceImpl implements UserControllerService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private ContactRepository contactRepository;

	@Autowired
	private BCryptPasswordEncoder passwordEncoder;

	@Override
	public User userProfile(Principal principal) {
		return userRepository.loadUserByEmail(principal.getName());
	}

	@Override
	public Contact addContact(Contact contact, Principal principal) {
		User user = userRepository.loadUserByEmail(principal.getName());
		contact.setUser(user);
		contactRepository.save(contact);
		return contact;
	}

	@Override
	public List<Contact> viewContacts(Principal principal) {
		User user = userRepository.loadUserByEmail(principal.getName());
		List<Contact> contacts = contactRepository.findContactsByUserID(user.getId());
		return contacts;
	}

	@Override
	public Contact getContactByID(Integer id, Principal principal) {
		User user = userRepository.loadUserByEmail(principal.getName());
		Optional<Contact> contactOptional = contactRepository.findById(id);
		Contact contact = contactOptional.get();

		if (user.getId() == contact.getUser().getId()) {
			return contact;
		}

		return null;
	}

	@Override
	public Contact deleteContact(Integer id, Principal principal) {
		User user = userRepository.loadUserByEmail(principal.getName());
		Optional<Contact> contactOptional = contactRepository.findById(id);
		Contact contact = contactOptional.get();

		if (user.getId() == contact.getUser().getId()) {
			contactRepository.deleteById(id);
			return contact;
		}

		return null;
	}

	@Override
	public Contact modifyContact(Integer id, Principal principal, Contact contact) {
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

	@Override
	public User changePassword(UserPassword userPassword, Principal principal) {
		User user = userRepository.loadUserByEmail(principal.getName());

		if (passwordEncoder.matches(userPassword.getOldPassword(), user.getPassword())
				&& !(userPassword.getOldPassword().equals(userPassword.getNewPassword()))
				&& (userPassword.getNewPassword().equals(userPassword.getConfirmedNewPassword()))) {
			user.setPassword(passwordEncoder.encode(userPassword.getNewPassword()));
			userRepository.save(user);
			return user;
		}

		return null;
	}

}
