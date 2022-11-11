package com.smartcontactmanager.exceptions;

public class ResourceNotFoundException extends RuntimeException {

	String resourceName;
	String resourceFieldName;
	String resourceFieldValue;

	public ResourceNotFoundException(String resourceName, String resourceFieldName, String resourceFieldValue) {
		super(String.format("%s not found with %s : %s", resourceName, resourceFieldName, resourceFieldValue));
		this.resourceName = resourceName;
		this.resourceFieldName = resourceFieldName;
		this.resourceFieldValue = resourceFieldValue;
	}

}
