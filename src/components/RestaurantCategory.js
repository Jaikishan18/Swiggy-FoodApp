import React from 'react'
import ItemList from './ItemList'
// import { useState } from 'react'n 


const RestaurantCategory = ({data,setShowIndex,showItems,index}) => {
    // console.log(data)
    // const[showItems,setShowItems] = useState(false)

    const handleClick = ()=>{
      setShowIndex(index)
      // setShowItems(!showItems)

    }
  return (
    <div>
        {/*header */} 
        <div className='w-6/12 mx-auto my-3 bg-gray-100 p-4 shadow-lg border-b-gray-400 rounded-lg'>
          <div className='flex justify-between cursor-pointer' onClick={handleClick}>
             <span className='font-semibold text-lg'>{data.title} ({data.itemCards.length})</span>
             <span>{showItems ? "⬆️" : "⬇️"}</span>
           </div>
         {showItems && <ItemList items={data.itemCards}/>}
        </div>
    </div>
  )
}

export default RestaurantCategory