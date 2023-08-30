import React from "react";

class MyComCls extends React.Component {

    render() {
        console.log(this.props);
       return (
        <>
          <h1>From React Class</h1>
          <h3> {this.props.name} : {this.props.age} : {this.props.xyz}  </h3>
        </>
       );
    }
}


export default MyComCls;