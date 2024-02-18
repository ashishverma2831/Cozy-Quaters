import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

const feedbackSchema = Yup.object().shape({
    name: Yup.string().required('Name is required').min(4,'Name is too short'),
    email: Yup.string().email('Invalid email').required('Required'),
    rating: Yup.string().required('Ratings is required'),
    message:Yup.string().required('Message is required')
})

const Feedback = () => {

  const navigate = useNavigate();
  const feedbackForm = useFormik({
    initialValues:{
      name: '',
      email:'',
      rating:'',
      message:''
    },
    onSubmit:async (values,{setSubmitting,resetForm})=>{
      console.log(values);
      setSubmitting(true);
      const res = await fetch('http://localhost:5000/feedback/add',{
        method:'POST',
        body:JSON.stringify(values),
        headers:{
          'Content-Type':'application/json'
        }
      });
      console.log(res.status);
      setSubmitting(false);

      if(res.status===200){
        enqueueSnackbar('User Feedback Submitted Successfully', {variant:'success'})
        resetForm();
        navigate('/feedback');
      }
      else{
        enqueueSnackbar('Something went Wrong', {variant:'error'})
      }
    },
    validationSchema:feedbackSchema
  })

  return (
    <>
      <Navbar />
      <section className="bg-white dark:bg-gray-900">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
    <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
      Feedback
    </h2>
    <form onSubmit={feedbackForm.handleSubmit} className="space-y-8">
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
          placeholder="your name"
          required="true"
          onChange={feedbackForm.handleChange}
          value={feedbackForm.values.name}
        />
        <span className='text-sm text-red-600'>{feedbackForm.touched.name && feedbackForm.errors.name}</span>
      </div>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="name@flowbite.com"
          required="true"
          onChange={feedbackForm.handleChange}
          value={feedbackForm.values.email}
        />
        <span className='text-sm text-red-600'>{feedbackForm.touched.email && feedbackForm.errors.email}</span>
      </div>
      <div>
        <label
          htmlFor="rating"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Ratings
        </label>
        <select
          id="rating"
          className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="Let us know how we can help you"
          required="true"
          onChange={feedbackForm.handleChange}
          value={feedbackForm.values.rating}
        >
          <option value="">Give Ratings</option>
          <option value="5">5 stars</option>
          <option value="4">4 stars</option>
          <option value="3">3 stars</option>
          <option value="2">2 stars</option>
          <option value="1">1 stars</option>
        </select>
        <span className='text-sm text-red-600'>{feedbackForm.touched.rating && feedbackForm.errors.rating}</span>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Your message
        </label>
        <textarea
          id="message"
          rows={6}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Leave a comment..."
          required="true"
          onChange={feedbackForm.handleChange}
          value={feedbackForm.values.message}
        />
        <span className='text-sm text-red-600'>{feedbackForm.touched.message && feedbackForm.errors.message}</span>
      </div>
      <button
        type="submit"
        className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gray-700 sm:w-fit hover:bg-gray-800 focus:outline-none "
      >
        Send message
      </button>
    </form>
  </div>
</section>

      <Footer />
    </>
  )
}

export default Feedback