package com.example.todos;

import java.util.Date;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtTokenProvider {
	@Value("${jwt.secret}")
	private String jwtSecret;
	@Value("${jwt.expiration}")
	private long jwtExpiration;

	public String generateToken(Authentication authentication) {
		String username = authentication.getName();
		String roles = authentication.getAuthorities().stream().map(GrantedAuthority::getAuthority)
				.collect(Collectors.joining(","));
		return Jwts.builder().subject(username).claim("roles", roles).issuedAt(new Date())
				.expiration(new Date(System.currentTimeMillis() + jwtExpiration))
				.signWith(Keys.hmacShaKeyFor(jwtSecret.getBytes())).compact();
	}

	public String getUsernameFromToken(String token) {
		return Jwts.parser().verifyWith(Keys.hmacShaKeyFor(jwtSecret.getBytes())).build().parseSignedClaims(token)
				.getPayload().getSubject();
	}

	public boolean validateToken(String token) {
		try {
			Jwts.parser().verifyWith(Keys.hmacShaKeyFor(jwtSecret.getBytes())).build().parseSignedClaims(token);
			return true;
		} catch (JwtException e) {
			return false;
		}
	}
}