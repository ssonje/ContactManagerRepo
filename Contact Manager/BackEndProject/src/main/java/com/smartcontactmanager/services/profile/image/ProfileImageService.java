package com.smartcontactmanager.services.profile.image;

import org.springframework.web.multipart.MultipartFile;

import com.smartcontactmanager.entities.profileImage.ProfileImage;
import com.smartcontactmanager.entities.user.User;
import com.smartcontactmanager.payloads.APIResponse;

public interface ProfileImageService {

	public APIResponse storeProfileImage(User user, MultipartFile multipartFile);
	public ProfileImage retriveProfileImage(String fileId);

}
