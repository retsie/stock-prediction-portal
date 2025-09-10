import { useState, useContext, createContext} from 'react'

const AutContext = createContext()

const AutProvider = ({children}) => {

    const [isLoggedIn, setIsLoggedIn] = useState(
        !!localStorage.getItem('accessToken')
    )
  return (
    <AutContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
        {children}
    </AutContext.Provider>
  )
}

export default AutProvider
export {AutContext}