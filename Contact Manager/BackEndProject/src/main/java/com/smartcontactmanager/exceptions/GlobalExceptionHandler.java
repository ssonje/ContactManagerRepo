package com.smartcontactmanager.exceptions;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.smartcontactmanager.payloads.APIResponse;

@RestControllerAdvice
public class GlobalExceptionHandler {

	@ExceptionHandler(FileException.class)
	public ResponseEntity<APIResponse> handleFileExceptionException(FileException exception) {
		String exceptionMessage = exception.getMessage();
		APIResponse response = new APIResponse(exceptionMessage, false);
		return new ResponseEntity<APIResponse>(response, HttpStatus.NOT_FOUND);
	}

	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<Map<String, String>> handleMethodArgumentNotValidException(MethodArgumentNotValidException exception) {
		Map<String, String> responseMap = new HashMap<>();
		exception.getBindingResult().getAllErrors().forEach((error) -> {
			String fieldName = ((FieldError) error).getField();
			String message = error.getDefaultMessage();
			responseMap.put(fieldName, message);
		});
		return new ResponseEntity<Map<String,String>>(responseMap, HttpStatus.BAD_REQUEST);
	}

	@ExceptionHandler(ResourceNotFoundException.class)
	public ResponseEntity<APIResponse> handleResourceNotFoundException(ResourceNotFoundException exception) {
		String exceptionMessage = exception.getMessage();
		APIResponse response = new APIResponse(exceptionMessage, false);
		return new ResponseEntity<APIResponse>(response, HttpStatus.NOT_FOUND);
	}

}
