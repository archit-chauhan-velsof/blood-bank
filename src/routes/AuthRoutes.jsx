import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from '../pages/login/Index'
import Register from '../pages/register/Index'

const AuthRoutes = ({setToken}) => {
  return (
    <Routes>
        <Route path='/' element={<Login setToken={setToken}/>}/>
        <Route path='signup' element={<Register/>}/>
    </Routes>
  )
}

export default AuthRoutes