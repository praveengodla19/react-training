
import { useState } from "react";
import useCounter from "./useCounter";

export default function CounterDemo(){


    const {count,increment,decrement,reset} = useCounter(5);
    return (
        <>
        <p> count : {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
        </>
    );

}

