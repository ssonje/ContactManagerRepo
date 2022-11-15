package com.smartcontactmanager.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.smartcontactmanager.controllers.helpers.UserControllerHelper;

@Configuration
public class UserHelperClassesConfiguration {

	@Bean
	public UserControllerHelper userControllerHelper() {
		return new UserControllerHelper();
	}

}
