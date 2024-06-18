import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';

const ShoppingCart = () => {
  const { products, cartItem, removeFromCart ,addToCart,getTotalCartAmount } = useContext(ShopContext);
  
  return (
    <div className="m-5 font-sans">
      <div className="grid lg:grid-cols-3">
        <div className="lg:col-span-2 p-10 bg-white overflow-x-auto">
          <div className="flex border-b pb-4">
            <h2 className="text-2xl font-extrabold text-[#333] flex-1">Shopping Cart</h2>
            <h3 className="text-xl font-extrabold text-[#333]">3 Items</h3>
          </div>
          <div>
            <table className="mt-6 w-full border-collapse divide-y">
              <thead className="whitespace-nowrap text-left">
                <tr>
                  <th className="text-base text-[#333] p-4">Description</th>
                  <th className="text-base text-[#333] p-4">Quantity</th>
                  <th className="text-base text-[#333] p-4">Price</th>
                </tr>
              </thead>
              <tbody className="whitespace-nowrap divide-y">
                {products.map((e) => {
                  const quantity = cartItem[e.id];
                  if (quantity > 0) {
                    return (
                      <tr key={e.id}>
                        <td className="py-6 px-4">
                          <div className="flex items-center gap-6">
                            <div className="h-36 w-36">
                              <img src={e.image} className="w-full h-full object-contain" alt={e.name} />
                            </div>
                            <div>
                              <p className="text-md font-bold text-[#333] truncate w-[200px] lg:w-[300px]">{e.name}</p>
                              <button type="button" onClick={() => removeFromCart(e.id)} className="mt-4 font-semibold text-red-400 text-sm">Remove</button>
                            </div>
                          </div>
                        </td>
                        <td className="py-6 px-4">
                          <div className="flex divide-x border">
                            <button type="button" className="bg-gray-100 px-4 py-2 font-semibold" onClick={() => removeFromCart(e.id)} >-</button>
                            <button type="button" className="bg-transparent px-4 py-2 font-semibold text-[#333]">{quantity}</button>
                            <button type="button" className="bg-gray-800 text-white px-4 py-2 font-semibold" onClick={()=>{addToCart(e.id)}} >+</button>
                          </div>
                        </td>
                        <td className="py-6 px-4">
                          <h4 className="text-md font-bold text-[#333]">₹{e.new_price * cartItem[e.id]}</h4>
                        </td>
                      </tr>
                    );
                  }
                  return null;
                })}
              </tbody>
              <div className="flex items-center justify-center p-5">
      
       
      </div>
   
            </table>
            <><div className="text-lg text-black py-1 mb-3">
        If you have a promo code, Enter it here :-
          
          
        </div>
      <div className="relative flex h-10 w-full min-w-[200px] max-w-[24rem]">
        
        <button
          className="!absolute right-1 top-1 z-10 select-none rounded bg-black py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-black/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
          type="button"
          data-ripple-light="true"
        >
          Submit
        </button>
        <input
          type="email"
          className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-black focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          placeholder=" "
          required
        />
        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-black peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-black peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
         Promo Code
        </label>
      </div>
      <div className="w-full pt-5 px-4 mb-8 mx-auto">
        
      </div>
    </>
          </div>
        </div>
        <div className="bg-gray-50 p-10">
          <h3 className="text-xl font-extrabold text-[#333] border-b pb-4">Order Summary</h3>
          <ul className="text-[#333] divide-y mt-6">
            <li className="flex flex-wrap gap-4 text-md py-4">Subtotal <span className="ml-auto font-bold">₹{getTotalCartAmount()}</span></li>
            <li className="flex flex-wrap gap-4 text-md py-4">Shipping <span className="ml-auto font-bold">₹0.00</span></li>
            <li className="flex flex-wrap gap-4 text-md py-4">Tax <span className="ml-auto font-bold">₹0.00</span></li>
            <li className="flex flex-wrap gap-4 text-md py-4 font-bold">Total <span className="ml-auto">₹{getTotalCartAmount()}</span></li>
          </ul>
          <button type="button" className="mt-6 text-md px-6 py-2.5 w-full bg-blue-600 hover:bg-blue-700 text-white rounded">Check out</button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
