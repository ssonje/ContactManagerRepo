package com.smartcontactmanager.services.user.controller;

import java.security.Principal;
import java.util.List;

import org.springframework.data.domain.Page;

import com.smartcontactmanager.entities.contact.Contact;
import com.smartcontactmanager.entities.user.User;
import com.smartcontactmanager.entities.user.data.models.UserPassword;

public interface UserControllerService {

	public User userProfile(Principal principal);
	public Contact addContact(Contact contact, Principal principal);
	public Page<Contact> viewContacts(Integer pageNumber, Principal principal);
	public Contact getContactByID(Integer id, Principal principal);
	public Contact deleteContact(Integer id, Principal principal);
	public Contact modifyContact(Integer id, Principal principal, Contact contact);
	public User changePassword(UserPassword userPassword, Principal principal);

}
