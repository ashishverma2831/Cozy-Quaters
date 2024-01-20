import React from 'react'

const FeatureCard = () => {
  return (
    <>
        <div className='flex flex-col gap-3 w-[250px] shadow-lg rounded-lg py-5 px-4'>
            <div className='bg-blue-600 shadow rounded-full my-2 h-28 mx-auto w-28 flex justify-center items-center'>
                <i className="fa-solid fa-calendar-days text-5xl hover:scale-150 duration-500 hover:duration-500"></i>
            </div>
            <h3 className='text-center font-semibold text-xl'>Feature Title</h3>
            <p className='text-center font-normal text-md text-gray-700'>Search 1000+ PG Accommodation here without any brokerage or commission charge</p>
        </div>
    </>
  )
}

export default FeatureCard