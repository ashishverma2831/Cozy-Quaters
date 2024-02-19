import React, { useState,useEffect } from 'react'

const FeedbackSlider = () => {

    const [feedbackList, setFeedbackList] = useState([]);
    const fetchFeedbacks = async ()=>{
        try {
            const res = await fetch('http://localhost:5000/feedback/limited');
            const data = await res.json();
            setFeedbackList(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchFeedbacks();
    },[])

    return (

        <>
            <section className='py-5 mb-5 mx-5'>
                <p className="text-center font-bold text-4xl my-10">Reviews</p>
                <div className="max-w-screen-lg mx-auto my-10 relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3  text-center">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3  text-center">
                                    Rating
                                </th>
                                <th scope="col" className="px-6 py-3  text-center">
                                    Message
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                feedbackList.map((feedback) => {
                                    return (
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 hover:scale-y-105 overflow-hidden hover:shadow-lg ">
                                            <td className="px-6 py-4 text-center capitalize">{feedback.name}</td>
                                            <td className="px-6 py-4 text-center">{feedback.rating}</td>
                                            <td className="px-6 py-4 text-center capitalize">{feedback.message}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default FeedbackSlider