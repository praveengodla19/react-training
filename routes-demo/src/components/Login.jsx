
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export  default function Login(){

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    const VALID_USERNAME = 'admin';
    const VALID_PASSWORD='12345';

    

    const validate = () =>{
        if(username === VALID_USERNAME && password === VALID_PASSWORD){
                navigate("/success/"+VALID_USERNAME);
        }
        else{
                 navigate("/fail");
        }
    };
    return(
        <>
        <h3> Login Page..!</h3>
        <form onSubmit={validate}>
            <label>User Name: </label>
            <input type="text" name="username" value={username}
            onChange={(e)=>setUsername(e.target.value)}/>

            <label>Password: </label>
            <input type="password" name="password" value={password}
            onChange={(e)=>setPassword(e.target.value)}/>

            <button type="submit">Login</button>
        </form>
        </>
    );

}
