import React from 'react'
import { Hero,  NewCollections,  NewsLetter,    Offers, Popular } from '../components/Index'
const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular title={"POPULAR IN WOMAN"} />
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
      
      
    </div>
  )
}

export default Shop

