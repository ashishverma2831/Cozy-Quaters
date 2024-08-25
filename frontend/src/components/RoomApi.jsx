import React, { useEffect, useRef, useState } from 'react'
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
// import rooms from './roomData.js';

const RoomApi = () => {

    const [roomList, setRoomList] = useState([]);
    const fetchRooms = async ()=>{
        try {
            // const res = await fetch('http://localhost:5000/add-room/limited');
            const res = await fetch('https://cozy-quaters.onrender.com/add-room/limited');
            const data = await res.json();
            setRoomList(data);
        } catch (error) {
            console.log(error);
        }
    }
    console.log(roomList);
    useEffect(()=>{
        fetchRooms();
    },[])

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
           roomList.map((room,index) => {
            return (
              <SwiperSlide key={index}>
                <div className='my-4' key={room._id} >
                  <div className="mx-auto max-w-sm min-w-96 bg-white border border-gray-200 hover:scale-105 duration-500 hover:duration-500 rounded-lg shadow-lg ">
                    <div>
                      <img className="rounded-t-lg w-full h-[324px]" 
                        // src={'http://localhost:5000/uploads/'+room.image}
                        src={'https://cozy-quaters.onrender.com/uploads/'+room.image}
                      alt={room.image} />
                    </div>
                    <div className="p-5">
                      <div >
                        <h5 className="capitalize mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {room.roomname}
                        </h5>
                        <p className='font-semibold text-md mb-2 capitalize'><i className="fa-solid fa-location-dot"></i> {room.address} </p>
                      </div>
                      <div className='bg-gray-300'>
                        <div className='p-2 flex border-b capitalize'><p className='w-1/2'>Accomodation for</p><p>{room.accomodation}</p></div>
                        <div className='p-2 flex border-b capitalize'><p className='w-1/2'>Suitable for</p><p>{room.suitable}</p></div>
                        <div className='p-2 flex '><p className='w-1/2'>Price</p><p>Rs. {room.amount}</p></div>
                      </div>
                      <div className='flex mt-4 justify-between'>
                        <div className='capitalize'><i className="fa-solid fa-user mr-2"></i> {room.name} </div>
                        {/* <div><i className="fa-regular fa-calendar-days"></i> {room.uploaded} </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })
        }
        <div className='swiper-button-next rounded-full bg-gray-200 h-20 w-20 text-gray-400  shadow-lg'></div>
        <div className='swiper-button-prev  rounded-full bg-gray-200 h-20 w-20 text-gray-400 shadow-lg'></div>
      </Swiper>
    </>
  )
}

export default RoomApi