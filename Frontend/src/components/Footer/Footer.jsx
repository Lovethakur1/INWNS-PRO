import React from 'react';
import Logo from '../Assets/logo_big.png';
import { Link } from 'react-router-dom';

function Footer({ light }) {
  const themeClass = light ? "text-gray-600 dark:text-gray-300" : "text-black dark:text-gray-300";

  return (
    <footer className={`bg-white ${light ? 'dark:bg-gray-100' : 'dark:bg-gray-800'}`}>
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center">
          <Link href="#">
            <div className='flex items-center gap-5'>
              <img src={Logo} alt="" />
              <p className={`text-3xl font-semibold ${light ? 'text-gray-800' : 'text-white'}`}>IN-WNS</p>
            </div>
          </Link>

          <div className="flex flex-wrap justify-center mt-6 -mx-4">
            <Link href="#" className={`mx-4 text-lg  ${light ? 'text-gray-800' : 'text-white'}`} aria-label="Home">Home</Link>
            <Link href="#" className={`mx-4 text-lg  ${light ? 'text-gray-800' : 'text-white'}`} aria-label="About">About</Link>
            <Link href="#" className={`mx-4 text-lg  ${light ? 'text-gray-800' : 'text-white'}`} aria-label="Teams">Teams</Link>
            <Link href="#" className={`mx-4 text-lg  ${light ? 'text-gray-800' : 'text-white'}`} aria-label="Privacy">Privacy</Link>
            <Link href="#" className={`mx-4 text-lg  ${light ? 'text-gray-800' : 'text-white'}`} aria-label="Cookies">Cookies</Link>
          </div>
        </div>

        <hr className={`my-6 border-gray-200 ${light ? 'md:my-10' : 'md:my-8'} dark:border-gray-700 ${light ? 'border-gray-700' : 'border-gray-100'}`} />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className={`text-sm ${light ? 'text-gray-800' : 'text-white'}`}>© Copyright 2021. All Rights Reserved.</p>
          <div className="flex -mx-2">
            <Link href="#" className={`mx-2 text-gray-600  transition-colors duration-300 dark:hover:text-blue-400`} aria-label="Reddit">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {/* Reddit Icon SVG */}
              </svg>
            </Link>
            <Link href="#" className={`mx-2 text-gray-600  transition-colors duration-300 dark:hover:text-blue-400`} aria-label="Facebook">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {/* Facebook Icon SVG */}
              </svg>
            </Link>
            <Link href="#" className={`mx-2 text-gray-600  transition-colors duration-300 dark:hover:text-blue-400`} aria-label="Github">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {/* Github Icon SVG */}
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
