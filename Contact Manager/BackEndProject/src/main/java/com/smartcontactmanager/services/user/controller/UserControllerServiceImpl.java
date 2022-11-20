package com.smartcontactmanager.services.user.controller;

import java.security.Principal;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.smartcontactmanager.controllers.user.UserControllerAPIResponseConstants;
import com.smartcontactmanager.dao.ContactRepository;
import com.smartcontactmanager.dao.UserRepository;
import com.smartcontactmanager.entities.contact.Contact;
import com.smartcontactmanager.entities.user.User;
import com.smartcontactmanager.entities.user.data.models.UserPassword;
import com.smartcontactmanager.exceptions.ResourceNotFoundException;
import com.smartcontactmanager.payloads.APIResponse;

@Service
public class UserControllerServiceImpl implements UserControllerService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private ContactRepository contactRepository;

	@Autowired
	private BCryptPasswordEncoder passwordEncoder;

	private static Integer pageSize = 5;

	@Override
	public APIResponse addContact(Contact contact, Principal principal) {
		User user = userRepository.loadUserByEmail(principal.getName());

		try {
			contact.setUser(user);
			contactRepository.save(contact);
			return new APIResponse(UserControllerAPIResponseConstants.ADD_CONTACT_SUCCESS, true);
		} catch (Exception e) {
			return new APIResponse(e.getMessage(), false);
		}
	}

	@Override
	public APIResponse changePassword(UserPassword userPassword, Principal principal) {
		User user = userRepository.loadUserByEmail(principal.getName());

		if (passwordEncoder.matches(userPassword.getOldPassword(), user.getPassword())) {
			if (!(userPassword.getOldPassword().equals(userPassword.getNewPassword()))) {
				if (userPassword.getNewPassword().equals(userPassword.getConfirmedNewPassword())) {
					user.setPassword(passwordEncoder.encode(userPassword.getNewPassword()));
					userRepository.save(user);
					return new APIResponse(UserControllerAPIResponseConstants.PASSWORD_CHANGE_SUCCESS, true);
				} else {
					return new APIResponse(UserControllerAPIResponseConstants.PASSWORD_CHANGE_NEW_AND_CONFIRMED_PASSWORD_VALIDATION_FALIED, false);
				}
			} else {
				return new APIResponse(UserControllerAPIResponseConstants.PASSWORD_CHANGE_OLD_AND_NEW_PASSWORD_VALIDATION_FALIED, false);
			}
		}

		return new APIResponse(UserControllerAPIResponseConstants.PASSWORD_CHANGE_OLD_CONFIRMED_VALIDATION_FALIED, false);

	}

	@Override
	public APIResponse deleteContact(Integer id, Principal principal) {
		User user = userRepository.loadUserByEmail(principal.getName());

		try {
			Optional<Contact> contactOptional = contactRepository.findById(id);
			Contact contact = contactOptional.get();

			if (user.getId() == contact.getUser().getId()) {
				contactRepository.deleteById(id);
				return new APIResponse(UserControllerAPIResponseConstants.DELETE_CONTACT_SUCCESS, true);
			} else {
				return new APIResponse(UserControllerAPIResponseConstants.DELETE_CONTACT_FAILED, false);
			}
		} catch (Exception e) {
			throw new ResourceNotFoundException("User", "ID", id.toString());
		}
	}

	@Override
	public Contact getContactByID(Integer id, Principal principal) {
		User user = userRepository.loadUserByEmail(principal.getName());

		try {
			Optional<Contact> contactOptional = contactRepository.findById(id);
			Contact contact = contactOptional.get();

			if (user.getId() == contact.getUser().getId()) {
				return contact;
			}

			return null;
		} catch (Exception e) {
			throw new ResourceNotFoundException("User", "ID", id.toString());
		}
	}

	@Override
	public APIResponse modifyContact(Integer id, Principal principal, Contact contact) {
		User user = userRepository.loadUserByEmail(principal.getName());

		try {
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
				return new APIResponse(UserControllerAPIResponseConstants.MODIFIED_CONTACT_SUCCESS, true);
			} else {
				return new APIResponse(UserControllerAPIResponseConstants.MODIFIED_CONTACT_FAILED, false);
			}
		} catch (Exception e) {
			throw new ResourceNotFoundException("User", "ID", id.toString());
		}
	}

	@Override
	public User userProfile(Principal principal) {
		return userRepository.loadUserByEmail(principal.getName());
	}

	@Override
	public Page<Contact> viewContacts(Integer pageNumber, Principal principal) {
		User user = userRepository.loadUserByEmail(principal.getName());
		Pageable pageable = PageRequest.of(pageNumber, UserControllerServiceImpl.pageSize);
		Page<Contact> contactPage= contactRepository.findContactsByUserID(user.getId(), pageable);
		return contactPage;
	}

}
