import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

const SubmitRoomSchema = Yup.object().shape({
    name: Yup.string().required('Name is required').min(3, 'Name is too short'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    number: Yup.string().required('Number is required').min(10, 'Invalid number').max(10, 'Invalid number'),
    accomodation: Yup.string().required('Accomodation is required'),
    suitable: Yup.string().required('Suitable is required'),
    amount: Yup.string().required('Amount is required'),
    roomname: Yup.string().required('Room name is required'),
    // image: Yup.string().required('Image is required'),
    description: Yup.string().required('Description is required'),
    address: Yup.string().required('Address is required')
})

const AddRoom = () => {

    const [selFile, setSelFile] = useState('');

    const submitRoom = useFormik({
        initialValues: {
            name: '',
            email: '',
            number: '',
            accomodation: '',
            suitable: '',
            amount: '',
            roomname: '',
            image: '',
            description: '',
            address: ''
        },
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            values.image = selFile; 
            console.log(values)
            setSubmitting(true);
            const response = await fetch('http://localhost:5000/add-room/add', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.status);
            setSubmitting(false);

            if (response.status === 200) {
                enqueueSnackbar('Room added successfully', { variant: 'success' });
                resetForm();
            }
            else {
                enqueueSnackbar('Room not added', { variant: 'error' });
            }
        },
        validationSchema: SubmitRoomSchema
    });

    const uploadFile = (e) => {
        const file = e.target.files[0];
        setSelFile(file.name);
        const fd = new FormData();
        fd.append("myfile", file);
        fetch("http://localhost:5000/util/uploadfile", {
          method: "POST",
          body: fd,
        }).then((res) => {
          if (res.status === 200) {
            console.log("file uploaded");
          }
        });
      };

    return (
        <>
            <Navbar />
            <section className='max-w-screen-lg flex flex-col gap-4 mx-auto p-5 my-10'>
                <p className='text-3xl font-extrabold text-center my-4'>Submit Room</p>
                <form onSubmit={submitRoom.handleSubmit}>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full py-2'>
                        <div className='w-full'>
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                            >
                                Owner Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Enter your name..."
                                required="true"
                                onChange={submitRoom.handleChange}
                                value={submitRoom.values.name}
                            />
                            <span className='text-sm text-red-600'>{submitRoom.touched.name && submitRoom.errors.name}</span>
                        </div>
                        <div className='w-full'>
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
                                onChange={submitRoom.handleChange}
                                value={submitRoom.values.email}
                            />
                            <span className='text-sm text-red-600'>{submitRoom.touched.email && submitRoom.errors.email}</span>
                        </div>
                        <div className='w-full'>
                            <label
                                htmlFor="number"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                            >
                                Your Phone Number
                            </label>
                            <input
                                type="number"
                                name="number"
                                id="number"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Enter your phone number..."
                                required="true"
                                onChange={submitRoom.handleChange}
                                value={submitRoom.values.number}
                            />
                            <span className='text-sm text-red-600'>{submitRoom.touched.number && submitRoom.errors.number}</span>
                        </div>
                    </div>
                    <div className='flex gap-4 md:gap-6 w-full py-2'>
                        <div className='w-full'>
                            <label
                                htmlFor="accomodation"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Accomodation For
                            </label>
                            <select
                                id="accomodation"
                                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                required="true"
                                onChange={submitRoom.handleChange}
                                value={submitRoom.values.accomodation}
                            >
                                <option value="">Select an Option</option>
                                <option value="working professional">Working Professionals</option>
                                <option value="students">Students</option>
                                <option value="both working professional and students">Both Working Professional and Students</option>
                            </select>
                            <span className='text-sm text-red-600'>{submitRoom.touched.accomodation && submitRoom.errors.accomodation}</span>
                        </div>
                        <div className='w-full'>
                            <label
                                htmlFor="suitable"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Suitable For
                            </label>
                            <select
                                id="suitable"
                                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                required="true"
                                onChange={submitRoom.handleChange}
                                value={submitRoom.values.suitable}
                            >
                                <option value="">Select an Option</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="both">Both Male and Female</option>
                            </select>
                            <span className='text-sm text-red-600'>{submitRoom.touched.suitable && submitRoom.errors.suitable}</span>
                        </div>
                        <div className='w-full'>
                            <label
                                htmlFor="amount"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                            >
                                Amount in Rupees
                            </label>
                            <input
                                type="number"
                                name="amount"
                                id="amount"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Enter your phone number..."
                                required="true"
                                onChange={submitRoom.handleChange}
                                value={submitRoom.values.amount}
                            />
                            <span className='text-sm text-red-600'>{submitRoom.touched.amount && submitRoom.errors.amount}</span>
                        </div>
                    </div>
                    <div className='flex gap-4 md:gap-6 w-full py-2'>
                        <div className='w-full'>
                            <label
                                htmlFor="roomname"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                            >
                                Room Name/Title
                            </label>
                            <input
                                type="text"
                                name="roomname"
                                id="roomname"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Enter your room name..."
                                required="true"
                                onChange={submitRoom.handleChange}
                                value={submitRoom.values.roomname}
                            />
                            <span className='text-sm text-red-600'>{submitRoom.touched.roomname && submitRoom.errors.roomname}</span>
                        </div>
                    </div>
                    <div className='flex gap-4 md:gap-6 w-full py-2'>
                        <div className='w-full'>
                            <label
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                htmlFor="image"
                            >
                                Default size
                            </label>
                            <input
                                className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                id="image"
                                type="file"
                                onChange={uploadFile}
                            />
                            <span className='text-sm text-red-600'>{submitRoom.touched.image && submitRoom.errors.image}</span>
                        </div>
                    </div>
                    <div className='flex gap-4 md:gap-6 w-full py-2 '>
                        <div className='w-full'>
                            <label
                                htmlFor="description"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                            >
                                Room description
                            </label>
                            <textarea
                                id="description"
                                rows={4}
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Enter description..."
                                required="true"
                                onChange={submitRoom.handleChange}
                                value={submitRoom.values.description}
                            />
                            <span className='text-sm text-red-600'>{submitRoom.touched.description && submitRoom.errors.description}</span>
                        </div>
                    </div>
                    <div className='flex gap-4 md:gap-6 w-full py-2 '>
                        <div className='w-full'>
                            <label
                                htmlFor="address"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                            >
                                Your Address
                            </label>
                            <input
                                type="text"
                                name="address"
                                id="address"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Enter your address..."
                                required="true"
                                onChange={submitRoom.handleChange}
                                value={submitRoom.values.address}
                            />
                            <span className='text-sm text-red-600'>{submitRoom.touched.address && submitRoom.errors.address}</span>
                        </div>
                    </div>
                    <div className='flex justify-between gap-12 my-4'>
                        <button
                            type='reset'
                            onClick={() => submitRoom.resetForm()}
                            className=" w-auto text-white text-lg bg-gray-600 hover:bg-gray-700 focus:outline-none font-normal rounded px-10 py-2.5 text-center "
                        >Reset</button>
                        <button
                            type='submit'
                            className="w-auto text-white text-lg bg-gray-600 hover:bg-gray-700 focus:outline-none font-normal rounded px-10 py-2.5 text-center "
                        >Submit</button>
                    </div>
                </form>
            </section>
            <Footer />
        </>
    )
}

export default AddRoom