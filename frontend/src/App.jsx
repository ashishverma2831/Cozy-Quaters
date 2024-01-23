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


const App = () => {
  return (
    <>
      <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical:'top', horizontal:'right' }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cities" element={<Cities />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </>
  )
}

export default App