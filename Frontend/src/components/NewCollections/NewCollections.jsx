import React, { useState,useEffect } from 'react';
import { Item } from "../Index";

const NewCollections = () => {
  const [new_collection, setNew_Collection] = useState([]);

  // Assuming you'll fetch and set new collections data somewhere in your component
  // For example,
  useEffect(() => {
    fetch('http://localhost:4000/newcollections')
      .then((res) => res.json())
      .then((data) => setNew_Collection(data));
  }, []);
  return (
    <div className="flex mt-10 mb-10 flex-col items-center space-y-2.5 h-screen90">
      <h1 className="text-gray-900 text-4xl font-semibold">NEW COLLECTIONS</h1>
      <hr className='border-none w-40 h-1 rounded-lg bg-gray-700'/>
      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5" >
        {
            new_collection.map((item, i) => (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            ))
        }
      </div>
    </div>
  );
}

export default NewCollections;
