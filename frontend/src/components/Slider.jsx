import React, { useRef, useState } from 'react'
import {Link} from 'react-router-dom'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
// import RoomCard from './RoomCard';
import rooms from './roomData.js';

const Slider = () => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
        // pagination={{
        //     clickable:true
        // }}
        breakpoints={{
          1024: {
            slidesPerView: 3
          },
          640: {
            slidesPerView: 2
          },
          400: {
            slidesPerView: 1
          }
        }}
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
        max
        className="max-w-screen-xl mx-auto flex justify-center"
      >
        {
          rooms.map((room) => {
            return (
              <SwiperSlide>
                <div className='my-4'>
                  <div className="mx-auto max-w-sm min-w-96 bg-white border border-gray-200 hover:scale-105 duration-500 hover:duration-500 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                    <Link href="#">
                      <img className="rounded-t-lg w-full" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgByBT5IiAT_a2x9pUVb4VMoOrlzHH7Jrzj-HB5jzHlR4lNLMS" alt="" />
                    </Link>
                    <div className="p-5">
                      <Link href="#">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {room.title.toUpperCase()}
                        </h5>
                        <p className='font-semibold text-md mb-2'><i className="fa-solid fa-location-dot"></i> {room.location} </p>
                      </Link>
                      <div className='bg-gray-300'>
                        <div className='p-2 flex border-b'><p className='w-1/2'>Accomodation for</p><p>{room.accomodationFor}</p></div>
                        <div className='p-2 flex border-b'><p className='w-1/2'>Suitable for</p><p>{room.suitableFor}</p></div>
                        <div className='p-2 flex '><p className='w-1/2'>Price</p><p>Rs. {room.price}</p></div>
                      </div>
                      <div className='flex mt-4 justify-between'>
                        <div><i className="fa-solid fa-user"></i> {room.ownerName} </div>
                        <div><i className="fa-regular fa-calendar-days"></i> {room.uploaded} </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })
        }
        {/* <SwiperSlide><RoomCard /></SwiperSlide> */}
        <div className='swiper-button-next rounded-full bg-gray-200 h-20 w-20 text-gray-400  shadow-lg'></div>
        <div className='swiper-button-prev  rounded-full bg-gray-200 h-20 w-20 text-gray-400 shadow-lg'></div>
      </Swiper>
    </>
  )
}

export default Slider