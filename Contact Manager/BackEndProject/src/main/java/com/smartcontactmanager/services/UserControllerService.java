package com.smartcontactmanager.services;

import java.security.Principal;
import java.util.List;

import com.smartcontactmanager.entities.Contact;
import com.smartcontactmanager.entities.User;

public interface UserControllerService {

	public User userProfile(Principal principal);
	public Contact addContact(Contact contact, Principal principal);
	public List<Contact> viewContacts(Principal principal);
	public Contact getContactByID(Integer id, Principal principal);
	public Contact deleteContact(Integer id, Principal principal);
	public Contact modifyContact(Integer id, Principal principal, Contact contact);

}
