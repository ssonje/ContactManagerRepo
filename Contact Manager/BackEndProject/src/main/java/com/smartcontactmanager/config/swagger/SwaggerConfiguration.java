package com.smartcontactmanager.config.swagger;

import java.util.Collections;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

@Configuration
public class SwaggerConfiguration {

	@Bean
	public Docket apiDocket() {
		return new Docket(DocumentationType.SWAGGER_2)
				.apiInfo(getInfo())
				.select()
				.apis(RequestHandlerSelectors.any())
				.paths(PathSelectors.any())
				.build();
	}
	
	private ApiInfo getInfo() {
		return new ApiInfo(
				"Contact Management System",
				"This project is developed by Sanket Sonje",
				"1.0",
				"Terms of Service - Need to be updated",
				new Contact("Sanket Sonje", "https://github.com/ssonje", "ssonje99@gmail.com"),
				"License API's",
				"License URL's", 
				Collections.emptyList());
	}

}
