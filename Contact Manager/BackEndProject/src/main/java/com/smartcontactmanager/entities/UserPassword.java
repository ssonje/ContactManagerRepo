package com.smartcontactmanager.entities;

import javax.validation.constraints.Size;

public class UserPassword {

	@Size(min = 6, max = 75, message = "Password at least have 6 and maximum 75 charaters")
	private String oldPassword;

	@Size(min = 6, max = 75, message = "Password at least have 6 and maximum 75 charaters")
	private String newPassword;

	@Size(min = 6, max = 75, message = "Password at least have 6 and maximum 75 charaters")
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
