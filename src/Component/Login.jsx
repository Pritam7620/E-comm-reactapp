import React from 'react'
import Header from './Header'

function Login() {
  return (
    <div id='log'>
      <Header></Header>
   <div className="min-h-screen bg-gray-100 flex items-center justify-center">
  
  <div className="bg-white shadow-xl rounded-2xl p-8 w-96">
    
    <h1 className="text-2xl font-bold text-center mb-6">Login Form</h1>

    <form className="space-y-4">
      
      <input
        type="text"
        placeholder="Enter your name"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
      />

      <input
        type="email"
        placeholder="Enter your email"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
      />

      <input
        type="password"
        placeholder="Enter your password"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
      />

      <button
        type="submit"
        className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
      >
        Login
      </button>
    </form>

   
    <div className="flex items-center my-6">
      <hr className="flex-grow border-gray-300" />
      <span className="mx-2 text-gray-500 text-sm">OR</span>
      <hr className="flex-grow border-gray-300" />
    </div>

    
    <div className="space-y-3">
      
      <button className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-100 transition">
        <img
          src="https://img.icons8.com/color/16/google-logo.png"
          alt="google"
        />
        Continue with Google
      </button>

      <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
        <img
          src="https://img.icons8.com/ios-filled/16/ffffff/facebook.png"
          alt="facebook"
        />
        Continue with Facebook
      </button>

    </div>

  </div>

</div>
</div>
  )
}

export default Login
