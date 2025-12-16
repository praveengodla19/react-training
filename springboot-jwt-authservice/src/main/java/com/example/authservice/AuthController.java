package com.example.authservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@CrossOrigin( origins="http://localhost:5173", allowedHeaders= {"Authorization", "Content-Type" } )
public class AuthController {

    @Autowired
    private UserRepository repo;

    @Autowired
    private PasswordEncoder encoder;

    @Autowired
    private AuthenticationManager authManager;

    @Autowired
    private JwtUtil jwtUtil;
    
    @CrossOrigin( origins="http://localhost:5173", allowedHeaders= {"Authorization", "Content-Type" } )
    @PostMapping(
    	    value = "/validate",
    	    consumes = "application/json",
    	    produces = "application/json"
    	)
    	public ResponseEntity<String> validateToken(
    	        @RequestHeader(value = "Authorization", required = false) String header) {
    		System.out.println("Inside the Auth Controller..!");
    		

    	    if (header == null || !header.startsWith("Bearer ")) {
    	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("INVALID");
    	    }

    	    String token = header.substring(7);
    	    System.out.println(token);

    	    boolean isValid = jwtUtil.validateToken(token);

    	    if (isValid) {
    	        return ResponseEntity.ok("VALID");
    	    } else {
    	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("INVALID");
    	    }
    	}


    @CrossOrigin( origins="http://localhost:5173", allowedHeaders= {"Authorization", "Content-Type" } )
    @PostMapping(
    	    value = "/register",
    	    produces = "application/json"
    	)
    public String register(@RequestBody RegisterRequest request) {
        User user = new User();
        user.setUsername(request.getUsername());
        user.setPassword(encoder.encode(request.getPassword()));
        user.setRole("USER");
        repo.save(user);
        return "User registered successfully";
    }

    @CrossOrigin( origins="http://localhost:5173", allowedHeaders= {"Authorization", "Content-Type" } )
    @PostMapping(
    	    value = "/login",
    	    consumes = "application/json",
    	    produces = "application/json"
    	)
    public AuthResponse login(@RequestBody AuthRequest request) {

        authManager.authenticate(
           new UsernamePasswordAuthenticationToken(
               request.getUsername(), request.getPassword()));
    	System.out.println(request.getUsername());
        String token = jwtUtil.generateToken(request.getUsername());
        return new AuthResponse(token);
    }
    
    

}

