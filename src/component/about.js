import React from "react";
import { Outlet } from "react-router-dom";
const About = () => {
  console.log("aboutsect")
  return (
    <div className="about">
   
      <h1>About</h1><br />
      < Outlet />
    </div>
  )
}
export default About;