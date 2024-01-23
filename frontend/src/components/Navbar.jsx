import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import useAppContext from '../AppContext'

const Navbar = () => {

  const {currentUser,setCurrentUser,loggedIn,setLoggedIn,logout} = useAppContext();
  const showLoginOptions = ()=>{
    if(loggedIn){
      return (
        <button className='p-2 border'>
          <button className='' onClick={logout}>logout</button>
        </button>
      )
    }
    else{
      return <>
         <NavLink 
        to='/login'
        className="text-gray-900 focus:outline-none  font-medium  text-sm px-4 py-2 text-center border-gray-400"
      >
        Login
      </NavLink>
      <div className=' w-[1px] h-6 self-center bg-gray-600'></div>
      <NavLink
        to='/register'
        className="text-gray-900 focus:outline-none font-medium text-sm px-4 py-2 text-center border-gray-400"
      >
        Register
      </NavLink>
      </>
    }
  }
  const cities = ['Lucknow','Barabanki','Kanpur','Banaras']
  return (
    <>
        <nav className="border-gray-200">
     <div className="max-w-screen-xl  flex items-center justify-between mx-auto p-4">
      <div className=" text-3xl font-extrabold italic whitespace-nowrap ">
        Cozy Quarters
      </div>
    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse justify-end md:w-auto w-full ">
      <div className='flex'>
      {/* <NavLink 
        to='/login'
        className="text-gray-900 focus:outline-none  font-medium  text-sm px-4 py-2 text-center border-gray-400"
      >
        Login
      </NavLink>
      <div className=' w-[1px] h-6 self-center bg-gray-600'></div>
      <NavLink
        to='/register'
        className="text-gray-900 focus:outline-none font-medium text-sm px-4 py-2 text-center border-gray-400"
      >
        Register
      </NavLink> */}
        {showLoginOptions()}
      </div>
      <button
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none "
        data-drawer-target="drawer-navigation"
      data-drawer-show="drawer-navigation"
      aria-controls="drawer-navigation"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    </div>
    <div
      className="items-center justify-between hidden w-full md:flex md:w-auto"
    >
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
        <li>
          <NavLink 
            to='/'
            href="#"
            className="block py-2 px-3 text-gray-900 rounded md:bg-transparent hover:bg-gray-100 "
            aria-current="page"
          >
            Home
          </NavLink>
        </li>
        <li>
        <div>
  <button
    id="dropdownHoverButton"
    data-dropdown-toggle="dropdownHover"
    data-dropdown-trigger="hover"
    className="text-gray-900 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
    type="button"
  >
    Cities
    <svg
      className="w-2.5 h-2.5 ms-3"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 10 6"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m1 1 4 4 4-4"
      />
    </svg>
  </button>
  {/* Dropdown menu */}
  <div
    id="dropdownHover"
    className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
  >
    <ul
      className="py-2 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="dropdownHoverButton"
    >
      {cities.map((city)=>{
        return(
          <li>
        <Link
          href="#"
          className="block px-4 py-2 hover:bg-gray-100 "
        >
          {city}
        </Link>
      </li>
        )
      })}
    </ul>
  </div>
</div>

        </li>
        <li>
          <NavLink 
            to='/about'
            href="#"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100  "
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/feedback'
            href="#"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 "
          >
            Feedback
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/contact'
            href="#"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 "
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </div>

  {/* drawer init and show */}
    <div>
  {/* drawer component */}
  <div
    id="drawer-navigation"
    className="fixed top-0 left-0 z-40 w-64 h-screen p-4 items-center overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800"
    tabIndex={-1}
    aria-labelledby="drawer-navigation-label"
  >
      <div id="drawer-navigation-label" className=" text-xl font-extrabold italic whitespace-nowrap ">
        Cozy Quarters
      </div>
    <button
      type="button"
      data-drawer-hide="drawer-navigation"
      aria-controls="drawer-navigation"
      className="text-gray-700 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
    >
      <svg
        aria-hidden="true"
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
      <span className="sr-only">Close menu</span>
    </button>
    <div className="py-4 overflow-y-auto">
      <ul className="space-y-2 font-medium">
        <li>
          <NavLink
            to='/'
            href="#"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <span className="ms-3">Home</span>
          </NavLink>
        </li>
        <li>
          <Link
            href="#"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <span className="ms-3">Cities</span>
          </Link>
        </li>
        <li>
          <NavLink
            to='/about'
            href="#"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <span className="ms-3">About</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/feedback'
            href="#"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <span className="ms-3">Feedback</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/contact'
            href="#"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <span className="ms-3">Contact Us</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/login'
            href="#"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <span className="ms-3">Login</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/register'
            href="#"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <span className="ms-3">Register</span>
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
</div>

  </div>
</nav>

    </>
  )
}

export default Navbar