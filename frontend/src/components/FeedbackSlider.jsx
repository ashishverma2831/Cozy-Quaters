import React, { useState,useEffect } from 'react'

const FeedbackSlider = () => {

    const [feedbackList, setFeedbackList] = useState([]);
    const fetchFeedbacks = async ()=>{
        try {
            const res = await fetch('http://localhost:5000/feedback/all');
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
            <section className='py-5'>
                <p className="text-center font-extrabold text-3xl my-10">Feedbacks</p>
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
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <td className="px-6 py-4 text-center">{feedback.name}</td>
                                            <td className="px-6 py-4 text-center">{feedback.rating}</td>
                                            <td className="px-6 py-4 text-center">{feedback.message}</td>
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