import React, { useRef, useState } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import RoomCard from './RoomCard';

const Slider = () => {
  return (
    <>
        <Swiper
        cssMode={true}
        navigation={{
            nextEl:'.swiper-button-next',
            prevEl:'.swiper-button-prev'
        }}
        // pagination={{
        //     clickable:true
        // }}
        breakpoints={{
            1024:{
                slidesPerView: 3
                },
            640 :{
                slidesPerView: 2
            },
            400 :{
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
        modules={[Navigation,Autoplay,Pagination, Mousewheel, Keyboard]}
        max
        className="max-w-screen-xl mx-auto flex justify-center"
      >
        <SwiperSlide><RoomCard /></SwiperSlide>
        <SwiperSlide><RoomCard /></SwiperSlide>
        <SwiperSlide><RoomCard /></SwiperSlide>
        <SwiperSlide><RoomCard /></SwiperSlide>
        <SwiperSlide><RoomCard /></SwiperSlide>
        <SwiperSlide><RoomCard /></SwiperSlide>
        <SwiperSlide><RoomCard /></SwiperSlide>
        <SwiperSlide><RoomCard /></SwiperSlide>
        <SwiperSlide><RoomCard /></SwiperSlide>
        <SwiperSlide><RoomCard /></SwiperSlide>
        <SwiperSlide><RoomCard /></SwiperSlide>
        <div className='swiper-button-next rounded-full bg-gray-200 h-20 w-20 text-gray-400  shadow-lg'></div>
        <div className='swiper-button-prev  rounded-full bg-gray-200 h-20 w-20 text-gray-400 shadow-lg'></div>
      </Swiper>
    </>
  )
}

export default Slider