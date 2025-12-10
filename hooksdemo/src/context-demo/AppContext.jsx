import MessageConext from "../MessageContext";
import MessageProvider from "../MessageProvider";
import { useContext } from "react";
import ComponentB1 from "./ComponentB1";
function AppContext(){
    
    return (
    
    <MessageProvider>
        <h2>UseContext Example(No Property Drilling)</h2>
        <ComponentB1 />
    </MessageProvider>
    );
}

export default AppContext;