import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer>
        <div className='max-w-screen-xl mx-auto'>
          <div className=' flex justify-around border-b gap-8 md:flex-nowrap flex-wrap pb-4'>
            <div className='p-4 md:w-1/3 w-full'>
              <div id="drawer-navigation-label" className=" text-3xl font-extrabold italic">
                Cozy Quarters
              </div>
              <p className="text-sm pt-4 px-2">CozyQuaters.com - Is an online mutual support network for people working in Paying Guest/Hostels & Hotels? It's based in India in Service Sector, and with long experience in PAN INDIA lodging market it helps People to find the PG/Hostel that perfectly matches their needs.
              </p>
              <Link to='/about' className='hover:cursor-pointer px-2 text-blue-700'>Read more...</Link>
            </div>
            <div className='p-2 w-2/5 md:w-1/3'>
                <p className='text-lg font-semibold pb-2 md:py-5'>Helpful Links</p>
                <div>
                  <ul className='flex gap-y-2 flex-wrap'>
                    <li className='w-1/2 hover:translate-x-1  hover:duration-500 duration-500'><Link to='/login' className='hover:underline hover:cursor-pointer '>Login</Link></li>
                    <li className=' w-1/2  hover:translate-x-1  hover:duration-500 duration-500'><Link to='/about' className='hover:underline hover:cursor-pointer'>About</Link></li>
                    <li className='w-1/2  hover:translate-x-1  hover:duration-500 duration-500'><Link to='/register' className='hover:underline hover:cursor-pointer'>Register</Link></li>
                    <li className='w-1/2   hover:translate-x-1 hover:duration-500 duration-500'><Link to='#' className='hover:underline hover:cursor-pointer'>Subscription</Link></li>
                    <li className='w-1/2  hover:translate-x-1  hover:duration-500 duration-500'><Link to='/contact' className='hover:underline hover:cursor-pointer'>Contact Us</Link></li>
                    <li className='w-1/2   hover:translate-x-1 hover:duration-500 duration-500'><Link to='/feedback' className='hover:underline hover:cursor-pointer'>Feedback</Link></li>
                    <li className='w-1/2  hover:translate-x-1  hover:duration-500 duration-500'><Link to='#' className='hover:underline hover:cursor-pointer'>Privacy Policy</Link></li>
                  </ul>
                </div>
            </div>
            <div className='p-2 w-2/5 md:w-1/3'>
                <p className='text-lg font-semibold pb-2 md:py-5'>Contact Us</p>
                <p>Building No-258, Yadav Colony,<br />
                  Rajeev Gandhi Marg, Ballabgarh,<br />
                  Faridabad (Haryana) 121004</p>
                <p className='py-2'>E-mail: <Link>ashishverma510207@gmail.com</Link></p>
                <div className='flex gap-4'>
                  <Link className='text-3xl text-blue-700'><i className="fa-brands fa-facebook"></i></Link>
                  <Link className='text-3xl text-red-700'><i className="fa-brands fa-youtube"></i></Link>
                  <Link className='text-3xl text-pink-700'><i className="fa-brands fa-instagram"></i></Link>
                </div>
            </div>
          </div>
          <div className='text-center py-4'>
            <p>© Cozy Quarters All Rights Reserved, 2024</p>
          </div>
        </div>  
      </footer>
    </>
  )
}

export default Footer