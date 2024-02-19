import React, { useEffect,useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useNavigate, useParams } from 'react-router-dom'
import { enqueueSnackbar } from 'notistack'
import { Formik } from 'formik'
import useAppContext from '../AppContext'
import * as Yup from 'yup'


const registerSchema = Yup.object().shape({
  name: Yup.string().required('Name is required').min(4,'Name is too short'),
  email: Yup.string().email('Invalid email').required('Required'),
  password:Yup.string().required('Password is required').min(8,'Password is too short'),
  // .matches(/[a-zA-Z]\d/, 'password must include uppercase and lowercase letter'),
  confirm:Yup.string().oneOf([Yup.ref('password'),null], 'Password must match').required('confirm password is required')
})

const UpdateProfile = () => {

    const {id} = useParams();
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();
    // const {currentUser,setCurrentUser,loggedIn,setLoggedIn,logout} = useAppContext();
    const [passwordHidden, setPasswordHidden] = useState(true)
    const [confirmPasswordHidden, setConfirmPasswordHidden] = useState(true)

    console.log(id);
    const getUserData = async ()=>{
        const res = await fetch('http://localhost:5000/user/getbyid/'+id);
        console.log(res.status);

        const data = await res.json();
        console.log(data);
        setUserData(data);
    }

    useEffect(()=>{
        getUserData();
    },[])

    const submitForm = async (values)=>{
        console.log(values);
        const res = await fetch('http://localhost:5000/user/update/'+id,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(values)
        });
        console.log(res.status);
        if(res.status===200){
            enqueueSnackbar('Profile updated successfully',{variant:'success'});
            // navigate('/update-profile');
        }
    }
  return (
    <>
        <Navbar />
        {
            userData!==null?(
                <Formik initialValues={userData} onSubmit={submitForm}
                  validationSchema={registerSchema}
                >
                    {(registerForm)=>{
                        return (
                            <section className="bg-gray-50">
                                {/* <p className='text-center text-2xl font-extrabold'>Update Profile</p> */}
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Update Profile
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
                    name='name'
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Enter your name"
                    required={true}
                    onChange={registerForm.handleChange}
                    value={registerForm.values.name}
                  />
                  <span className='text-sm text-red-600'>{registerForm.touched.name && registerForm.errors.name}</span>
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
                    required={true}
                    onChange={registerForm.handleChange}
                    value={registerForm.values.email}
                  />
                  <span className='text-sm '>{registerForm.touched.email && registerForm.errors.email}</span>
                </div>
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
                    required={true}
                    onChange={registerForm.handleChange}
                    value={registerForm.values.password}
                  />
                  <button type='button' className='absolute end-2 bottom-2' onClick={()=>{setPasswordHidden(!passwordHidden)}}>{passwordHidden?<i className="fa-solid fa-eye"></i>:<i className="fa-regular fa-eye"></i>}</button>
                  </div>
                  <span className='text-sm text-red-600'>{registerForm.touched.password && registerForm.errors.password}</span>
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
                    onChange={registerForm.handleChange}
                    value={registerForm.values.confirm}
                  />
                  <button type='button' className='absolute end-2 bottom-2' onClick={()=>{setConfirmPasswordHidden(!confirmPasswordHidden)}}>{confirmPasswordHidden?<i className="fa-solid fa-eye"></i>:<i className="fa-regular fa-eye"></i>}</button>
                  </div>
                  <span className='text-sm text-red-600'>{registerForm.touched.confirm && registerForm.errors.confirm}</span>
                </div>
                <button
                  type="submit"
                  className="w-full text-white text-lg bg-gray-600 hover:bg-gray-700 focus:outline-none font-normal rounded-lg px-5 py-2.5 text-center "
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>)
                    }}
                    </Formik>
            ):(<p className='text-center'>Loading...</p>)
        }
        <Footer />
    </>
  )
}

export default UpdateProfile