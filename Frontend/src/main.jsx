import React from 'react'
import ReactDOM from 'react-dom/client'
// import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import './index.css'
import Shop from './Pages/Shop.jsx'
import ShopCategory from './Pages/ShopCategory.jsx'
import Product from './Pages/Product.jsx'
import Cart from './Pages/Cart.jsx'
import LoginSignup from './Pages/LoginSignup.jsx'
import ShopContextProvider  from './Context/ShopContext.jsx'
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import Kid_banner from './components/Assets/banner_kids.png'

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<App/>,
      children :
      [
        {
          path:"/shop",
          element:<Shop/>

        },
        {
          path:"/mens",
          element:<ShopCategory banner={men_banner} category='men' />
        },
        {
          path:"/women",
          element:<ShopCategory banner={women_banner} category='women' />
        },
        {
          path:"/kids",
          element:<ShopCategory banner={Kid_banner} category='kids' />
        },
        {
          path:"/products",
          element:<Product />,
          children:[
            {
              path: ":productId",
              element: <Product />
            }
          ]

        },
        {
          path:"/cart",
          element:<Cart/>
        },
        {
          path:"/login",
          element:<LoginSignup/>
        }
    
        
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <ShopContextProvider>
  <React.StrictMode>
    
   <RouterProvider router={router} />
  </React.StrictMode></ShopContextProvider>,
)
