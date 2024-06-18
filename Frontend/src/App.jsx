import React, { useState } from 'react';
import { Navbar, Footer } from './components/Index'; // Import Navbar and Footer from components/Index
import { Outlet } from 'react-router-dom';



function App() {
  const [count, setCount] = useState(0);

  return (
    
      <div className='min-h-screen flex flex-wrap content-between'>
        <div className='w-full block'>
          <Navbar />
          <main>
            <Outlet />
          </main>
          <Footer light={1} />
        </div>
      </div>
    
  );
}

export default App; // Export the App component
