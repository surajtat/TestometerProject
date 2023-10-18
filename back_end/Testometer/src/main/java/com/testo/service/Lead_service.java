package com.testo.service;

import java.util.List;
import java.util.Optional;

import com.testo.entity.Lead;

public interface Lead_service {
	
	Lead addLead(Lead transientUser);
	
	List<Lead> getAllLead();
	
	Lead updateLeadDetails(long userId, Lead updatedDetachedUser);

	Optional<Lead> getLeadDetail(long userId);
	
	String deleteLead(long id);
	

}
