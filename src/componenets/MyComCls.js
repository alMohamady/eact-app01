import React from "react";

class MyComCls extends React.Component {
    
    constructor(props) {
        console.log("constructor");
        super(props);
        this.state = {
            name: "AlMohamady",
            age: 37, 
            date: new Date() 
        };
    }

    /* static getDerivedStateFromProps() {
        console.log("getDerivedStateFromProps");
    }*/

    shouldComponentUpdate(nextProps, nextState){
        return true;
    }

    render() {
        //console.log(this.props);
        return (
        <>
          <h1>From React Class</h1>
          <h3> {this.props.name} : {this.props.age} : {this.props.xyz}  </h3>
          <h4> the time is  {this.state.date.toLocaleTimeString()} </h4>
          <h4> hi {this.state.name} </h4>
        </>
       );
    }

    componentDidMount(){
        console.log("render");
        this.setState({
            name: "Mo Salah"
        });
        console.log("componentDidMount");
    }
}


export default MyComCls;