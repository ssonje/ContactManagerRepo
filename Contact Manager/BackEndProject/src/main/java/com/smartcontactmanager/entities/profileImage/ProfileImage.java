package com.smartcontactmanager.entities.profileImage;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.smartcontactmanager.entities.user.User;

@Entity
@Table(name = "PROFILE_IMAGE")
public class ProfileImage {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	private String fileName;

	private String fileType;

	@Lob
	private byte[] data;

	@OneToOne(cascade = {CascadeType.ALL})
	@JsonIgnore
	private User user;

	public ProfileImage() {
	}

	public ProfileImage(String fileName, String fileType, byte[] data) {
		this.fileName = fileName;
		this.fileType = fileType;
		this.data = data;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public String getFileType() {
		return fileType;
	}

	public void setFileType(String fileType) {
		this.fileType = fileType;
	}

	public byte[] getData() {
		return data;
	}

	public void setData(byte[] data) {
		this.data = data;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

}
