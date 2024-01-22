import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useFormik } from 'formik'
import * as Yup from 'yup';

const feedbackSchema = Yup.object().shape({
    name: Yup.string().required('Name is required').min(4,'Name is too short'),
    email: Yup.string().email('Invalid email').required('Required'),
    rating: Yup.string().required('Ratings is required'),
    message:Yup.string().required('Message is required')
})

const Feedback = () => {

  const feedbackForm = useFormik({
    initialValues:{
      name: '',
      email:'',
      rating:'',
      message:''
    },
    onSubmit:(values)=>{
      console.log(values);
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
          <option value="5">5 stars</option>
          <option value="4">4 stars</option>
          <option value="3">3 stars</option>
          <option value="2">2 stars</option>
          <option value="1">1 stars</option>
        </select>
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
      </div>
      <button
        type="submit"
        className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gray-700 sm:w-fit hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
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