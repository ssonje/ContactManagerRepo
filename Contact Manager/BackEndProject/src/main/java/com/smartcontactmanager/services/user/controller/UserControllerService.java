package com.smartcontactmanager.services.user.controller;

import java.security.Principal;

import org.springframework.data.domain.Page;

import com.smartcontactmanager.entities.contact.Contact;
import com.smartcontactmanager.entities.user.User;
import com.smartcontactmanager.entities.user.data.models.UserPassword;
import com.smartcontactmanager.payloads.APIResponse;

public interface UserControllerService {

	public APIResponse addContact(Contact contact, Principal principal);
	public APIResponse changePassword(UserPassword userPassword, Principal principal);
	public APIResponse deleteContact(Integer id, Principal principal);
	public Contact getContactByID(Integer id, Principal principal);
	public APIResponse modifyContact(Integer id, Principal principal, Contact contact);
	public User userProfile(Principal principal);
	public Page<Contact> viewContacts(Integer pageNumber, Principal principal);

}
