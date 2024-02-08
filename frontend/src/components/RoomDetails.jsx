import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const RoomDetails = () => {
  return (
    <>
        {/* <Navbar /> */}
        <section className='bg-red-400 mx-auto max-w-screen-lg my-10'>
            <div className='flex p-2 justify-between items-center'>
                <div>
                    <p className='text-xl font-semibold'>Shri Balaji pg for boys in govindpuram,ghaziabad
                    <span className="mx-2 bg-purple-100 text-purple-800 text-md font-medium px-4 py-1.5 rounded">boys</span>
                    </p>
                    <p className='text-lg font-normal'><i className="fa-solid fa-location-dot mr-1"></i> location hbhjvvk</p>
                </div>
                <div>
                    <p className='text-3xl font-extrabold'>₹ 7800</p>
                </div>
            </div>
            <div>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div></div>
            </div>
        </section>
        {/* <Footer /> */}
    </>
  )
}

export default RoomDetails