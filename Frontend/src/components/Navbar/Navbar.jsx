import React, { useContext } from 'react'
import cart_icon from '../Assets/cart_icon.png'
import Logo from '../Assets/logo.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

function Navbar() {
  const [menu, setMenu] = React.useState('shop')
  const { getTotalCartItem } = useContext(ShopContext);

  return (
   <div className='flex justify-around p-4 shadow-md'>
    <div className='flex items-center gap-5'><img src={Logo} alt="" />
    <p className='text-gray-900 text-3xl font-semibold'>IN-WNS</p>
    </div>
    <ul className='flex items-center gap-16 text-gray-600 text-lg font-medium'>
        <li onClick={()=>{setMenu("shop")}}  className='flex flex-col items-center justify-center gap-3 cursor-pointer'><Link to="shop">SHOP</Link> {menu==="shop"?<hr className='border-none w-10 h-1 rounded-lg bg-red-500'/>:<></>} </li>
        <li onClick={()=>{setMenu("men")}} className='flex flex-col items-center justify-center gap-3 cursor-pointer'> <Link to="mens">MEN</Link>  {menu==="men"?<hr className='border-none w-10 h-1 rounded-lg bg-red-500'/>:<></>}</li>
        <li onClick={()=>{setMenu("women")}} className='flex flex-col items-center justify-center gap-3 cursor-pointer'><Link to="women">Woman</Link>{menu==="women"?<hr className='border-none w-10 h-1 rounded-lg bg-red-500'/>:<></>}</li>
        <li onClick={()=>{setMenu("kid")}} className='flex flex-col items-center justify-center gap-3 cursor-pointer'><Link to="kids" >KIDS</Link> {menu==="kid"?<hr className='border-none w-10 h-1 rounded-lg bg-red-500'/>:<></>}</li>
    </ul>
    <div className='flex items-center gap-10'>

      
    {localStorage.getItem('auth-token')
    ? <button  onClick={() => { localStorage.removeItem('auth-token'); window.location.replace("/"); }}> <p className="w-full py-3 px-6 bg-red-400 hover:bg-red-600 rounded-3xl shadow-lg text-white font-semibold transition duration-200" >Logout</p> </button>
    : <Link to="login">
        <button type="submit" className="w-full py-3 px-6 bg-red-400 hover:bg-red-600 rounded-3xl shadow-lg text-white font-semibold transition duration-200">
            Login
        </button>
    </Link>}

    <div className="relative">
  
  <div className="absolute  bottom-7 left-7 rounded-full bg-red-500 p-0.1 px-2 text-sm text-red-50">{getTotalCartItem()}</div>
  <Link to="cart"><img src={cart_icon} alt=""  /></Link>
</div>
 
    </div>
   </div>
  )
}

export default Navbar