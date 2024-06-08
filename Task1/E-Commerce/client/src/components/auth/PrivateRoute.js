import React from 'react'
import { Route,Navigate } from 'react-router-dom'

const PrivateRoute = ({element,...props}) => {
     
  return (
    //  isLoggedIn?
     element
    //  :<Navigate to="/login" replace></Navigate>

  )
}

export default PrivateRoute;