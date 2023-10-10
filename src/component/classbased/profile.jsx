import React from "react";

class Profile extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      count2: "hey"
    }
  }
  render(){
    return(
      <>
      <h1>Class Based Profile</h1>
      <h2>name : {this.props.name}</h2>
      <h2> count : {this.state.count}</h2>
      <button onClick={()=> this.setState({count:"changed"})}>{this.state.count2}</button>
      </>
    )
  }
}
export default Profile