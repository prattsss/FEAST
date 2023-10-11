import React from "react";

class Profile extends React.Component{
  constructor(props){
    super(props);
    this.state = {
     userInfo : {
      username: "",
      avatar_url:"",
     }
      
    }
  }
  async componentDidMount(){
   const data = await fetch('  https://api.github.com/users/prattsss')
   const json = await data.json();
   this.setState({userInfo: json})
  }
  render(){
    return(
      <>
      <h1>Class Based Profile</h1>
      <h2>name : {this.state.userInfo.name}</h2>
      <img  src = {this.state.userInfo.avatar_url}/>
      </>
    )
  }
}
export default Profile