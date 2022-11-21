package com.smartcontactmanager.controllers.contact;

import java.security.Principal;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.smartcontactmanager.controllers.user.UserControllerHelper;
import com.smartcontactmanager.dto.ContactDTO;
import com.smartcontactmanager.entities.contact.Contact;
import com.smartcontactmanager.payloads.apiResponse.APIResponse;
import com.smartcontactmanager.services.user.UserControllerService;

@RestController
@RequestMapping("/api/v1/user")
public class ContactController {

	@Autowired
	private UserControllerService userControllerService;

	@Autowired
	private UserControllerHelper userControllerHelper;

	@PostMapping("/contact/new")
	public ResponseEntity<?> addContact(@Valid @RequestBody Contact contact, Principal principal) {
		APIResponse apiResponse = userControllerService.addContact(contact, principal);
		return ResponseEntity.ok(apiResponse);
	}

	@PostMapping("/contact/delete/{id}")
	public ResponseEntity<?> deleteContact(@PathVariable("id") Integer id, Principal principal) {
		APIResponse apiResponse = userControllerService.deleteContact(id, principal);
		return ResponseEntity.ok(apiResponse);
	}

	@GetMapping("/contact/{id}")
	public ResponseEntity<?> getContactByID(@PathVariable("id") Integer id, Principal principal) {
		Contact contactResponse = userControllerService.getContactByID(id, principal);
		ContactDTO contactDTOResponse = userControllerHelper.contactToContactDTO(contactResponse);
		return ResponseEntity.ok(contactDTOResponse);
	}	

	@PostMapping("/contact/modify/{id}")
	public ResponseEntity<?> modifyContact(@PathVariable("id") Integer id, Principal principal, @Valid @RequestBody Contact contact) {
		APIResponse apiResponse = userControllerService.modifyContact(id, principal, contact);
		return ResponseEntity.ok(apiResponse);
	}

	@GetMapping("/contacts")
	public ResponseEntity<?> viewContacts(@RequestParam(value = "pageNumber", defaultValue = "0", required = false) Integer pageNumber, 
			Principal principal) {
		Page<Contact> pagableResponse = userControllerService.viewContacts(pageNumber, principal);
		return ResponseEntity.ok(pagableResponse);
	}

}
