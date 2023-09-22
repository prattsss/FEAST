<!-- spread operation for config driven task
import React from "react";
import { render } from "react-dom";
import ReactDom from 'react-dom/client';

const Header = () => {
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
      </div>
    </div>
  )
}
const restr = [
  {
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/253178fa1b6a22b7a0cdc1ab120db628",
    id: 1,
    name: "HAHAHAH",
    deliverTime: "30 mins Away",
    cuisine: ["Burger", "American"]
  },
  {
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f2mcazqbaxnqmjgydzqe",
    id: 2,
    name: "SouthPaw",
    deliverTime: "30 mins Away",
    cuisine: ["Burger", "American"]
  },
  {
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gdjltxilqpcg8ls7djbz",
    id: 3,
    name: ":LALAL",
    deliverTime: "30 mins Away",
    cuisine: ["Burger", "American"]
  },
  {
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/253178fa1b6a22b7a0cdc1ab120db628",
    id: 4,
    name: "HEHHEHE",
    deliverTime: "30 mins Away",
    cuisine: ["Burger", "American"]
  },
  {
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f2mcazqbaxnqmjgydzqe",
    id: 5,
    name: "SouthPaw",
    deliverTime: "30 mins Away",
    cuisine: ["Burger", "American"]
  },
  {
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gdjltxilqpcg8ls7djbz",
    id: 6,
    name: "FHFHFH",
    deliverTime: "30 mins Away",
    cuisine: ["Burger", "American"]
  }
];




const RestaurantCard = ({ image, name, deliverTime, cuisine }) => {
  return (


    <div className="restaurant-card">
      <img alt="restaurant food" src={image} />
      <h1>{name}</h1>
      <h2>{deliverTime}</h2>
      <h3>{cuisine.join(",")}</h3>
    </div>

  )
}
const Body = () => {
  return (
    <div className="restaurant-list">

      <RestaurantCard {...restr[0]} />
      <RestaurantCard  {...restr[1]}/>
    <RestaurantCard  {...restr[2]}/>
    <RestaurantCard  {...restr[3]}/>
    <RestaurantCard  {...restr[4]}/>
    <RestaurantCard  {...restr[5]}/>
    </div>

  )
}

const Footer = () => {
  return (
    <footer className="app-footer">

    </footer>
  )
}



const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  )
}
const root = ReactDom.createRoot(document.getElementById("root"))
root.render(<AppLayout />); -->







// const Body = () => {

//   const [searchInput, setSearchInput] = useState('');
//   const [restaurants, setRestaurants] = useState(restaurantList)
//   return (
//     <>
//       <div className="search-container">
//         <input placeholder="Search"
//           type="text"
//           value={searchInput}
//           onChange={(e) => setSearchInput(e.target.value)}
//         />
//         <button className="btn"
//           onClick={() => {
//             const data = searchResult(searchInput, restaurants)
//             setRestaurants(data);
//             console.log(data)
//           }}>Search</button>
//       </div>
//       <div className="restaurant-list">
//         {
//           restaurants.map((prop) => {
//             return <RestaurantCard {...prop} />
//           })
//         }
//       </div>
//     </>

//   )
// }





const Body = () => {


  // async function apiCall() {
  //   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.61583319140582&lng=75.8019981533289&page_type=DESKTOP_WEB_LISTING")
  //   const json = await data.json();
  //   console.log(json)
  // }

  return (
   

      <div className="restaurant-list">
        {/* {filteredRestaurants.length === 0
          ? restaurantData.map((prop) => <RestaurantCard {...prop} />)
          : filteredRestaurants.map((prop) => <RestaurantCard {...prop} />)
        } */}
      {restaurantList.map((restaurantList) => { return
        <RestaurantCard {...restaurantList.Restaurant}/>
      }  )}
      </div>
    </>
  );
}










