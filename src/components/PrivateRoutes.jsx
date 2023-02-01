import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAuthStatus from './hooks/useAuthStatus'

export default function PrivateRoutes() {
  const{loggedIn,loading}=useAuthStatus()
  if(loading){
    return <h1>Loading....</h1>
  }
  return loggedIn?<Outlet />:<Navigate to="/Signin" />
}
