import React from 'react'

const RoomCard = () => {
  return (
    <div>
      <div className="mx-auto max-w-sm min-w-96 bg-white border border-gray-200 hover:scale-105 duration-500 hover:duration-500 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgByBT5IiAT_a2x9pUVb4VMoOrlzHH7Jrzj-HB5jzHlR4lNLMS" alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className='font-semibold text-md mb-2'><i className="fa-solid fa-location-dot"></i> location lucknow</p>
          </a>
          {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in
      reverse chronological order.
    </p> */}
          <div className='bg-gray-300'>
            <div className='p-2 flex border-b'><p className='w-1/2'>Accomodation for</p><p>Boys and Girls</p></div>
            <div className='p-2 flex border-b'><p className='w-1/2'>Suitable for</p><p>Students</p></div>
            <div className='p-2 flex '><p className='w-1/2'>Price</p><p>Rs. 5500</p></div>
          </div>
          <div className='flex mt-4 justify-between'>
            <div><i className="fa-solid fa-user"></i> Owner name</div>
            <div><i className="fa-regular fa-calendar-days"></i> 4 months</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default RoomCard