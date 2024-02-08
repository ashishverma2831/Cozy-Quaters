import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import RoomDetails from '../components/RoomDetails';

const BrowseRoom = () => {

  fetch('http://localhost:5173/cities/data')
  .then(response => response.json())
  .then(data => {
    // Here, 'data' is the data fetched from the URL.
    // You can now use this data to populate your webpage.
    // For example, if you have a div with id 'content', you can do:
    document.getElementById('content').textContent = JSON.stringify(data);
  })
  .catch(error => console.error('Error:', error));

  return (
    <>
      <Navbar />
      {/* <p>hrloo</p>
      <p id='content'>cdsc</p> */}
      <RoomDetails />
      <Footer />
    </>
  )
}

export default BrowseRoom