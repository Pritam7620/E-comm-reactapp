import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='mt-16 p-12'>
      <div className='flex justify-between p-8 bg-sky-100 border-b-1'>

        <div className='text-black '>
          <h1 className='ml-4 text-3xl font-bold mb-4'>Shop.co</h1>
          <p className='mb-2'>wwe have clothes that suits your style and <br />which your proud to wear. from <br />women to men</p>
           <div className='flex gap-8 mt-5 text-3xl '>
          <Link to="https://x.com/?lang=en-in"> <i className="fa-brands fa-x-twitter"></i></Link>
         
          <Link to="https://www.facebook.com/help/ipreporting/report/copyright"><i className="fa-brands fa-facebook"></i></Link>            
            <Link to="https://www.instagram.com/accounts/login/?hl=en"><i className="fa-brands fa-instagram"></i></Link>
            
            <Link to="https://github.com/Pritam7620"> <i className="fa-brands fa-github"></i></Link>
           
            
            </div>

        </div>
        <div>
          <h1 className='font-bold'>COMPANY</h1>

          <ul >
            <li className='mb-2 mt-3'>About</li>
            <li className='mb-2'>Features</li>
            <li className='mb-2'>Works</li>
            <li className='mb-2'>Career</li>
          </ul>

        </div>
        <div>

          <h1 className='font-bold'>HELP</h1>
          <ul>
            <li className='mb-2 mt-3' >Cutomer Support</li>
            <li className='mb-2'>Delivary Details</li>
            <li className='mb-2'>Term & Conditions</li>
            <li className='mb-2'>Privacy Policy</li>
          </ul>
        </div>
        <div>

          <h1 className='font-bold'>FAQ</h1>
          <ul>
            <li className='mb-2 mt-3'>Account</li>
            <li className='mb-2'>Manage Deliveries</li>
            <li className='mb-2'>Orders</li>
            <li className='mb-2'>Payments</li>
          </ul>
        </div>
        <div>

          <h1 className='font-bold'>RESOURCES</h1>
          <ul>
            <li className='mb-2 mt-3'>Free eBooks</li>
            <li className='mb-2'>Development Tutorials</li>
            <li className='mb-2'>How To-Blog</li>
            <li className='mb-2'>Youtube Playlist</li>
          </ul>
        </div>
      </div>

      <div className='flex justify-between pl-12 pr-12 mt-8 mb-4'>
        <div>
          <p>shpo.co @2002-2023. All right Reserved</p></div>
        <div className='flex gap-8 text-3xl'>
          <i className="fa-brands fa-cc-visa"></i>
          <i className="fa-brands fa-cc-mastercard"></i>
          <i className="fa-brands fa-cc-paypal"></i>
          <i className="fa-brands fa-apple-pay"></i>
          <i className="fa-brands fa-google-pay"></i>
        </div>
      </div>

    </div>
  )
}

export default Footer


