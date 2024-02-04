import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useFormik } from 'formik'
import { enqueueSnackbar } from 'notistack';
import useAppContext from '../AppContext'

const Login = () => {

  const [loginPassword, setLoginPassword] = useState(true)

  const {currentUser,setCurrentUser,loggedIn,setLoggedIn,logout} = useAppContext();
  const navigate = useNavigate();
  const loginForm = useFormik({
    initialValues:{
      email:'',
      password:''
    },
    onSubmit:async(values)=>{
      console.log(values)
      const res = await fetch('http://localhost:5000/user/authenticate',{
        method:"POST",
        body:JSON.stringify(values),
        headers:{
          'Content-Type':'application/json'
        }
      });

      if(res.status===200){
        enqueueSnackbar('Login in successfully',{ variant:'success'})

        //session storage
        const data = await res.json();
        // data including ids
        sessionStorage.setItem('user',JSON.stringify(data))
        setLoggedIn(true);
        navigate('/');
      }
      else if(res.status===401){
        enqueueSnackbar('Invalid Credentials',{ variant:'error'})
      }
      else{
        enqueueSnackbar("Error Occured! Try again later.",{variant:'error'});
      }
    }
  })

  return (
    <>
      <Navbar />
      <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <div className="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 ">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
          Login in to your account
        </h1>
        <form className="space-y-4 md:space-y-6" onSubmit={loginForm.handleSubmit}>
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
              onChange={loginForm.handleChange}
              value={loginForm.values.email}
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
              onChange={loginForm.handleChange}
              value={loginForm.values.password}
            />
            <button type='button' className='absolute end-2 bottom-2' onClick={()=>{setLoginPassword(!loginPassword)}}>{loginPassword?<i className="fa-solid fa-eye"></i>:<i className="fa-regular fa-eye"></i>}</button>
            </div>
          </div>
          <div className="flex items-center justify-end">
            {/* <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  required=""
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="remember"
                  className="text-gray-500 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
            </div> */}
            <Link
              to='/forget-password'
              className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full text-white text-lg bg-gray-600 hover:bg-gray-700 focus:outline-none font-normal rounded-lg px-5 py-2.5 text-center "
          >
            Sign in
          </button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Don’t have an account yet?{" "}
            <Link
              to='/register'
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  </div>
</section>
      <Footer />

    </>
  )
}

export default Login