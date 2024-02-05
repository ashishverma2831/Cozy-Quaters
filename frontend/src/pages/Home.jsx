import React, {useState, useRef} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Slider from '../components/Slider'
import FeatureCard from '../components/FeatureCard'
import rooms from '../components/roomData'
import { Link } from 'react-router-dom'

const Home = () => {

  const searchInputRef = useRef(null);
  const [roomList, setRoomList] = useState(rooms)
  const [searchRoomList, setSearchRoomList] = useState([]);
  const handleSearch = (e) => {
    e.preventDefault();
    // console.log(searchInputRef.current.value);
    const filteredRooms = rooms.filter((room)=>{
      return room.location.toLowerCase().includes(searchInputRef.current.value.toLowerCase());
    })
    console.log(filteredRooms);
    setRoomList(filteredRooms);
    setSearchRoomList(filteredRooms);
  }

  return (
    <>
      <Navbar />
      <Hero  searchInputRef={searchInputRef} handleSearch={handleSearch} />

      {searchInputRef.current && searchInputRef.current.value?<p className='text-center font-semibold text-4xl my-10'>Search Results for '{searchInputRef.current.value}'</p>:<p className='text-center font-bold text-4xl'></p>}
      <section className='my-10 mx-auto max-w-screen-xl flex flex-wrap gap-8 justify-center'>
      {
        roomList.length===0?<p className='text-center font-semibold text-2xl'>No results found</p>:
        searchRoomList.map((room)=>{
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
                        {/* <div><i className="fa-regular fa-calendar-days"></i> {room.uploaded} </div> */}
                      </div>
                    </div>
                  </div>
                </div>
          )
        })
      }
    
      </section>
      <section className='my-10  max-w-screen-xl mx-auto'>
        <div className='p-5'>
          <p className='text-center font-bold text-4xl'>Newly added Rooms</p>
        </div>
        <div className='py-10'>
          <Slider />
        </div>
      </section>
      <section className='my-10 mx-auto max-w-screen-xl'>
        <div className='p-5'>
          <p className='text-center font-bold text-4xl'>Why Choose Cozy Quarters?</p>
        </div>
        <div className='py-10 flex justify-evenly flex-wrap gap-8'>
          <FeatureCard />
        </div>
      </section>
      <section className='my-10 mx-auto max-w-screen-xl flex flex-col gap-8 p-5'>
        <div className='p-5'>
          <p className='text-center font-bold text-4xl'>Most Popular Places</p>
          <p className='text-center font-semibold text-xl my-2'>Properties In Most Popular Places</p>
        </div>
        <div className='flex gap-8 flex-wrap'>
          <div className='flex gap-8 flex-wrap md:flex-nowrap w-full'>
            <div className='md:w-1/3 w-full overflow-hidden flex justify-center items-center'>
              <img className='h-[436px] hover:scale-150 hover:duration-700 duration-700 opacity-80' src='https://www.pgchoice.com//assets/images/delhi.jpg' />
              <div className='p-5 z-10 absolute'>
                <p className='text-center font-extrabold text-2xl '>Faridabad</p>
                <p className='text-center font-extrabold text-md '>56 Properties</p>
              </div>
            </div>
            <div className='md:w-2/3 w-full overflow-hidden flex justify-center items-center'>
              <img className='h-[436px] w-full hover:scale-150 hover:duration-700 duration-700 opacity-80' src='https://www.pgchoice.com//assets/images/faridabad.jpg' />
              <div className='p-5 z-10 absolute'>
                <p className='text-center font-extrabold text-2xl'>Ghaziabad</p>
                <p className='text-center font-extrabold text-md '>78 Properties</p>
              </div>
            </div>
          </div>
          <div className='flex gap-8 flex-wrap md:flex-nowrap w-full'>
            <div className='md:w-2/3 w-full overflow-hidden flex justify-center items-center'>
              <img className='h-[436px] w-full hover:scale-150 hover:duration-700 duration-700 opacity-80' src='https://www.pgchoice.com//assets/images/gurgaon.jpg' />
              <div className='p-5 z-10 absolute'>
                <p className='text-center font-extrabold text-2xl '>Gurgaon</p>
                <p className='text-center font-extrabold text-md '>78 Properties</p>
              </div>
            </div>
            <div className='md:w-1/3 w-full overflow-hidden flex justify-center items-center'>
              <img className='h-[436px] hover:scale-150 hover:duration-700 duration-700 opacity-80' src='https://www.pgchoice.com//assets/images/noida.jpg' />
              <div className='p-5 z-10 absolute'>
                <p className='text-center font-extrabold text-2xl '>Noida</p>
                <p className='text-center font-extrabold text-md '>78 Properties</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Home