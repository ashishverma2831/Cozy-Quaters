import { useFormik } from 'formik'
import { enqueueSnackbar } from 'notistack';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AdminLogin = () => {
    const [loginPassword, setLoginPassword] = useState(true);
    const navigate = useNavigate();
    const adminLogin = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            console.log(values)
            const {email, password} = values;
            // console.log(email, password);
            if(email==='ashishverma2831@gmail.com' && password==='admin'){
                navigate('/admin-home');
                enqueueSnackbar('Admin Login in successfully', { variant: 'success' })
            }
            else{
                // alert('Invalid Credentials');
                enqueueSnackbar('Invalid Credentials', { variant: 'error' })
            }
        }
    })

  return (
    <>
        <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <div className="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 ">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
          Admin Login
        </h1>
        <form className="space-y-4 md:space-y-6" onSubmit={adminLogin.handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com"
              required="true"
              onChange={adminLogin.handleChange}
              value={adminLogin.values.email}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <div className='relative'>
            <input
              type={loginPassword?'password':'text'}
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required="true"
                onChange={adminLogin.handleChange}
                value={adminLogin.values.password}
            />
            <button type='button' className='absolute end-2 bottom-2' onClick={()=>{setLoginPassword(!loginPassword)}}>{loginPassword?<i className="fa-solid fa-eye"></i>:<i className="fa-regular fa-eye"></i>}</button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-white text-lg bg-gray-600 hover:bg-gray-700 focus:outline-none font-normal rounded-lg px-5 py-2.5 text-center "
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default AdminLogin