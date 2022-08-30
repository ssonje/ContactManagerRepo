package com.smartcontactmanager.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smartcontactmanager.dao.UserRepository;
import com.smartcontactmanager.entities.User;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public User addUser(User user) {
		userRepository.save(user);
		return user;
	}

}
