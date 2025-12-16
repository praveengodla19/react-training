package com.example.authservice;

public class RegisterRequest {
	private String username;
    private String password;
    RegisterRequest(){
    	
    }
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
    

}
