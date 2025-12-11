
import { useState } from "react";
export default function useCounter(intial=0){
        const [count,setCount] = useState(intial);
        const increment = () => setCount(count+1);
        const decrement = () => setCount(count-1);
        const reset =() => setCount(intial);
        return {count,increment,decrement,reset}
}

