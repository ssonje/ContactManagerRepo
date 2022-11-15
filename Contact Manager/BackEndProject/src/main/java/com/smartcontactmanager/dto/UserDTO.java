package com.smartcontactmanager.dto;

import java.util.ArrayList;
import java.util.List;

import com.smartcontactmanager.entities.contact.Contact;

public class UserDTO {

	private String name;
	private String email;
	private String role;
	private String imegeURL;
	private String about;
	private boolean enabled;
	private List<Contact> contacts = new ArrayList<Contact>();

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

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getImegeURL() {
		return imegeURL;
	}

	public void setImegeURL(String imegeURL) {
		this.imegeURL = imegeURL;
	}

	public String getAbout() {
		return about;
	}

	public void setAbout(String about) {
		this.about = about;
	}

	public boolean isEnabled() {
		return enabled;
	}

	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}

	public List<Contact> getContacts() {
		return contacts;
	}

	public void setContacts(List<Contact> contacts) {
		this.contacts = contacts;
	}
}
