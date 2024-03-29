import { useContext, useState } from "react"
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import userContext from "../utils/useContext"
import useOnlineStatus from "../utils/useOnlineStatus"
const Header = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false)
  const checkOnline = useOnlineStatus();
  const { userName, } = useContext(userContext);
  const cartItems = useSelector((store) => store.cart.items)
  console.log(cartItems)
  return (

    <>
      <div className="navbar flex justify-between align-middle p-5 border-b-2 border-gray-300 
      bg-white">
        <div className="logo flex text-3xl font-semibold ">
          <h1>F<span className="text-yellow-500">EA</span>S<span className="text-yellow-500">T</span></h1>
          {/* <img className="w-20" src={reactLogo} alt="feast" /> */}
        </div>

        <div className="flex gap-5">
          {/* <input type="text" placeholder="search" /> */}
          <ul className="flex gap-3 text-xl mt-[3px] max-sm:invisible  align-middle">

            <li><Link to="/">
              {/* <i className="ri-search-line flex-col align-middle "></i> */}
              Home
            </Link></li>
            <li>
              <Link to="/about">
                {/* <i className="ri-percent-line flex-col align-middle  "></i> */}
                Offers
              </Link></li>
            <li><Link to="/contact">
              {/* <i className="ri-question-line flex-col align-middle "></i> */}
              Help
            </Link></li>
            <li><Link to="/cart">
              {/* <i className="ri-shopping-cart-2-line flex-col align-middle "></i> */}
              Cart ({cartItems.length})
            </Link></li>
            <li> Status: {checkOnline ? "🟢" : "🔴"}</li>
            <li>  {userName}</li>
            {/* <MenuBar /> */}
          </ul>
        </div>



      </div>

    </>

  )
}
// const MenuBar = () => {
//   return (
//     <h1>runs</h1>
// <i className="ri-menu-3-line invisible max-sm:visible "></i>

//   )
// }

export default Header
