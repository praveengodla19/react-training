package com.example.todos;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.Collections;

@Service
public class UserService implements UserDetailsService {
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private RoleRepository roleRepository;
	@Autowired
	private PasswordEncoder passwordEncoder;
	@Autowired
	private JwtTokenProvider jwtTokenProvider;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userRepository.findByUsername(username);
		if (user == null) {
			throw new UsernameNotFoundException("User not found: " + username);
		}
		return org.springframework.security.core.userdetails.User.withUsername(user.getUsername())
				.password(user.getPassword())
				.authorities(user.getRoles().stream().map(role -> "ROLE_" + role.getName()).toArray(String[]::new))
				.build();
	}

	@Transactional
	public String registerUser(String username, String password, String roleName) {
		if (userRepository.findByUsername(username) != null) {
			throw new RuntimeException("Username already exists");
		}

		User user = new User();
		user.setUsername(username);
		user.setPassword(passwordEncoder.encode(password));

		Role role = roleRepository.findByName(roleName);
		if (role == null) {
			role = new Role();
			role.setName(roleName);
			roleRepository.save(role);
		}
		user.setRoles(Collections.singleton(role));

		userRepository.save(user);

		UserDetails userDetails = loadUserByUsername(username);
		return jwtTokenProvider.generateToken(
				new org.springframework.security.authentication.UsernamePasswordAuthenticationToken(userDetails, null,
						userDetails.getAuthorities()));
	}

	public String loginUser(String username, String password) {
		UserDetails userDetails = loadUserByUsername(username);
		if (passwordEncoder.matches(password, userDetails.getPassword())) {
			return jwtTokenProvider.generateToken(
					new org.springframework.security.authentication.UsernamePasswordAuthenticationToken(userDetails,
							null, userDetails.getAuthorities()));
		}
		throw new RuntimeException("Invalid credentials");
	}
}