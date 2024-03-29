import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useParams } from 'react-router-dom'
import rooms from '../components/roomData.js';
import { enqueueSnackbar } from 'notistack'
import useAppContext from '../AppContext.jsx'


const RequestFormSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  number: Yup.string().required('Number is required').min(10, 'Number should be 10 digits'),
  // duration: Yup.string().required('Duration is required')
})


const RoomDetails = () => {

  const {currentUser,setCurrentUser,loggedIn,setLoggedIn,logout} = useAppContext();

  const { id } = useParams();
  // console.log(id);
  const [room, setRoom] = useState(rooms[id-1]);
  // console.log(room);
  const getRoomDetails = () => {
    const temp = rooms.filter((room) => {
      return room.id === parseInt(id);
    });
    // console.log(id);
    console.log(temp);
    setRoom(temp);
    // console.log(room[0].image[0]);
    // console.log(room[0].image[1]);
    // console.log(room[0].image[2]);
  }


  const roomDetailsForm = useFormik({
    initialValues: {
      name: '',
      number: '',
      // duration: ''
    },
    onSubmit: async (values,{setSubmitting,resetForm}) => {
      console.log(values)
      setSubmitting(true);
      const res = await fetch('https://cozy-quaters.onrender.com/cities/:city/:id/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });
      console.log(res.status);
      setSubmitting(false);

      if(res.status === 200){
        enqueueSnackbar('Request Sent Successfully', {variant:'success'})
        resetForm();
      }
      else{
        enqueueSnackbar('Something went wrong', {variant:'error'})
      }
    },
    validationSchema: RequestFormSchema
  })


  useEffect(() => {
    // getRoomDetails();
  }, [])

  return (
    <>
      <Navbar />
      <section className=' mx-auto max-w-screen-lg my-10'>
        <div className='flex p-2 justify-between items-center'>
          <div className='px-4'>
            <p className='text-3xl font-semibold capitalize flex'>{room.title}
              <span className="mx-4 text-white bg-[#065c77] text-[20px] font-normal px-2 py-1 rounded"> {room.accomodationFor} </span>
            </p>
            <p className='text-lg font-normal my-1'><i className="fa-solid fa-location-dot mr-1"></i> {room.location} </p>
          </div>
          <div className='px-4'>
            <p className='text-5xl font-extrabold text-[#065c77] italic'>₹ {room.price}</p>
          </div>
        </div>
        <div className='flex flex-col md:flex-row'>
          <div className='w-full md:w-2/3 p-5'>
            <div id="default-carousel" className="relative w-full" data-carousel="slide">
              {/* Carousel wrapper */}
              <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {/* Item 1 */}
                <div className="duration-700 ease-in-out" data-carousel-item="">
                  <img
                    src={room.image[0]}
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="photo-1"
                  />
                </div>
                {/* Item 2 */}
                <div className="duration-700 ease-in-out" data-carousel-item="">
                  <img
                    src={room.image[1]}
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="photo-2"
                  />
                </div>
                {/* Item 3 */}
                <div className="duration-700 ease-in-out" data-carousel-item="">
                  <img
                    src={room.image[2]}
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="photo-3"
                  />
                </div>
              </div>
              {/* Slider indicators */}
              <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="true"
                  aria-label="Slide 1"
                  data-carousel-slide-to={0}
                />
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 2"
                  data-carousel-slide-to={1}
                />
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 3"
                  data-carousel-slide-to={2}
                />
              </div>
              {/* Slider controls */}
              <button
                type="button"
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev=""
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                  <span className="sr-only">Previous</span>
                </span>
              </button>
              <button
                type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next=""
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="sr-only">Next</span>
                </span>
              </button>
            </div>
            <div>
              <p className="text-white my-4 bg-[#065c77] text-md font-medium px-4 py-1.5 rounded">Details</p>
              <div>
                <div className='p-2 flex border-b'><p className='w-1/2 font-semibold text-md px-4 text-sky-700'>Accomodation for :</p><p> {room.accomodationFor} </p></div>
                <div className='p-2 flex border-b'><p className='w-1/2 font-semibold text-md px-4 text-sky-700'>Suitable for :</p><p> {room.suitableFor} </p></div>
                <div className='p-2 flex '><p className='w-1/2 font-semibold text-md px-4 text-sky-700'>Location :</p><p> {room.location} </p></div>
              </div>
            </div>
            <div>
              <p className="text-white my-4 bg-[#065c77] text-md font-medium px-4 py-1.5 rounded">Description</p>
              <p className='font-semibold text-sm px-4'>{room.description}</p>
            </div>
          </div>
          <div className='flex-1 py-5 bg-white mx-5'>
            <form className='shadow-lg p-5 rounded' onSubmit={roomDetailsForm.handleSubmit}>
              <p className='font-bold text-xl text-[#065c77] my-2'>{room.ownerName}</p>
              <input type="text" className='w-full p-2 border border-gray-300 rounded-lg outline-none' placeholder='Your Name' id='name' onChange={roomDetailsForm.handleChange} value={currentUser?currentUser.name:roomDetailsForm.values.name} />
              <span className='text-sm text-red-600'>{roomDetailsForm.touched.name && roomDetailsForm.errors.name}</span>
              <input type='number' placeholder="Enter Your Number" className='w-full p-2 border border-gray-300 rounded-lg mt-4 outline-none' id='number' onChange={roomDetailsForm.handleChange} value={roomDetailsForm.values.number} />
              <span className='text-sm text-red-600'>{roomDetailsForm.touched.number && roomDetailsForm.errors.number}</span>
              <div className='text-sm font-semibold'>Note: Phone Number must be active.</div>
              {/* <div className='my-4'>
                <p className='text-semibold text-lg mb-2'>How soon do you plan to move?</p>
                <div class="flex items-center mb-1">
                  <input id="duration" type="radio" name="default-radio" className="outline-none w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" value='within 7 days' onChange={roomDetailsForm.handleChange} />
                  <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900">Within 7 days</label>
                </div>
                <div class="flex items-center mb-1">
                  <input id="duration" type="radio" name="default-radio" className="outline-none w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" value='7 days - 14 days'  onChange={roomDetailsForm.handleChange} />
                  <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 ">7 days - 14 days</label>
                </div>
                <div class="flex items-center mb-2">
                  <input id="duration" type="radio" name="default-radio" className="outline-none w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" value='more than 14 days' onChange={roomDetailsForm.handleChange} />
                  <label htmlFor="default-radio-3" className="ms-2 text-sm font-medium text-gray-900 ">More than 14 days</label>
                </div>
                <span className='text-sm text-red-600'>{roomDetailsForm.touched.duration && roomDetailsForm.errors.duration}</span>
              </div> */}
              <button type='submit' className='mt-4 w-full text-white bg-[#065c77] rounded py-2'>Request a Callback</button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default RoomDetails