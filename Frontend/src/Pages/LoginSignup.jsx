import React, { useState } from "react";
import Logo from '../components/Assets/logo.png';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (isLogin) {
      login();
    } else {
      signup();
    }
  };

  const login = async () => {
    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        localStorage.setItem('auth-token', data.token);
        window.location.replace("/");
      } else {
        alert(data.errors);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const signup = async () => {
    try {
      const response = await fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        localStorage.setItem('auth-token', data.token);
        window.location.replace("/");
      } else {
        alert(data.errors);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
      <div className="w-full max-w-lg bg-white rounded-xl p-10 border border-gray-200">
        <div className="mb-8 flex justify-center">
          <img src={Logo} alt="Logo" className="w-24 h-24" />
        </div>
        <h1 className="text-center text-gray-900 text-2xl font-bold mb-4">{isLogin ? "Login" : "Sign Up"}</h1>
        {!isLogin && (
          <input type="text" placeholder="Your name" name="username" value={formData.username} onChange={changeHandler} className="w-full px-3 py-2 mb-4 text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
        )}
        <input type="email" placeholder="Email address" name="email" value={formData.email} onChange={changeHandler} className="w-full px-3 py-2 mb-4 text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
        <input type="password" placeholder="Password" name="password" value={formData.password} onChange={changeHandler} className="w-full px-3 py-2 mb-4 text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />

        <button onClick={handleSubmit} className="w-full px-4 py-2 mb-4 text-white bg-gradient-to-br from-red-500 to-red-600 rounded-md focus:outline-none focus:ring focus:ring-red-400">Continue</button>

        {isLogin ? (
          <p className="text-center text-gray-700 mb-4">Create an account? <span className="font-medium text-blue-600 cursor-pointer" onClick={() => setIsLogin(false)}>Click here</span></p>
        ) : (
          <p className="text-center text-gray-700 mb-4">Already have an account? <span className="font-medium text-blue-600 cursor-pointer" onClick={() => setIsLogin(true)}>Login here</span></p>
        )}

        <div className="flex items-center mb-4">
          <input type="checkbox" className="mr-2" />
          <p className="text-gray-700">By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
