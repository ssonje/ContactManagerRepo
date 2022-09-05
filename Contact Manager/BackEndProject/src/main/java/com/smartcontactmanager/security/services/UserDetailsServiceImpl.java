package com.smartcontactmanager.security.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.smartcontactmanager.dao.UserRepository;
import com.smartcontactmanager.entities.User;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private UserRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		try {
			User user = userRepository.loadUserByEmail(username);
			return new UserDetailsImpl(user);
		} catch (Exception e) {
			throw new UsernameNotFoundException("Could not found user!");
		}
	}

}
