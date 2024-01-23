import React from 'react'

const AddRoom = () => {
    return (
        <>
            <section className='max-w-screen-lg flex flex-col gap-4 mx-auto bg-red-900 p-5'>
                <p className='text-3xl font-extrabold text-center'>Submit Room</p>
                <form>
                    <div className='flex gap-4 md:gap-6 w-full bg-blue-600 py-2'>
                        <div className='w-full'>
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                            >
                                Your Name
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
                    <div className='flex gap-4 md:gap-6 w-full bg-blue-600 py-2'>
                        <div>
                            <label
                                htmlFor="rating"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Ratings
                            </label>
                            <select
                                id="rating"
                                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="Let us know how we can help you"
                                required="true"
                                onChange={feedbackForm.handleChange}
                                value={feedbackForm.values.rating}
                            >
                                <option value="5">5 stars</option>
                                <option value="4">4 stars</option>
                                <option value="3">3 stars</option>
                                <option value="2">2 stars</option>
                                <option value="1">1 stars</option>
                            </select>
                        </div>
                        <div>
                            <label
                                htmlFor="rating"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Ratings
                            </label>
                            <select
                                id="rating"
                                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="Let us know how we can help you"
                                required="true"
                                onChange={feedbackForm.handleChange}
                                value={feedbackForm.values.rating}
                            >
                                <option value="5">5 stars</option>
                                <option value="4">4 stars</option>
                                <option value="3">3 stars</option>
                                <option value="2">2 stars</option>
                                <option value="1">1 stars</option>
                            </select>
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
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className='flex justify-between gap-12'>
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
        </>
    )
}

export default AddRoom