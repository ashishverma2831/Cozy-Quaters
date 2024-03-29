import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';
import * as Yup from 'yup';

const resetSchema = Yup.object().shape({
    password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
    confirm: Yup.string().required('Confirm password is required').oneOf([Yup.ref('password'), null], 'Passwords must match')
})

const ResetPassword = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const [passwordHidden, setPasswordHidden] = useState(true);
    const [confirmPasswordHidden, setConfirmPasswordHidden] = useState(true);
    const resetForm = useFormik({
        initialValues: {
            password: '',
            confirm: '',
        },
        onSubmit: async (values) => {
            console.log(values);
            const res = await fetch('https://cozy-quaters.onrender.com/user/reset-password/'+id, {
                method: 'PUT',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await res.json();
            setUserData(data);
            console.log(res.status);
            if (res.status === 200) {
                enqueueSnackbar('Password reset successfully!', {
                    variant: 'success',
                })
                navigate('/login');
            }
            else {
                enqueueSnackbar('Password reset failed!', {
                    variant: 'error',
                })
            }
        },
        validationSchema: resetSchema
    })
  return (
    <>
        <Navbar />
        <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full p-6 bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
            <h1 className="text-center mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Reset Password
            </h1>
            <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" onSubmit={resetForm.handleSubmit}>
            <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <div className='relative'>
                  <input
                    type={passwordHidden?'password':'text'}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 block w-full p-2.5 "
                    required="true"
                    onChange={resetForm.handleChange}
                    value={resetForm.values.password}
                  />
                  <button type='button' className='absolute end-2 bottom-2' onClick={()=>{setPasswordHidden(!passwordHidden)}}>{passwordHidden?<i className="fa-solid fa-eye"></i>:<i className="fa-regular fa-eye"></i>}</button>
                  </div>
                  <span className='text-sm text-red-600'>{resetForm.touched.password && resetForm.errors.password}</span>
                </div>
                <div>
                  <label
                    htmlFor="confirm"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Confirm password
                  </label>
                  <div className='relative'>
                  <input
                    type={confirmPasswordHidden?'password':'text'}
                    name="confirm"
                    id="confirm"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 block w-full p-2.5 "
                    required="true"
                    onChange={resetForm.handleChange}
                    value={resetForm.values.confirm}
                  />
                  <button type='button' className='absolute end-2 bottom-2' onClick={()=>{setConfirmPasswordHidden(!confirmPasswordHidden)}}>{confirmPasswordHidden?<i className="fa-solid fa-eye"></i>:<i className="fa-regular fa-eye"></i>}</button>
                  </div>
                  <span className='text-sm text-red-600'>{resetForm.touched.confirm && resetForm.errors.confirm}</span>
                </div>
              <button
                type="submit"
                className="w-full text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Reset password
              </button>
            </form>
          </div>
        </div>
      </section>
        <Footer />
    </>
  )
}

export default ResetPassword