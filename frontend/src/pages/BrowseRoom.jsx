import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Link, useParams } from 'react-router-dom';
import rooms from '../components/roomData';
import { useFormik } from 'formik';

const BrowseRoom = () => {

  const { city } = useParams();
  console.log(city);
  const [roomList, setRoomList] = useState(rooms);

  const getRooms = (city) => {
    const filteredRooms = rooms.filter((room) => {
      return room.location.toLowerCase().includes(city.toLowerCase())
    })
    setRoomList(filteredRooms);
    console.log(filteredRooms);
  }
  // console.log(roomList);

  useEffect(() => {
    getRooms(city);
  }, [])


  const filterForm = useFormik({
    initialValues: {
      suitable: '',
      accomodation: '',
      price: ''
    },
    onSubmit: (values) => {
      console.log(values);
      console.log(values.suitable.toLowerCase());
      const filteredRooms = roomList.filter((room) => {
        return room.suitableFor.toLowerCase().includes(values.suitable.toLowerCase()) && room.accomodationFor.toLowerCase().includes(values.accomodation.toLowerCase()) && room.price <= values.price
      })
      setRoomList(filteredRooms);
      console.log(filteredRooms);
    }
  })
  return (
    <>
      <Navbar />
      <p className='text-center text-2xl font-semibold mt-6 bg-sky-100 p-10 underline'>Rooms in {city.toUpperCase()}</p>
      <div className='bg-sky-100 pb-5'>
        <form className='bg-sky-100 max-w-screen-xl mx-auto px-10 py-5 flex gap-8 flex-wrap justify-evenly' onSubmit={filterForm.handleSubmit}>
          <select
            id="suitable"
            className="w-full md:w-64 p-3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm "
            onChange={filterForm.handleChange}
            value={filterForm.values.suitable}
          >
            <option value="">Suitable For</option>
            <option value="working">Working Professionals</option>
            <option value="students">Students</option>
            <option value="working and students">Both Working Professional and Students</option>
          </select>
          <select
            id="accomodation"
            className="w-full md:w-64 p-3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm "
            onChange={filterForm.handleChange}
            value={filterForm.values.accomodation}
          >
            <option value="">Accomodation For</option>
            <option value="Boys">Male</option>
            <option value="Girls">Female</option>
            <option value="Boys and Girls">Both Male and Female</option>
          </select>
          <select
            id="price"
            className="w-full md:w-64 p-3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm"
            onChange={filterForm.handleChange}
            value={filterForm.values.price}
          >
            <option value="">Max Price</option>
            <option value="3000">₹3000</option>
            <option value="4000">₹4000</option>
            <option value="5000">₹5000</option>
            <option value="6000">₹6000</option>
            <option value="7000">₹7000</option>
          </select>
          <button  type='submit' className='w-full md:w-[250px] border px-5 py-3 rounded-lg bg-blue-600 hover:opacity-90 text-white'>Search</button>
        </form>
      </div>
      <section className='my-10 mx-auto max-w-screen-xl flex flex-wrap gap-8 justify-center'>
        {
          roomList.length === 0 ? <p className='text-center font-semibold text-2xl'>No results found</p> :
            roomList.map((room) => {
              return (
                <Link to={'/cities/' + city + '/' + room.id} className='my-4' key={room.id}>
                  <div className="mx-auto max-w-sm min-w-96 bg-white border border-gray-200 hover:scale-105 duration-500 hover:duration-500 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                    <div>
                      <img className="rounded-t-lg w-full h-[324px]" src={room.image[0]} alt="room photo" />
                    </div>
                    <div className="p-5">
                      <Link>
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
                </Link>
              )
            })
        }
      </section>
      <Footer />
    </>
  )
}

export default BrowseRoom