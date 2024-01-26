
import Shimmer from "./Shimmer"
import { useState } from "react"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import RestaurantCategory from "./RestaurantCategory"

const RestaurantMenu = ()=>{

const {resId} = useParams();
const[showIndex,setShowIndex] = useState(null)

  
  const restaurantInfo = useRestaurantMenu(resId);


   if(restaurantInfo.length===0) return <Shimmer/>

   const {name,cuisines} = restaurantInfo?.cards[0]?.card?.card?.info

//    const {itemCards} = restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card
   const categories = restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
//    console.log(categories)
    return  (
        <div className="restaurants text-center p-4 m-2">
           <h1 className="font-bold px-3 border-gray-500-100 my-1">{name}</h1>
           <h4 className="font-semibold">Cusine: {cuisines}</h4>
           {
            categories.map((category,index)=>{
             return <RestaurantCategory key={category.card.card.name} data={category?.card?.card} 
             showItems={index===showIndex ? true : false}
             setShowIndex={()=>setShowIndex(index)} />
            })
           }
        </div>
    )
}

export default RestaurantMenu