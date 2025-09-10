import {useContext} from 'react'
import { AutContext } from '../AutProvider'
import { Navigate } from 'react-router-dom'

const PublicRoute = ({children}) => {
    const {isLoggedIn } = useContext(AutContext)
  return !isLoggedIn ? (
    children
  ) : (
    <Navigate to='/dashboard'  />
  )
}

export default PublicRoute