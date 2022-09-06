package com.smartcontactmanager.security.config;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetails;
import org.springframework.web.filter.OncePerRequestFilter;

import com.smartcontactmanager.security.config.helpers.JWTTokenHelper;

public class JWTAuthenticationFilter extends OncePerRequestFilter {

	private UserDetailsService userDetailsService;
	private JWTTokenHelper jwtTokenHelper;

	public JWTAuthenticationFilter(UserDetailsService userDetailsService, JWTTokenHelper jwtTokenHelper) {
		this.userDetailsService = userDetailsService;
		this.jwtTokenHelper = jwtTokenHelper;
	}

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws IOException, ServletException {
		String authenticationToken = jwtTokenHelper.getToken(request);
		String userName = jwtTokenHelper.getUsernameFromToken(authenticationToken);
		UserDetails userDetails = userDetailsService.loadUserByUsername(userName);

		if (authenticationToken != null
				&& userName != null
				&& jwtTokenHelper.validateToken(authenticationToken, userDetails)) {
			UsernamePasswordAuthenticationToken userAuthentication = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
			userAuthentication.setDetails(new WebAuthenticationDetails(request));
			SecurityContextHolder.getContext().setAuthentication(userAuthentication);
		}

		filterChain.doFilter(request, response);
	}

}
