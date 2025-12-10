import React from "react";
import ComponentC from './ComponentC'

export default function ComponentB({message}){
return(
    <div>
        <h2> Component B</h2>
        <ComponentC message={message}  />
    </div>
);
}