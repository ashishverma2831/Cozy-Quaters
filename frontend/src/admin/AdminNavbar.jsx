import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const AdminNavbar = () => {
    return (
        <>
            <nav className="border-gray-200">
                <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 ">
                    <div className=" text-3xl font-extrabold italic whitespace-nowrap ">
                        Cozy Quarters
                    </div>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse justify-end md:w-auto w-full ">
                        <div className='flex'>
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
                        className="items-center hidden w-full md:flex md:w-auto "
                    >
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
                            <li>
                                <NavLink
                                    to='/admin-home'
                                    href="#"
                                    className="block py-2 px-3 text-gray-900 rounded md:bg-transparent hover:bg-gray-100 active:bg-gray-100"
                                    aria-current="page"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/view-users'
                                    className="block py-2 px-3 text-gray-900 rounded md:bg-transparent hover:bg-gray-100 "
                                    aria-current="page"
                                >
                                    View Users
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/view-feedbacks'
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100  "
                                >
                                    View Feedbacks
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/view-contacts'
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 "
                                >
                                    View Contacts
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/view-rooms'
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 "
                                >
                                    View Rooms
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
                            <div className="py-4 overflow-y-auto ">
                                <ul className="space-y-2 font-medium">
                                    <li>
                                        <NavLink
                                            to='/admin-home'
                                            href="#"
                                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                        >
                                            <span className="ms-3">Home</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <Link
                                            to='/view-users'
                                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                        >
                                            <span className="ms-3">View Users</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <NavLink
                                            to='/view-feedbacks'
                                            href="#"
                                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                        >
                                            <span className="ms-3">View Feedbacks</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to='/view-contacts'
                                            href="#"
                                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                        >
                                            <span className="ms-3">View Contacts</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to='/view-rooms'
                                            href="#"
                                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                        >
                                            <span className="ms-3">View Rooms</span>
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

export default AdminNavbar