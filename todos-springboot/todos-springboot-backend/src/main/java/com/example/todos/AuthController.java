package com.example.todos;

import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.http.ResponseEntity; 
import org.springframework.web.bind.annotation.*; 
 
@RestController 
@RequestMapping("/api/auth") 
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController { 
 
    @Autowired 
    private UserService userService; 
 
    @PostMapping("/register") 
    @CrossOrigin(origins = "http://localhost:5173")
    public ResponseEntity<String> register(@RequestParam String username, 
                                           @RequestParam String password, 
                                           @RequestParam String role) { 
        String token = userService.registerUser(username, password, role); 
        return ResponseEntity.ok(token); 
    } 
 
    @PostMapping("/login") 
    @CrossOrigin(origins = "http://localhost:5173")
    public ResponseEntity<String> login(@RequestParam String username, 
                                        @RequestParam String password) { 
        String token = userService.loginUser(username, password); 
        return ResponseEntity.ok(token); 
    }
}