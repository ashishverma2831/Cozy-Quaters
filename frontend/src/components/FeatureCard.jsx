import React from 'react'

const FeatureCard = () => {

  const features = [
    {
      image:'Looking-icn.png',
      title:'No Brokerage',
      desc:'Search 1000+ PG Accommodation here without any brokerage or commission charge'
    },
    {
      image:'\Looking-icn1.png',
      title:'Affordable Rents',
      desc:'SSingle and Shared rooms at low security deposits, instant move-in with affordable rents.'
    },
    {
      image:'Looking-icn2.png',
      title:'PG Owner?',
      desc:'List your PG properties with us and Get lots of fresh leads'
    },
    {
      image:'Looking-icn3.png',
      title:'Cities in India',
      desc:'Newly Accommodation added in every hour to help PG finder right Accommodation.'
    }
]
  return (
    <>
        {
          features.map((feature)=>{
            return (
              <div className='flex flex-col gap-3 w-[250px] shadow-lg rounded-lg py-5 px-4 bg-white'>
            <div className='bg-[#065c77] shadow rounded-full my-2 h-28 mx-auto w-28 flex justify-center items-center'>
                <img src={feature.image} className="fa-solid fa-calendar-days w-12 hover:scale-150 duration-500 hover:duration-500" />
            </div>
            <h3 className='text-center font-semibold text-xl'>{feature.title}</h3>
            <p className='text-center font-normal text-md text-gray-700'>{feature.desc}</p>
            </div>
            );
          })
        }
        {/* <div className='flex flex-col gap-3 w-[250px] shadow-lg rounded-lg py-5 px-4'>
            <div className='bg-blue-600 shadow rounded-full my-2 h-28 mx-auto w-28 flex justify-center items-center'>
                <img src='' className="fa-solid fa-calendar-days text-5xl hover:scale-150 duration-500 hover:duration-500" />
            </div>
            <h3 className='text-center font-semibold text-xl'>Feature Title</h3>
            <p className='text-center font-normal text-md text-gray-700'>Search 1000+ PG Accommodation here without any brokerage or commission charge</p>
        </div> */}
    </>
  )
}

export default FeatureCard