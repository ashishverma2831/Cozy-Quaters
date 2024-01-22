import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {useFormik} from 'formik'
import * as Yup from 'yup';

const registerSchema = Yup.object().shape({
  name: Yup.string().required('Name is required').min(4,'Name is too short'),
  email: Yup.string().email('Invalid email').required('Required'),
  password:Yup.string().required('Password is required').min(8,'Password is too short'),
  // .matches(/[a-zA-Z]\d/, 'password must include uppercase and lowercase letter'),
  confirm:Yup.string().oneOf([Yup.ref('password'),null], 'Password must match').required('confirm password is required')
})

const Register = () => {

  const registerForm = useFormik({
    initialValues:{
      name: '',
      email: '',
      password: '',
      confirm: '',
    },
    onSubmit:(values)=>{
      console.log(values);
    },
    validationSchema:registerSchema
  })

  return (
    <>
      <Navbar />
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Register here
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={registerForm.handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Enter your name"
                    required="true"
                    onChange={registerForm.handleChange}
                    value={registerForm.values.name}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 block w-full p-2.5"
                    placeholder="name@company.com"
                    required="true"
                    onChange={registerForm.handleChange}
                    value={registerForm.values.email}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 block w-full p-2.5 "
                    required="true"
                    onChange={registerForm.handleChange}
                    value={registerForm.values.password}
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirm"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="confirm"
                    id="confirm"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 block w-full p-2.5 "
                    required="true"
                    onChange={registerForm.handleChange}
                    value={registerForm.values.confirm}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white text-lg bg-gray-600 hover:bg-gray-700 focus:outline-none font-normal rounded-lg px-5 py-2.5 text-center "
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
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

export default Register