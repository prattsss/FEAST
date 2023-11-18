import { useEffect, useState } from "react";

const useRestaurant = (restId) => {
  const [restaurant, setRestaurant] = useState("")
  const [menuList, setMenuList] = useState("");
  useEffect(() => {
    restaurantInfo()
  }, [])
  async function restaurantInfo() {
    const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7195687&lng=75.8577258&restaurantId=${restId}&catalog_qa=undefined&submitAction=ENTER`);
    const json = await data.json()


    setRestaurant(json?.data?.cards[0]?.card?.card?.info)

    const test = json?.data?.cards.filter(card => card.groupedCard && card)

    const menuList = test[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')

    setMenuList(menuList)
    //  console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
  }
  return { restaurant, menuList } || null

}
export default useRestaurant