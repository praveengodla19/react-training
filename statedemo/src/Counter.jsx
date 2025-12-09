import React from "react";

class Counter extends React.Component{
    constructor(){
        super();
        this.state = {
            count:0
        };

    }
    increment = () => {
            this.setState({count: this.state.count+1})
    };
    decrement = () => {
            this.setState({count: this.state.count-1})
    };
    render(){
        return(
            <div>
                <h2>This is from class component</h2>
                <h2> count : {this.state.count} </h2>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
    
            </div>
        );
    }

}

export default Counter;