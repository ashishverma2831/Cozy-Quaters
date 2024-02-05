import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Cities = () => {

  const cities = ['Agra','Ahmedabad','Bangalore','Bareilly',
  'Bhopal','Bhubaneshwar','Chandigarh','Chennai',
  'Coimbatore','Dehradun','Delhi','Faridabad',
  'Ghaziabad','Gurugram/Gurgaon','Hyderabad','Indore',
  'Jaipur','Kanpur','Kochi','Kolkata/Calcutta',
  'Kota','Lucknow','Madurai','Mohali',
  'Mumbai','Nagpur','Noida','Patna',
  'Pune','Ranchi','Surat','Trivandrum',
  'Visakhapatnam','Vijaywada'
]

  return (
    <>
      <Navbar />
      <section className=' my-10 p-5 max-w-screen-lg mx-auto'>
        <p className='text-3xl font-extrabold text-center mb-8'>City List</p>
        <div className='p-5'>
          <ul className='flex gap-y-2 flex-wrap'>
            {
              cities.map((city)=>{
                return (
                  <li className=' w-1/2 p-2 sm:w-1/3 lg:w-1/4 hover:translate-x-1  hover:duration-500 duration-500'><i className="fa-solid fa-arrow-right text-gray-700 mx-2 text-sm"></i><Link to={city.toLowerCase()} className='hover:underline hover:cursor-pointer '>{city}</Link></li> 
                );
              })
            }
          </ul>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Cities