package com.smartcontactmanager.entities.user.data.models;

public class UserPassword {

	private String oldPassword;

	private String newPassword;

	private String confirmedNewPassword;

	public String getOldPassword() {
		return oldPassword;
	}

	public void setOldPassword(String oldPassword) {
		this.oldPassword = oldPassword;
	}

	public String getNewPassword() {
		return newPassword;
	}

	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}

	public String getConfirmedNewPassword() {
		return confirmedNewPassword;
	}

	public void setConfirmedNewPassword(String confirmedNewPassword) {
		this.confirmedNewPassword = confirmedNewPassword;
	}

}
