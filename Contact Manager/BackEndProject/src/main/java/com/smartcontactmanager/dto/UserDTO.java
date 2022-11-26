package com.smartcontactmanager.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.Size;

public class UserDTO {

	@Size(min = 2, max = 100, message = "Name at least have 2 and maximum 100 charaters.")
	private String name;

	@Email(regexp = "[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$", message = "Please enter a valid email-ID.")
	private String email;

	@Size(min = 6, max = 75, message = "Password at least have 6 and maximum 75 charaters.")
	private String password;

	@Size(max = 500, message = "About should have maximum 500 charaters.")
	private String about;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAbout() {
		return about;
	}

	public void setAbout(String about) {
		this.about = about;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
