package com.smartcontactmanager.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.smartcontactmanager.entities.user.User;

public interface UserRepository extends JpaRepository<User, Integer> {

	@Query("select user from User user where user.email = :email")
	public User loadUserByEmail(@Param("email") String email);

}
