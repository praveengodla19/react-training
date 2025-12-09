import { useState } from "react";

function Employee(){

    const[name,setName] = useState("Praveen");
    const[age,setAge] = useState(47);
    const[city,setCity] = useState("Hyderabad");

    function increment(){
           setAge(age+1);
    };

    return(
        <div>
            <p> Enter the Name of the Employee</p>
            <input type="text" name="name" value={name} onChange={ (e) => setName(e.target.value)}/>
            <p> Enter the City of the Employee</p>
            <input type="text" name="city" value={city}  onChange={ (e) => setCity(e.target.value) } />
            <h2> Name of Employee : {name} </h2>
           <h2> Age of Employee : {age} </h2>
           <h2> City of Employee : {city} </h2>
           <button onClick={increment}>Increase Age</button>
        </div>
    );

}

export default Employee;