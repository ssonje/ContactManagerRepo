package com.smartcontactmanager.payloads.forgotPassword;

public class ForgotPasswordValidation {

	private String newPassword;
	private String confirmedNewPassword;

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
