import { useState } from "react";
import { login } from "../services/authService";
import { useNavigate } from "react-router-dom";
import React from "react";
import { validateToken } from "../services/authService";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
     let token =  await login(username, password);
     if (token==null)
        navigate("/login")
    else
    {
      if(validateToken()=='VALID'){
      navigate("/products");
      }
      else{
        navigate("/login")
      }
    }
    } catch {
      setError("Invalid Username or Password");
    }
  };

  return (
    <div style={{ width: "300px", margin: "100px auto" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br /><br />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}