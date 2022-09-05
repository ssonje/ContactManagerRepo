package com.smartcontactmanager.security.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.smartcontactmanager.security.config.helpers.JWTTokenHelper;
import com.smartcontactmanager.security.services.UserDetailsServiceImpl;

@Configuration
@EnableWebSecurity
public class SpringSecurityConfiguration {

	@Autowired
	private JWTTokenHelper jwtTokenHelper;

	@Autowired
	private AuthenticationEntryPoint authenticationEntryPoint;

	@Autowired
	private UserDetailsServiceImpl userDetailsServiceImpl;

	@Bean
	public BCryptPasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	public DaoAuthenticationProvider daoAuthenticationProvider() {
		DaoAuthenticationProvider daoAuthenticationProvider = new DaoAuthenticationProvider();
		daoAuthenticationProvider.setUserDetailsService(userDetailsServiceImpl);
		daoAuthenticationProvider.setPasswordEncoder(passwordEncoder());
		return daoAuthenticationProvider;
	}

	@Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http
		.sessionManagement()
		.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
		.and()
		.exceptionHandling()
		.authenticationEntryPoint(authenticationEntryPoint)
		.and()
		.authorizeRequests()
		.antMatchers("/admin/**")
		.hasRole("ADMIN")
		.antMatchers("/user/**")
		.hasRole("USER")
		.antMatchers("/**")
		.permitAll()
		.antMatchers(HttpMethod.OPTIONS, "/**")
		.permitAll()
		.anyRequest()
		.authenticated();

		http.addFilterBefore(new JWTAuthenticationFilter(userDetailsServiceImpl, jwtTokenHelper),
				UsernamePasswordAuthenticationFilter.class);

		/*
		 * Disable the CSRF in-order to access the back end code HTTP address.
		 * We can remove it once this application is hosted on the platform.
		 */
		http.csrf().disable();
		return http.build();
	}

}
