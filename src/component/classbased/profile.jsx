import React from "react";

class Profile extends React.Component{
  render(){
    return(
      <>
      <h1>Class Based Profile</h1>
      <h2>name : {this.props.name}</h2>
      </>
    )
  }
}
export default Profile