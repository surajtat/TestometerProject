package com.testo.service;



import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.testo.custom_execption.ResourceNotFoundException;
import com.testo.dao.Lead_Repo;
import com.testo.entity.Lead;


@Service
@Transactional
public class Lead_serviceImpl implements Lead_service{

	
	@Autowired
	private Lead_Repo leadRepo;
	
	
	@Override
	public Lead addLead(Lead transientUser) {
		// TODO Auto-generated method stub
		return leadRepo.save(transientUser);
	}
	@Override
	public List<Lead> getAllLead() {
		
		return leadRepo.findAll();
	}
	
	
	@Override
	public Lead updateLeadDetails(long userId, Lead updatedDetachedUser) {
		if (leadRepo.existsById(userId)) {
			// =>user id found , update the details
			
			System.out.println(leadRepo.existsById(userId));
			
			
			return leadRepo.save(updatedDetachedUser);// update query : upon commit

		}
		return null;
	
	}
	@Override
	public Optional<Lead> getLeadDetail(long userId) {
		// TODO Auto-generated method stub
		return leadRepo.findById(userId);
	}
	@Override
	public String deleteLead(long id) {
		// TODO Auto-generated method stub
	
		Lead lead=leadRepo.findById(id).orElseThrow(()->new ResourceNotFoundException("user id not found"));
		
		leadRepo.deleteById(id);
		return "user Detail Delected";
	}
	

}
