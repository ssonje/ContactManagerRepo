package com.smartcontactmanager.services.contact;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smartcontactmanager.dao.ContactRepository;
import com.smartcontactmanager.entities.contact.Contact;

@Service
public class UserContactServiceImpl implements UserContactService {

	@Autowired
	private ContactRepository contactRepository;

	@Override
	public Contact addContact(Contact contact) {
		contactRepository.save(contact);
		return contact;
	}

}
