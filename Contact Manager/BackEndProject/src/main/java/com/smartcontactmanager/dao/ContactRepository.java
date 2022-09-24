package com.smartcontactmanager.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.smartcontactmanager.entities.Contact;

public interface ContactRepository extends JpaRepository<Contact, Integer> {

}
