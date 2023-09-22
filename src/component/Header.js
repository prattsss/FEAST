import { useState } from "react"

const Header = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false)
  return (
    <div className="navbar">
      <div className="logo">
        <h1>F<span>EA</span>S<span>T</span></h1>
      </div>
      <div className="menus">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Cart</a></li>
        </ul>
        {isLoggedIn ? (<button onClick={() => setisLoggedIn(false)}>LogOut</button>) : (<button onClick={() => setisLoggedIn(true)}> LogIn </button>)
        }
        <MenuBar />
      </div>
    </div>
  )
}
const MenuBar = () => {
  return (
    <i className="ri-menu-3-line " id="menubar"></i>
  )
}

export default Header
