package com.testo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.testo.entity.Lead;

public interface Lead_Repo extends JpaRepository<Lead, Long> {
	
	

}
