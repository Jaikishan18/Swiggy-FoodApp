import RestaurantCard, {withOpenLabel} from "./RestaurantCard"
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";  
import { Link } from "react-router-dom";


const Body  = ()=>{

  const [restaurantList,setRestaurantList] = useState([])

  const [filteredRestaurants,setFilteredRestaurants] = useState([])

  const [searchText,setSearchText] = useState("")

  // console.log(restaurantList)
 
   const RestaurantOpenCard = withOpenLabel(RestaurantCard)
  
  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = async()=>{

    try
    {
     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
     let response = await data.json();

    //  console.log(response);

     setRestaurantList(response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
     setFilteredRestaurants(response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    catch(error){
      console.log("error",error)

    }
  }
   
   
    return restaurantList.length===0 ? <Shimmer/> : (  
      <div className="Body bg-zinc-100">
        <div className="filter">
          <div className="search flex flex-row justify-center p-4 border-black">
           
          <input className="input-field border border-gray-300 rounded-md m-2 w-56" type="text" value={searchText}
            onChange={(e)=> setSearchText(e.target.value
            )} >
            </input>
          <button className="search-btn bg-green-50 px-5 m-2 text-base rounded-lg" 
           onClick={()=>{
            const filteredList = restaurantList.filter((res)=>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            
            )    
            setFilteredRestaurants(filteredList)       
           }}
          >search</button>
          <button  className="filter-btn px-5 m-2 bg-red-200 rounded-lg"
           onClick={() =>{
            const filteredList = restaurantList.filter(
            (res)=> res.info.avgRating > 4
          )  
           setRestaurantList(filteredList)
        }
        }>Top Rated Restaurants</button>
          </div>
        </div>

        <div className="Menu-container flex flex-wrap gap-6 m-1 justify-center bg-inherit">
        {filteredRestaurants.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
            {restaurant.info.isOpen ? <RestaurantOpenCard restaurantData={restaurant} /> : <RestaurantCard restaurantData={restaurant} />}
          </Link>
        ))}
      </div>
    </div>
  );
};

   export default Body;