import React from "react";

class MyComCls extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    render() {
        console.log(this.props);
       return (
        <>
          <h1>From React Class</h1>
          <h3> {this.props.name} : {this.props.age} : {this.props.xyz}  </h3>
          <h4> the time is  {this.state.date.toLocaleTimeString()} </h4>
        </>
       );
    }
}


export default MyComCls;