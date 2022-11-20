package com.smartcontactmanager.services.profileImage;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.smartcontactmanager.controllers.signup.ProfileImageControllerAPIResponseConstants;
import com.smartcontactmanager.dao.ProfileImageRepository;
import com.smartcontactmanager.entities.profileImage.ProfileImage;
import com.smartcontactmanager.entities.user.User;
import com.smartcontactmanager.exceptions.FileException;
import com.smartcontactmanager.payloads.apiResponse.APIResponse;

@Service
public class ProfileImageServiceImpl implements ProfileImageService {

	@Autowired
	private ProfileImageRepository profileImageRepository;

	@Override
	public APIResponse storeProfileImage(User user, MultipartFile multipartFile) {
		try {
			String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());

			// Check if the file's name contains invalid characters
            if (fileName.contains("..")) {
                throw new FileException("Sorry! Filename contains invalid path sequence " + fileName);
            }

            ProfileImage profileImage = new ProfileImage(fileName, multipartFile.getContentType(), multipartFile.getBytes());
            profileImage.setUser(user);
            profileImageRepository.save(profileImage);
            return new APIResponse(ProfileImageControllerAPIResponseConstants.PROFILE_IMAGE_ADD_PROFILE_IMAGE_SUCCESS, true);
		} catch (Exception exception) {
			return new APIResponse(exception.getMessage(), false);
		}
	}

	@Override
	public ProfileImage retriveProfileImage(String fileId) {
		try {
			Optional<ProfileImage> profileImageOptional = profileImageRepository.findById(fileId);
			return profileImageOptional.get();
		} catch (Exception exception) {
			throw new FileException("File not found with id " + fileId);
		}
    }

}
