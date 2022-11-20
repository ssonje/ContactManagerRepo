package com.smartcontactmanager.services.profileImage;

import org.springframework.web.multipart.MultipartFile;

import com.smartcontactmanager.entities.profileImage.ProfileImage;
import com.smartcontactmanager.entities.user.User;
import com.smartcontactmanager.payloads.apiResponse.APIResponse;

public interface ProfileImageService {

	public APIResponse storeProfileImage(User user, MultipartFile multipartFile);
	public ProfileImage retriveProfileImage(String fileId);

}
