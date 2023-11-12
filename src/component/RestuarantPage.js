
// import { useParams } from "react-router-dom";
// import { imgCdn } from "./Constant";
// import useRestaurant from "../utils/useRestuarant";
// import './restaurantpage.css';
// const RestaurantPage = () => {
//   const { restId } = useParams();


  // const restaurant = useRestaurant(restId);
//   if (!restaurant) return null
//   return (
//     <div className="restuarant-page">
//       <div>
//         <img src={imgCdn + restaurant.cloudinaryImageId} />
//         <h1>{restaurant.name}</h1>
//       </div>
//       {/* <div>
//         <h2>Menu</h2>
//         <ul className="menu-list">
//           {restMenu.map((el) => (
//             <li key={el?.card?.info?.id}>{el?.card?.info?.name}</li>
//           ))}
//         </ul>
//       </div> */}
//     </div>
//   )
// }
// export default RestaurantPage