package com.smartcontactmanager.services.profile.image;

import org.springframework.web.multipart.MultipartFile;

import com.smartcontactmanager.entities.payloads.APIResponse;
import com.smartcontactmanager.entities.profile.image.ProfileImage;
import com.smartcontactmanager.entities.user.User;

public interface ProfileImageService {

	public APIResponse storeProfileImage(User user, MultipartFile multipartFile);
	public ProfileImage retriveProfileImage(String fileId);

}
