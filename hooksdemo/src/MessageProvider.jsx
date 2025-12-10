import { Children } from "react";
import { useState } from "react";
import MessageContext from "./MessageContext";
function MessageProvider({children}){

    const [message,setMessage] = useState("Hello From ComponentA (Via Context)");

    return(
        <MessageContext.Provider value={{message,setMessage}} >
                {children}
        </MessageContext.Provider>
    );

}

export default MessageProvider;