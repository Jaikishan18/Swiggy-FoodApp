import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = ({restaurantData})=>{   
    // console.log(props)  

  
  // console.log(restaurantData)
  // console.log(props) // const resData = props.resData
  // console.log(resData)
  

  const {name,
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime,
        cloudinaryImageId,isOpen } = restaurantData?.info

  

        return(

    <div className="res-cards m-2 p-2 w-64  bg-slate-200 rounded-xl hover:bg-slate-400  relative">
      <img className="res-logo rounded-xl h-60 w-60" 
      alt="Dominos"
      src = {IMG_CDN_URL
        +cloudinaryImageId
      }
       ></img> 
       
      {isOpen ? (
        <label className="absolute p-2 bg-gray-400 rounded-lg top-0 mb-2">Open 😃</label>
      ): (
        <label>Closed 😔</label>
    )}
       
       <h3 className="font-bold text-center">{name}</h3>
      <h4 >{cuisines.join(", ")}</h4>
      <h4 >{avgRating} ⭐</h4>
      <h4 >{costForTwo}</h4>
      <h4 >{deliveryTime} 25 Minutes</h4>
    
    </div>
  )    
 }
  
   export const withOpenLabel = (RestaurantCard)=>{
    return (props)=>{
      return(
        <div>
          <RestaurantCard {...props}/>
        </div>
      )
    }
   }
 export default RestaurantCard