import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
import Home from './pages/Home'
import About from './pages/About'
import Cities from './pages/Cities'
import Register from './pages/Register'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Feedback from './pages/Feedback'
import ErrorPage from './pages/ErrorPage'
import ForgetPassword from './pages/ForgetPassword'
import { AppProvider } from './AppContext'
import AddRoom from './components/AddRoom'
import BrowseRoom from './pages/BrowseRoom'
import AdminLogin from './admin/AdminLogin'
import AdminHome from './admin/AdminHome'
import ViewContacts from './admin/ViewContacts'
import ViewFeedbacks from './admin/ViewFeedbacks'
import ViewRooms from './admin/ViewRooms'
import ViewUsers from './admin/ViewUsers'
import UpdateProfile from './pages/UpdateProfile'
import RoomDetails from './pages/RoomDetails'


const App = () => {
  return (
    <>
      <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical:'top', horizontal:'right' }}>
        <BrowserRouter>
          <AppProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cities" element={<Cities />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/add-room" element={<AddRoom />} />
            <Route path="/cities/:city" element={<BrowseRoom />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin-home" element={<AdminHome />} />
            <Route path="/view-contacts" element={<ViewContacts />} />
            <Route path="/view-feedbacks" element={<ViewFeedbacks />} />
            <Route path="/view-rooms" element={<ViewRooms />} />
            <Route path="/view-users" element={<ViewUsers />} />
            <Route path="/update-profile/:id" element={<UpdateProfile />} />
            <Route path="/cities/:city/:id" element={<RoomDetails />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          </AppProvider>
        </BrowserRouter>
      </SnackbarProvider>
    </>
  )
}

export default App