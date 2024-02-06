import React, { useEffect, useState } from 'react'
import AdminNavbar from './AdminNavbar'
import Footer from '../components/Footer'

const ViewUsers = () => {

    const [userList, setUserList] = useState([]);
    const fetchUsers = async () => {
        try {
            const res = await fetch('http://localhost:5000/user/all');
            const data = await res.json();
            setUserList(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {  
        fetchUsers();
    }, []);

    const deleteUser = async (id) => {
        try {
            const res = await fetch(`http://localhost:5000/user/delete/${id}`,{
                method:'DELETE'
            });
            console.log(res.status);
            if(res.status === 200){
              enqueueSnackbar('User Deleted Successfully', { variant: 'success' });
              fetchUsers();
            }
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <>
        <AdminNavbar />
            <p className="text-center font-extrabold text-3xl my-10">Users</p>
        <div className="max-w-screen-xl mx-auto my-10 relative overflow-x-auto shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          User Name
        </th>
        <th scope="col" className="px-6 py-3">
          Email
        </th>
        <th scope="col" className="px-6 py-3">
          <span className="sr-only">Edit</span>
        </th>
      </tr>
    </thead>
    <tbody>
      {
        userList.map((user)=>{
            return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {user.name}
        </th>
        <td className="px-6 py-4">{user.email}</td>
        <td className="px-6 py-4 text-right">
          <a
            href="#"
            className="mx-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Edit
          </a>
          <button className='mx-2' onClick={()=>{deleteUser(user._id)}}><i className="fa-solid fa-trash text-red-700"></i></button>
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

export default ViewUsers