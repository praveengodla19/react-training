import { useState } from "react";
function Toggle(){

    const [show,setShow] = useState(false)

    return (
        <div>
            <button onClick={()=> setShow(!show)}>{show?"Hide Message":"Show Message"}</button>
            {show && <p> This is a toggled Message..!</p>}
        </div>
    );

}

export default Toggle;