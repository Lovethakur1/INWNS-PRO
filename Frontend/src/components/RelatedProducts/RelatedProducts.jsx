import React from 'react'
import data_product from '../Assets/data'
import { Item } from '../Index'

const RelatedProducts = (props) => {
  return (
    <div className="flex mt-10 mb-10 flex-col items-center space-y-2.5 h-screen90">
      <h1 className="text-gray-900 text-4xl font-semibold" >{props.title}</h1>
      <hr className='border-none w-40 h-2 rounded-lg bg-gray-700' />
    <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
    {data_product.map((item,i)=>{
        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}  />
      })}
    </div></div>
  )
}

export default RelatedProducts
