package com.smartcontactmanager.services.email;

import java.util.Properties;
import java.util.Random;

import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.management.AttributeNotFoundException;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.smartcontactmanager.controllers.forgotPassword.ForgotPasswordControllerAPIResponseConstants;
import com.smartcontactmanager.dao.UserRepository;
import com.smartcontactmanager.entities.forgotPassword.ForgotPasswordEmail;
import com.smartcontactmanager.entities.forgotPassword.ForgotPasswordOTPValidation;
import com.smartcontactmanager.entities.forgotPassword.ForgotPasswordValidation;
import com.smartcontactmanager.entities.user.User;
import com.smartcontactmanager.exceptions.ResourceNotFoundException;
import com.smartcontactmanager.payloads.APIResponse;

@Service
public class ForgotPasswordServiceImpl implements ForgotPasswordService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	BCryptPasswordEncoder passwordEncoder;

	private static String gmailHost = "smtp.gmail.com";
	private static String gmailPort = "465";
	private static String gmailSSLEnabled = "true";
	private static String gmailAuth = "true";
	private static String from = "ssonje99@gmail.com";

	private static String httpSessionForgotPasswordOTPString = "forgotPasswordOTP";
	private static String httpSessionForgotPasswordOTPValidation = "forgotPasswordOTPValidationBoolean";
	private static String httpSessionForgotPasswordEmailString = "forgotPasswordEmail";

	private Random random = new Random(100000);

	@Override
	public APIResponse sendEmail(ForgotPasswordEmail forgotPasswordEmail, HttpSession httpSession)
			throws AttributeNotFoundException {
		if (forgotPasswordEmail.getEmail().length() == 0) {
			throw new ResourceNotFoundException("ForgotPasswordEmail", "Email", "Null");
		}

		User user = userRepository.loadUserByEmail(forgotPasswordEmail.getEmail());
		if (user == null) {
			throw new ResourceNotFoundException("User", "Email", "Null");
		}

		// Generate random OTP for the user
		Integer OTP = random.nextInt(999999);

		// Send email to the entered user
		String message = "Hello, your OTP is " + OTP + ".";
		String subject = "Contact Manager Application: Reset Password";
		String to = forgotPasswordEmail.getEmail();

		Properties properties = ForgotPasswordServiceImpl.setRequiredProperties();

		// Step 1 : Get the session object
		Session session = ForgotPasswordServiceImpl.getSessionObject(properties);

		// Step 2 : Compose the mail
		MimeMessage mimeMessage = new MimeMessage(session);

		try {
			mimeMessage.setFrom(ForgotPasswordServiceImpl.from);
			mimeMessage.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
			mimeMessage.setSubject(subject);
			mimeMessage.setText(message);
			Transport.send(mimeMessage);
			ForgotPasswordServiceImpl.performTaskAfterSendingOTP(user, OTP, userRepository, httpSession);
			return new APIResponse(ForgotPasswordControllerAPIResponseConstants.FORGOT_PASSWORD_EMAIL_AUTH_SUCCESS, true);
		} catch (Exception e) {
			e.printStackTrace();
			return new APIResponse(ForgotPasswordControllerAPIResponseConstants.FORGOT_PASSWORD_EMAIL_AUTH_FAILED, false);
		}
	}

	@Override
	public APIResponse authenticateForgotPasswordOTP(ForgotPasswordOTPValidation forgotPasswordOTPValidation,
			HttpSession httpSession) throws AttributeNotFoundException {
		User user = userRepository.loadUserByEmail((String) httpSession.getAttribute(ForgotPasswordServiceImpl.httpSessionForgotPasswordEmailString));
		if (user == null) {
			throw new ResourceNotFoundException("User", "Email", "Null");
		}

		// Get OTP from the User
		Integer OTPFromUser = user.getOtp();
		if (OTPFromUser == null) {
			throw new ResourceNotFoundException("ForgotPasswordOTPValidation", "otp", "Null");
		}

		// Get OTP from the HTTPSession
		Integer OTPFromHTTPSession = (Integer) httpSession.getAttribute(ForgotPasswordServiceImpl.httpSessionForgotPasswordOTPString);

		// Get OTP from the user
		Integer OTPEnteredFromUser = forgotPasswordOTPValidation.getOtp();

		// Check user's OTP and system generated OTP are matching or not
		if (Integer.compare(OTPFromUser, OTPFromHTTPSession) == 0
				&& Integer.compare(OTPFromUser, OTPEnteredFromUser) == 0) {
			httpSession.setAttribute(ForgotPasswordServiceImpl.httpSessionForgotPasswordOTPValidation, "true");
			ForgotPasswordServiceImpl.performTaskAfterAuthenticatingOTP(user, null, userRepository);
			return new APIResponse(ForgotPasswordControllerAPIResponseConstants.FORGOT_PASSWORD_OTP_AUTH_SUCCESS, true);
		}

		return new APIResponse(ForgotPasswordControllerAPIResponseConstants.FORGOT_PASSWORD_OTP_AUTH_FAILED, false);
	}

	@Override
	public APIResponse updateForgotPassword(ForgotPasswordValidation forgotPasswordValidation,
			HttpSession httpSession) throws AttributeNotFoundException {
		User user = userRepository.loadUserByEmail((String) httpSession.getAttribute(ForgotPasswordServiceImpl.httpSessionForgotPasswordEmailString));
		if (user == null) {
			throw new ResourceNotFoundException("User", "Email", "Null");
		}

		String httpSessionForgotPasswordOTPValidation = (String) httpSession.getAttribute(ForgotPasswordServiceImpl.httpSessionForgotPasswordOTPValidation);
		if (!httpSessionForgotPasswordOTPValidation.equals("true")) {
			return new APIResponse("Invalid OTP.", false);
		}

		// Update the password
		if (forgotPasswordValidation.getNewPassword().equals(forgotPasswordValidation.getConfirmedNewPassword())) {
			ForgotPasswordServiceImpl.updateNewPasswordForUser(user, forgotPasswordValidation.getNewPassword(),
					userRepository, passwordEncoder);
			ForgotPasswordServiceImpl.performTaskAfterForgottingPassword(httpSession);
			return new APIResponse(ForgotPasswordControllerAPIResponseConstants.FORGOT_PASSWORD_NEW_PASSWORD_AUTH_SUCCESS, true);
		}

		ForgotPasswordServiceImpl.performTaskAfterForgottingPassword(httpSession);
		return new APIResponse(ForgotPasswordControllerAPIResponseConstants.FORGOT_PASSWORD_NEW_PASSWORD_AUTH_FAILED, false);
	}

	// Get the System's Properties and set the required information
	private static Properties setRequiredProperties() {
		Properties properties = System.getProperties();

		// Settings up the Host
		properties.put("mail.smtp.host", ForgotPasswordServiceImpl.gmailHost);
		properties.put("mail.smtp.port", ForgotPasswordServiceImpl.gmailPort);
		properties.put("mail.smtp.ssl.enable", ForgotPasswordServiceImpl.gmailSSLEnabled);
		properties.put("mail.smtp.auth", ForgotPasswordServiceImpl.gmailAuth);

		return properties;
	}

	// Get the session object by setting up the password authentication
	private static Session getSessionObject(Properties properties) {
		Session session = Session.getInstance(properties, new Authenticator() {

			@Override
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(ForgotPasswordServiceImpl.from, "hoyi vvqd etjh rahg");
			}

		});

		return session;
	}

	private static void performTaskAfterSendingOTP(User user, 
			Integer OTP,
			UserRepository userRepository, 
			HttpSession httpSession) {
		ForgotPasswordServiceImpl.saveForgotPasswordOTP(user, OTP, userRepository);
		httpSession.setAttribute(ForgotPasswordServiceImpl.httpSessionForgotPasswordOTPString, OTP);
		httpSession.setAttribute(ForgotPasswordServiceImpl.httpSessionForgotPasswordEmailString, user.getEmail());
	}

	private static void performTaskAfterAuthenticatingOTP(User user, 
			Integer OTP, 
			UserRepository userRepository) {
		ForgotPasswordServiceImpl.saveForgotPasswordOTP(user, null, userRepository);
	}

	private static void performTaskAfterForgottingPassword(HttpSession httpSession) {
		httpSession.removeAttribute(ForgotPasswordServiceImpl.httpSessionForgotPasswordOTPString);
		httpSession.removeAttribute(ForgotPasswordServiceImpl.httpSessionForgotPasswordEmailString);
		httpSession.removeAttribute(ForgotPasswordServiceImpl.httpSessionForgotPasswordOTPValidation);
	}

	private static void saveForgotPasswordOTP(User user, Integer OTP, UserRepository userRepository) {
		user.setOtp(OTP);
		userRepository.save(user);
	}

	private static void updateNewPasswordForUser(User user, String newPassword, UserRepository userRepository,
			BCryptPasswordEncoder passwordEncoder) {
		user.setPassword(passwordEncoder.encode(newPassword));
		userRepository.save(user);
	}

}
