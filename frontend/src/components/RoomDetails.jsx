import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useFormik } from 'formik'
import * as Yup from 'yup'


// const RequestFormSchema = Yup.object({
//     name: Yup.string().required('Name is required'),
//     number: Yup.number().required('Number is required').min(10, 'Number should be 10 digits').max(10, 'Number should be 10 digits'),
//     duration: Yup.string().required('Duration is required')
// })


const RoomDetails = () => {

    // const roomDetailsForm = useFormik({
    //     initialValues: {
    //         name: '',
    //         number: '',
    //         // duration: ''
    //     },
    //     onSubmit :(values) => {
    //         console.log(values)
    //     },
    //     validationSchema: RequestFormSchema
    // })

  return (
    <>
        {/* <Navbar /> */}
        <section className=' mx-auto max-w-screen-lg my-10'>
            <div className='flex p-2 justify-between items-center'>
                <div className='px-4'>
                    <p className='text-xl font-semibold'>Shri Balaji pg for boys in govindpuram,ghaziabad
                    <span className="mx-2 text-white bg-[#065c77] text-md font-medium px-4 py-1.5 rounded">boys</span>
                    </p>
                    <p className='text-lg font-normal'><i className="fa-solid fa-location-dot mr-1"></i> location hbhjvvk</p>
                </div>
                <div className='px-4'>
                    <p className='text-3xl font-semibold text-[#065c77]'>₹ 7800</p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row'>
                <div className='max-w-screen-sm p-5'>
                    <div id="default-carousel" className="relative w-full" data-carousel="slide">
  {/* Carousel wrapper */}
  <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
    {/* Item 1 */}
    <div className="hidden duration-700 ease-in-out" data-carousel-item="">
      <img
        src="https://images.unsplash.com/photo-1707187478206-f68e2b7f672f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        alt="..."
      />
    </div>
    {/* Item 2 */}
    <div className="hidden duration-700 ease-in-out" data-carousel-item="">
      <img
        src="https://images.unsplash.com/photo-1705657309655-c18966db966d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D"
        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        alt="..."
      />
    </div>
    {/* Item 3 */}
    <div className="hidden duration-700 ease-in-out" data-carousel-item="">
      <img
        src="https://images.unsplash.com/photo-1706610740392-65f9186d1305?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D"
        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        alt="..."
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
                            <div className='p-2 flex border-b'><p className='w-1/2 font-semibold text-md px-4 text-sky-700'>Accomodation for :</p><p>Boys and Girls</p></div>
                            <div className='p-2 flex border-b'><p className='w-1/2 font-semibold text-md px-4 text-sky-700'>Suitable for :</p><p>Students</p></div>
                            <div className='p-2 flex '><p className='w-1/2 font-semibold text-md px-4 text-sky-700'>Location :</p><p>asfnasfkasnfkanka</p></div>
                        </div>
                    </div>
                    <div>
                      <p className="text-white my-4 bg-[#065c77] text-md font-medium px-4 py-1.5 rounded">Description</p>
                      <p className='font-semibold text-sm px-4'>shri balaji pg available for boys in govindpuram ghaziabad. It'svery close to metro and othe market community.</p>
                    </div>
                </div>
                {/* <div className='flex-1 py-5 bg-white'>
                    <form className='shadow-lg p-5 rounded' onSubmit={roomDetailsForm.handleSubmit}>
                        <p className='font-bold text-xl text-[#065c77] my-2'>Owner name</p>
                        <input type="text" className='w-full p-2 border border-gray-300 rounded-lg outline-none' placeholder='Your Name' id='name' onChange={roomDetailsForm.handleChange} value={roomDetailsForm.values.name}/>
                        <input type='number' placeholder="Enter Your Number" className='w-full p-2 border border-gray-300 rounded-lg mt-4 outline-none' id='number' onChange={roomDetailsForm.handleChange} value={roomDetailsForm.values.number}/>
                        <div className='my-4'>
                            <p className='text-semibold text-lg mb-2'>How soon do you plan to move?</p>
                            
<div class="flex items-center mb-1">
    <input id="default-radio-1" type="radio" value="within 7 days" name="default-radio" className="outline-none w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" onChange={roomDetails.handleChange} />
    <label htmlFor="default-radio-1" class="ms-2 text-sm font-medium text-gray-900">Within 7 days</label>
</div>
<div class="flex items-center mb-1">
    <input checked id="default-radio-2" type="radio" value="7-14 days" name="default-radio" className="outline-none w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" onChange={roomDetails.handleChange} />
    <label htmlFor="default-radio-2" class="ms-2 text-sm font-medium text-gray-900 ">7 days - 14 days</label>
</div>
<div class="flex items-center mb-2">
    <input checked id="default-radio-3" type="radio" value="more than 14 days" name="default-radio" className="outline-none w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" onChange={roomDetails.handleChange} />
    <label htmlFor="default-radio-3" class="ms-2 text-sm font-medium text-gray-900 ">More than 14 days</label>
</div>
                        </div>
                        <button type='submit' className='mt-4 w-full text-white bg-[#065c77] rounded py-2'>Request a Callback</button>
                    </form>
                </div> */}
            </div>
        </section>
        {/* <Footer /> */}
    </>
  )
}

export default RoomDetails