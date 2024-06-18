import React from 'react';
import { Link } from 'react-router-dom';

const NewsLetter = () => {
  return (
    <aside className="p-4 mx-20 my-8 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 lg:p-8 " aria-label="Subscribe to the Flowbite newsletter">
      <h3 className="mb-3 text-xl font-medium text-gray-900 ">Get Exclusive Offers In Your Inbox</h3>
      <p className="mb-5 text-sm font-medium text-gray-500 ">
        Subscribe to our newsletter and get notified about our latest products and offers. It's completely free.
      </p>
      <form>
        <div className="flex items-end mb-3">
          <div className="flex items-center w-full max-w-md mb-3 seva-fields formkit-fields">
            <div className="relative w-full mr-3 formkit-field">
              <label htmlFor="member_email" className="hidden block mb-2 text-sm font-medium text-gray-900 ">Email address</label>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <input id="member_email" className="formkit-input bg-gray-50 border border-gray-300 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="email_address" aria-label="Email Address" placeholder="Your email address..." required="" type="email"/>
            </div>
            <button className="px-5 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg cursor-pointer hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit">Subscribe</button>
          </div>
        </div>
      </form>
      <div className="text-sm font-medium text-gray-500 ">By subscribing, you agree with ConvertKit's <Link href="#" className="text-blue-600 hover:underline dark:text-blue-500">Terms of Service</Link> and <Link className="text-blue-600 hover:underline dark:text-blue-500" href="#">Privacy Policy</Link>.</div>
    </aside>
  );
}

export default NewsLetter;
