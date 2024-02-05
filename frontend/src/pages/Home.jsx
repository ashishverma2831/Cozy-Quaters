import React, {useState, useRef} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Slider from '../components/Slider'
import FeatureCard from '../components/FeatureCard'
import rooms from '../components/roomData'

const Home = () => {

  const searchInputRef = useRef(null);
  const [roomList, setRoomList] = useState(rooms)
  const handleSearch = (e) => {
    e.preventDefault();
    // console.log(searchInputRef.current.value);
    const filteredRooms = rooms.filter((room)=>{
      return room.location.toLowerCase().includes(searchInputRef.current.value.toLowerCase());
    })
    console.log(filteredRooms);
    setRoomList(filteredRooms);
  }

  return (
    <>
      <Navbar />
      <Hero  searchInputRef={searchInputRef} handleSearch={handleSearch} />
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