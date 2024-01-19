import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className='bg-red-500'>
        <div className='max-w-screen-xl bg-red-700 mx-auto'>
          <div className='bg-red-900 flex justify-around border-b'>
            <div className='p-2 '>
              <div id="drawer-navigation-label" className=" text-3xl font-bold italic">
                Cozy Quarters
              </div>
              <p className="text-sm">A project by the team at The University of Texas at
              Austin, in collaboration with UT Austin students and faculty.
              </p>
            </div>
            <div className='p-2 '>
                <p>Helpful Links</p>
            </div>
            <div className='p-2 '>
                <p className='text-lg font-normal py-5'>Contact Us</p>
                <p>Building No-258, Yadav Colony,<br />
                  Rajeev Gandhi Marg, Ballabgarh,<br />
                  Faridabad (Haryana) 121004</p>
                <p className='py-2'>E-mail: <a>ashishverma510207@gmail.com</a></p>
                <div>
                  <a className='text-3xl'><i class="fa-brands fa-facebook"></i></a>
                  <a><i class="fa-brands fa-youtube"></i></a>
                  <a><i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>
          </div>
          <div className='bg-blue-500 text-center py-2'>
            <p>© Cozy Quarters All Rights Reserved, 2024</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer