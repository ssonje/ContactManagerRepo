package com.smartcontactmanager.payloads.apiResponse;

public class APIResponse {

	String message;
	Boolean success;

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Boolean getSuccess() {
		return success;
	}

	public void setSuccess(Boolean success) {
		this.success = success;
	}

	public APIResponse(String message, Boolean success) {
		super();
		this.message = message;
		this.success = success;
	}

}
