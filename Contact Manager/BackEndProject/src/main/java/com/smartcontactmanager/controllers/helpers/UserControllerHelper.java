package com.smartcontactmanager.controllers.helpers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import com.smartcontactmanager.dto.ContactDTO;
import com.smartcontactmanager.dto.UserDTO;
import com.smartcontactmanager.entities.contact.Contact;
import com.smartcontactmanager.entities.user.User;

public class UserControllerHelper {

	@Autowired
	private ModelMapper modelMapper;

	public UserDTO userToUserDTO(User user) {
		return modelMapper.map(user, UserDTO.class);
	}

	public User userDTOToUser(UserDTO userDTO) {
		return modelMapper.map(userDTO, User.class);
	}

	public ContactDTO contactToContactDTO(Contact contact) {
		return modelMapper.map(contact, ContactDTO.class);
	}

	public Contact contactDTOToContact(ContactDTO contactDTO) {
		return modelMapper.map(contactDTO, Contact.class);
	}

}
