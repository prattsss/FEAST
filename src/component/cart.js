import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from "../utils/cartSlice"
import CartItems from "./CartItems"
import { ItemList } from "./RestaurantMenu"
const Cart = () => {
  const cartList = useSelector((store) => store.cart.items)
  const dispatch = useDispatch()
  const clearCartItems = () => {
    dispatch(clearCart())
  }

  return (
    <div>
      {Object.keys(cartList) != 0 && <button className="rounded-lg bg-blue-500 text-lg font-semibold p-2"
        onClick={clearCartItems}>Clear Cart</button>
      }
      <ItemList list={cartList} />

      <CartItems list={cartList} />
    </div>
  )
}
export default Cart
