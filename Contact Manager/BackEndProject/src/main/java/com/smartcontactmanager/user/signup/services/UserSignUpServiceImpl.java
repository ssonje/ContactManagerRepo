package com.smartcontactmanager.user.signup.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smartcontactmanager.dao.UserRepository;
import com.smartcontactmanager.entities.user.User;

@Service
public class UserSignUpServiceImpl implements UserSignUpService {

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public User addUser(User user) {
		userRepository.save(user);
		return user;
	}

}
