import React from "react";
import { Welcome , Guest } from "./ConRenWelcome";

class ConRen extends React.Component {
    constructor(props) {
        super(props);
        this.state={
           loggedIn: false,  
        };
    }

    setLogin = (val) => {
        this.setState({loggedIn: val})
    }

    render() {
       let element;
       if(this.state.loggedIn) {
           element = <h1> hi there you are in </h1>
       } else {
           element = <h1> please log in the system </h1>
       }
       return (
           <div className="App">
               {element}
               <hr />
               { this.state.loggedIn ? <Welcome name="ahmed" /> : <Guest /> }
               <button onClick={() => this.setLogin(!this.state.loggedIn)}>log in</button>
           </div>
       )
    }
}

export default ConRen