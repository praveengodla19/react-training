import React from 'react';
function TestData(props){

    return(
        <div>
      <h2>Values in Display Component:</h2>
      {props.nos.map((item,index) => (
        <p key={index}> {item}</p>
      ))}
    
    </div>
    );
}

export default TestData;