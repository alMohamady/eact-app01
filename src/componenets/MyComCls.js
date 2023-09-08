import React from "react";

class MyComCls extends React.Component {
    
    constructor(props) {
        //console.log("constructor");
        super(props);
        this.state = {
            name: "AlMohamady",
            age: 37, 
            date: new Date(), 
            title: "From React Class"
        };

        //this.setValue = this.setValue.bind(this);
    }

    setValue = (event) => {
        this.setState({
            title: event.target.value,
        }); 
     }

    render() {
         const clcButton = () => {
            console.log('hellow world');
         }

        return (
            <>
            <h1>{ this.state.title }</h1>
            <button onClick={clcButton}>Button Test</button>
            <br/>
            <input type="text" onChange={this.setValue} />
            </>
       );
    }
}


export default MyComCls;