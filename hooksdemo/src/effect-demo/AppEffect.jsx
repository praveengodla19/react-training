import { useEffect } from "react";
import { useState } from "react";

function AppEffect(){
    const [count, setCount] = useState(0);
    const [users,setUsers] = useState([]);
    useEffect( () => {
        console.log("Effect will run at everytime...!")
        async function loadData(){
            const result = await fetch("https://jsonplaceholder.typicode.com/users");
            setUsers(await result.json());
        }
        loadData();
    },[]);
    return(
        <>
        <p> Count : {count}</p>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        </>
    );
}

export default AppEffect;