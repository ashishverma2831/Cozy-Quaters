import React, { useState } from 'react'
import AdminNavbar from './AdminNavbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';

const ViewRooms = () => {

    const [roomList, setRoomList] = useState([]);
    const fetchRooms = async ()=>{
        try {
            const res = await fetch('http://localhost:5000/add-room/all');
            const data = await res.json();
            setRoomList(data);
        } catch (error) {
            console.log(error);
        }
    }
    useState(()=>{
        fetchRooms();
    },[])

    const deleteRoom = async (id)=>{
      try {
        const res = await fetch('http://localhost:5000/add-room/delete/'+id,{
          method:'DELETE'
        });
        if(res.status === 200){
          fetchRooms();
        }
      } catch (error) {
        console.log(error);
      }
    }
  return (
    <>
        <AdminNavbar />
        <p className="text-center font-extrabold text-3xl my-10">Rooms</p>
        <div className="max-w-screen-xl mx-auto my-10 relative overflow-x-auto shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">Owner Name</th>
        <th scope="col" className="px-6 py-3">Email</th>
        <th scope="col" className="px-6 py-3">Phone Number</th>
        <th scope="col" className="px-6 py-3">Accomodation For</th>
        <th scope="col" className="px-6 py-3">Suitable For</th>
        <th scope="col" className="px-6 py-3">Amount</th>
        <th scope="col" className="px-6 py-3">Room Name</th>
        <th scope="col" className="px-6 py-3">Description</th>
        <th scope="col" className="px-6 py-3">Address</th>
        <th scope="col" className="px-6 py-3">Delete Rooms</th>
      </tr>
    </thead>
    <tbody>
      {
        roomList.map((room)=>{
            return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="px-6 py-4">{room.name}</td>
        <td className="px-6 py-4">{room.email}</td>
        <td className="px-6 py-4">{room.number}</td>
        <td className="px-6 py-4">{room.accomodation}</td>
        <td className="px-6 py-4">{room.suitable}</td>
        <td className="px-6 py-4">{room.amount}</td>
        <td className="px-6 py-4">{room.roomname}</td>
        <td className="px-6 py-4">{room.description}</td>
        <td className="px-6 py-4">{room.address}</td>
        <td className="px-6 py-4">
        <Link className='mx-2' onClick={()=>{deleteRoom(room._id)}}><i className="fa-solid fa-trash text-red-700"></i></Link>
        </td>
      </tr>
            )
        })
      }
    </tbody>
  </table>
</div>
        <Footer />
    </>
  )
}

export default ViewRooms