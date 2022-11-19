package com.smartcontactmanager.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.smartcontactmanager.entities.profile.image.ProfileImage;

@Repository
public interface ProfileImageRepository extends JpaRepository<ProfileImage, String> {

}
