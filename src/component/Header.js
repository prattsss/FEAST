import { useState } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
const Header = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false)
  const checkOnline = useOnlineStatus();
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <h1>F<span>EA</span>S<span>T</span></h1>
        </div>
        <div className="menus">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact </Link></li>
            <li><Link to="/cart">Cart </Link></li>
            <li> Status: {checkOnline ? "🟢" : "🔴" }</li>
          </ul>
          {/* {isLoggedIn ? (<button onClick={() => setisLoggedIn(false)}>LogOut</button>) : (<button onClick={() => setisLoggedIn(true)}> LogIn </button>)
      } */}
          <MenuBar />
        </div>
      </div>
   
    </>

  )
}
const MenuBar = () => {
  return (
    <i className="ri-menu-3-line " id="menubar"></i>
  )
}

export default Header
