import {useContext} from 'react'
import { AutContext } from '../AutProvider'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {isLoggedIn } = useContext(AutContext)
  return isLoggedIn ? (
    children
  ) : (
    <Navigate to='/login'  />
  )
}

export default PrivateRoute