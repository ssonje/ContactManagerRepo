package com.smartcontactmanager.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.smartcontactmanager.entities.payloads.APIResponse;

@RestControllerAdvice
public class GlobalExceptionHandler {

	@ExceptionHandler(ResourceNotFoundException.class)
	public ResponseEntity<APIResponse> resourceNotFoundException(ResourceNotFoundException exception) {
		String exceptionMessage = exception.getMessage();
		APIResponse response = new APIResponse(exceptionMessage, false);
		return new ResponseEntity<APIResponse>(response, HttpStatus.NOT_FOUND);
	}

}
