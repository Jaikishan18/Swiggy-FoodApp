import { useState,useEffect } from "react";
import { MENU_URL } from "../utils/constants"


const useRestaurantMenu = (resId)=>{
    const[restaurantInfo,setRestaurantInfo] = useState([])
    

     useEffect(()=>{
        fetchData();
     },[])


    const fetchData = async()=>{
        const data = await fetch(MENU_URL + resId)
        const response = await data.json();

        console.log(response)

        setRestaurantInfo(response.data);
        
    }
    return restaurantInfo
    
}
export default useRestaurantMenu;