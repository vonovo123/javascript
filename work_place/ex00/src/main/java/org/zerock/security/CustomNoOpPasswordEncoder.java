package org.zerock.security;

import org.springframework.security.crypto.password.PasswordEncoder;

import lombok.extern.log4j.Log4j;

@Log4j
public class CustomNoOpPasswordEncoder implements PasswordEncoder{@Override
	
	public String encode(CharSequence rawPassword) {
		// TODO Auto-generated method stub
		log.info("before" + rawPassword);
		
		return rawPassword.toString();
	}

	@Override
	public boolean matches(CharSequence rawPassword, String encodedPassword) {
		// TODO Auto-generated method stub
		log.warn("matches:" + rawPassword + ":" + encodedPassword);
		return rawPassword.toString().equals(encodedPassword);
	}
	
}
