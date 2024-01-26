import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);   // Empty dependency array to run the effect only once

  const fetchData = async () => {
    
      const data = await fetch("https://dummyjson.com/carts");
      const response = await data.json();
      setCarts(response?.carts.slice(0,4));
      
  };


  return(
    <div className='parent-carts'>
        {carts.map((items)=>(
            <ul key={items.id} className=' flex flex-wrap justify-center gap-6 p-4 m-4 rounded-lg '>
                {items.products.map((prod)=>{
                  console.log(prod)
                    return( 
                      <div key={prod.id}className=' w-60  p-3 m-3 bg-slate-200 hover:bg-slate-400 rounded-lg'>
                        <img  className="rounded-lg h-56 w-56" src={prod.thumbnail} alt="images"></img>
                        <h1  className='font-bold text-center'>{prod.title}</h1>
                        <h4 className='text-center'>Price💲-{prod.price}</h4>
                        <h4 className='text-center'> discountedPrice💲-{prod.discountedPrice}</h4>
                        </div>
                    )
                })}
            </ul>
        ))}

    </div>
  )
};

export default Cart;
