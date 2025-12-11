import React, {useState,useMemo} from "react";

function expensiveCaluclation(num){
    console.log("Running slow calculation..!");
    for (let i =1; i<2000000000; i++) {

    }
    return num * 2;
}

export default function AppMemo(){
    const [number, setNumber] = useState(2);
    const[count,setCount] = useState(0);
    const result = useMemo(()=>expensiveCaluclation(number),[number]);

    return(
        <div>
            <h2>Use Memo Demo</h2>
            <input type="number" value={number} 
            onChange={(e)=>setNumber(Number(e.target.value))}
            />
            <p>The result is : {result} </p>
            <button onClick={()=>setCount(count+1)} >Increment Count</button>
        </div>
    );
}