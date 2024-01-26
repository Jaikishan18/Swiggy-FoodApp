import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

 const ItemList = ({items}) => {
  
    
  return (
    <div>
       {items.map((item)=>(
        
        <div key={item.card.info.id} className='m-2 p-2 border-gray-200 border-b-2 text-left'>
            <img src={IMG_CDN_URL + item.card.info.imageId}alt={item.card.info.name} className='w-14'></img>
            <div className='py-2'>
            <span className='font-bold '>{item.card.info.name}</span>
            <span>  Rs -{item.card.info.price ? item.card.info.price/100 :  item.card.info.defaultprice }</span>
            </div>
            <p className='text-xs'>{item.card.info.description}</p>
        </div>
       ))}
    </div>
  )
}
export default ItemList

