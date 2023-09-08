import React from "react";

class MyComCls extends React.Component {
    
    constructor(props) {
        //console.log("constructor");
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

         const clcButton = () => {
            console.log('hellow world');
         }

        return (
        <>
          <h1>From React Class</h1>
          <h3> {this.props.name} : {this.props.age} : {this.props.xyz}  </h3>
          <h4> the time is  {this.state.date.toLocaleTimeString()} </h4>
          <h4> hi {this.state.name} </h4>
          <button onClick={clcButton}
                  onMouseEnter={()=> { console.log("enter") }} 
                  onMouseLeave={()=> { console.log("Leave") }}
                  >Button Test</button>
          <br/>
          <input type="text" onChange={(event) => {
            console.log(event.target.value);
          }} />
        </>
       );
    }

    componentDidMount(){
        //00console.log("render");
        this.setState({
            name: "Mo Salah"
        });
        //console.log("componentDidMount");
    }
}


export default MyComCls;