package com.testo.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.testo.entity.Lead;
import com.testo.service.Lead_service;




@CrossOrigin
@RestController
@RequestMapping("/user")
public class User_Controller {
	
	
	@Autowired 
	private Lead_service service;
	

		
		@PostMapping("/lead")
		public ResponseEntity<?> addLead(@RequestBody Lead user)
		{
			//System.out.println("password "+user.getPassword());
			
			System.out.println("Controller called");
			
			return new ResponseEntity<>(service.addLead(user), HttpStatus.CREATED);
		

	}
		
		@GetMapping("/lead") // => read only access
		public ResponseEntity<?> fetchUserDetails() {
			System.out.println("in fetch user details");
			// ResponseEntity(T body, HttpStatus status)
			return new ResponseEntity<>(service.getAllLead(), HttpStatus.OK);
		}

		@PutMapping("/{id}")
		public ResponseEntity<?> updateUserDetails(@RequestBody Lead detachedUser, @PathVariable Long id)
		{
			System.out.println("in update " + detachedUser + " id=" + id);
			return new ResponseEntity<>(service.updateLeadDetails(id, detachedUser),HttpStatus.OK);
		}
		
		
		@GetMapping("/lead/{id}") // => read only access
		public ResponseEntity<?> fetchUserDetails(@PathVariable Long id) {
			System.out.println("in fetch user details "+id);
			// ResponseEntity(T body, HttpStatus status)
			return new ResponseEntity<>(service.getLeadDetail(id), HttpStatus.OK);
		}
		
		
		@DeleteMapping("/lead/{id}") // => read only access
		public ResponseEntity<?> deleteLead(@PathVariable long id) {
			System.out.println("in fetch user details");
			// ResponseEntity(T body, HttpStatus status)
			return new ResponseEntity<>(service.deleteLead(id), HttpStatus.NO_CONTENT);
		}

}
