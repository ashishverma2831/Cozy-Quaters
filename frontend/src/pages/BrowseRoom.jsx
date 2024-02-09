import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Link, useParams } from 'react-router-dom';
import rooms from '../components/roomData';

const BrowseRoom = () => {

  const {city} = useParams();
  console.log(city);
  const [roomList, setRoomList] = useState(rooms);

  const getRooms = (city)=>{
    const filteredRooms = rooms.filter((room)=>{
      return room.location.toLowerCase().includes(city.toLowerCase())
    })
    setRoomList(filteredRooms);
    console.log(filteredRooms);
  }
  console.log(roomList);

  useEffect(()=>{
    getRooms(city);
  },[])
  return (
    <>
      <Navbar />
      <p className='text-center text-2xl font-semibold my-6'>Rooms in {city.toUpperCase()}</p>
      <section className='my-10 mx-auto max-w-screen-xl flex flex-wrap gap-8 justify-center'>
      {
        roomList.length===0?<p className='text-center font-semibold text-2xl'>No results found</p>:
          roomList.map((room)=>{
          return (
                <div className='my-4' key={room}>
                  <div className="mx-auto max-w-sm min-w-96 bg-white border border-gray-200 hover:scale-105 duration-500 hover:duration-500 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                    <Link href="#">
                      <img className="rounded-t-lg w-full h-[324px]" src={room.image} alt="room photo" />
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
                      </div>
                    </div>
                  </div>
                </div>
          )
        })
      }
      </section>
      <Footer />
    </>
  )
}

export default BrowseRoom