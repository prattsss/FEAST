import React from "react";
import userContext from "../../utils/useContext";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        username: "",
        avatar_url: "",
      }

    }
  }
  async componentDidMount() {
    const data = await fetch('  https://api.github.com/users/prattsss')
    const json = await data.json();
    this.setState({ userInfo: json })
    this.timer = setInterval(() => {
      console.log(8)
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  render() {
    return (
      <>
        <h1>Class Based Profile</h1>
        <h2>name : {this.state.userInfo.name}</h2>
        <userContext.Consumer>
          {(data) => <h1>{data.userName}</h1>}
        </userContext.Consumer>
        <img src={this.state.userInfo.avatar_url} />
      </>
    )
  }
}
export default Profile