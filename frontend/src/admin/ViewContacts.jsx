import React, { useEffect, useState } from 'react'
import AdminNavbar from './AdminNavbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';

const ViewContacts = () => {

    const [contactList, setContactList] = useState([]);
    const fetchContacts = async ()=>{
        try {
            const res = await fetch('http://localhost:5000/contact/all');
            const data = await res.json();
            setContactList(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchContacts();
    },[])

    const deleteContact = async (id)=>{
      try {
        const res = await fetch('http://localhost:5000/contact/delete/'+id,{
          method:'DELETE'
        });
        if(res.status === 200){
          fetchContacts();
        }
      } catch (error) {
        console.log(error);
      }
    }
  return (
    <>
        <AdminNavbar />
        <p className="text-center font-extrabold text-3xl my-10">Contacts</p>
        <div className="max-w-screen-xl mx-auto my-10 relative overflow-x-auto shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Email
        </th>
        <th scope="col" className="px-6 py-3">
          Subject
        </th>
        <th scope="col" className="px-6 py-3">
            Message
        </th>
        <th scope="col" className="px-6 py-3">
            Delete Contact
        </th>
      </tr>
    </thead>
    <tbody>
      {
        contactList.map((contact)=>{
            return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="px-6 py-4">{contact.email}</td>
        <td className="px-6 py-4">{contact.subject}</td>
        <td className="px-6 py-4">{contact.message}</td>
        <td className="px-6 py-4">
        <Link className='mx-2' onClick={()=>{deleteContact(contact._id)}}><i className="fa-solid fa-trash text-red-700"></i></Link>
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

export default ViewContacts