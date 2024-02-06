import React from 'react'

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
      <p>hrloo</p>
      <p id='content'>cdsc</p>
    </>
  )
}

export default BrowseRoom