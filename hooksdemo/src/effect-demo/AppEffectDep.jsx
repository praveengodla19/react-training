import React,{useEffect,useState} from 'react';

function AppEffectDep(){

    const [query,setQuery] = useState("");
    const [data,setData] = useState("");

    useEffect( ()=> {
        console.log("use effect is executed -> ", query)
    },[query,data]);

    useEffect( ()=> {
        const timer =  setInterval( () => {
            console.log("Tick...!");
        }, 1000);
        return () => clearInterval(timer);
},[]);

    return (
        <div>
            <h2> useEffect for query change</h2>
            <input placeholder="Change the query value" 
            value={query}
            onChange={(e) => setQuery(e.target.value)} />

            <input placeholder="Change the data value" 
            value={data}
            onChange={(e) => setData(e.target.value)} />


            <p> Current Data in Query object :{query} </p>
            <p> Current Data in Data object :{data} </p>
        </div>
    );

}

export default AppEffectDep;