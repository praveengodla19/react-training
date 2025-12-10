import { useContext } from "react";
import MessageContext from "../MessageContext";


function  ComponentC1(){
    const {message } = useContext(MessageContext);
    return(
        <div>
            <p> message received from parent is {message}</p>
        </div>
    );
}

export default ComponentC1;