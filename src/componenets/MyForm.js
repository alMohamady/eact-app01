import React from "react";


class MyForm extends React.Component {
   constructor(props){
    super(props);
    this.state ={
        userName: '', 
        password: ''
    }
   }
   
   setUserName = (val) => {
       this.setState({userName: val})
   }

   setPassword = (val) => {
    this.setState({password: val})
   }

   render() {
      return (
      <form onSubmit={(e) => { e.preventDefault(); }}>
        <label>User Name :</label>
        <input type="text" 
        onChange={(e) => this.setUserName(e.target.value)}></input>
        <br />
        <label>Password :</label>
        <input type="text" 
        onChange={(e) => this.setPassword(e.target.value)}></input>
        <hr />
        <button type="submit" onClick={
            () => {
                console.log(this.state);
            }
        } > Log In </button>
      </form>
      );
   }

}

export default MyForm;