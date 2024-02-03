import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const AddRoom = () => {
    return (
        <>
        <Navbar />
            <section className='max-w-screen-lg flex flex-col gap-4 mx-auto p-5 my-10'>
                <p className='text-3xl font-extrabold text-center my-4'>Submit Room</p>
                <form>
                    <div className='flex gap-4 md:gap-6 w-full py-2'>
                        <div className='w-full'>
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                            >
                                Owner Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Enter your name..."
                                required="true"
                            />
                        </div>
                        <div className='w-full'>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                            >
                                Your email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@company.com"
                                required="true"
                            />
                        </div>
                        <div className='w-full'>
                            <label
                                htmlFor="number"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                            >
                                Your Phone Number
                            </label>
                            <input
                                type="number"
                                name="number"
                                id="number"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Enter your phone number..."
                                required="true"
                            />
                        </div>
                    </div>
                    <div className='flex gap-4 md:gap-6 w-full py-2'>
                        <div className='w-full'>
                            <label
                                htmlFor="accomodation"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Accomodation For
                            </label>
                            <select
                                id="accomodation"
                                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                required="true"
                            >
                                <option value="">Select an Option</option>
                                <option value="working professional">Working Professionals</option>
                                <option value="students">Students</option>
                                <option value="both working professional and students">Both Working Professional and Students</option>
                            </select>
                        </div>
                        <div className='w-full'>
                            <label
                                htmlFor="suitable"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Suitable For
                            </label>
                            <select
                                id="suitable"
                                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                required="true"
                            >
                                <option value="">Select an Option</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="both">Both Male and Female</option>
                            </select>
                        </div>
                        <div className='w-full'>
                            <label
                                htmlFor="number"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                            >
                                Amount in Rupees
                            </label>
                            <input
                                type="number"
                                name="number"
                                id="number"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Enter your phone number..."
                                required="true"
                            />
                        </div>
                    </div>
                    <div className='flex gap-4 md:gap-6 w-full py-2'>
                        <div className='w-full'>
                            <label
                                htmlFor="roomname"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                            >
                                Room Name/Title
                            </label>
                            <input
                                type="text"
                                name="roomname"
                                id="roomname"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Enter your room name..."
                                required="true"
                            />
                        </div>
                    </div>
                    <div className='flex gap-4 md:gap-6 w-full py-2 '>
                        <div className='w-full'>
                            <label
                                htmlFor="message"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                            >
                                Room description
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Enter description..."
                                required="true"
                            />
                        </div>
                    </div>
                    <div className='flex gap-4 md:gap-6 w-full py-2 '>
                    <div className='w-full'>
                            <label
                                htmlFor="address"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                            >
                                Your Address
                            </label>
                            <input
                                type="text"
                                name="address"
                                id="address"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Enter your address..."
                                required="true"
                            />
                        </div>
                    </div>
                    <div className='flex justify-between gap-12 my-4'>
                        <button
                            type='submit'
                            className=" w-auto text-white text-lg bg-gray-600 hover:bg-gray-700 focus:outline-none font-normal rounded px-10 py-2.5 text-center "
                        >Reset</button>
                        <button
                            type='submit'
                            className="w-auto text-white text-lg bg-gray-600 hover:bg-gray-700 focus:outline-none font-normal rounded px-10 py-2.5 text-center "
                        >Submit</button>
                    </div>
                </form>
            </section>
            <Footer />
        </>
    )
}

export default AddRoom