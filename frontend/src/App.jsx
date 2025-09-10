// import { useState } from 'react'
import './assets/css/style.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import Register from './components/Register'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './components/Login'
import AutProvider from './AutProvider'
import Dashboard from './components/dashboard/Dashboard'
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'


function App() {


  return (
    <>
    <AutProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Main/>}  />
          <Route path='/Register' element={<PublicRoute><Register/></PublicRoute>}  />
          <Route path='/Login' element={<PublicRoute><Login/></PublicRoute>}  />
          <Route path='/Dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>}  />
        </Routes>
        <Footer/>
     </BrowserRouter>
    </AutProvider>
     
     
     

    </>
  )
}

export default App
