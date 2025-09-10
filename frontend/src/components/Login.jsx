import React, {useContext, useState} from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { AutContext } from '../AutProvider'

const Login = () => {

  // const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const {isLoggedIn, setIsLoggedIn} = useContext(AutContext)



  const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',

  })

  const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }  

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);


    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/token/', formData);
      localStorage.setItem('accessToken', response.data.access)
      localStorage.setItem('refreshToken', response.data.refresh)
      setIsLoggedIn(true);
      setError('');
      navigate('/dashboard')

    } catch(error) {
      console.error('Invalid Credential');
      setError('Invalid Credential');
    }finally{
      setLoading(false);
    }

  }

  return (
    <>
    <div className="container mb-5">
        <div className="row">
          <div className='col-md-6 mt-5 mx-auto p-2'>
            <div className="card text-bg-light mb-3" >
              <div className="card-header mb-3">Login to our Portal</div>
              <div className="card-body">
                <form onSubmit={handleLogin}>
                  
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder='Email' name='email'  onChange={handleChange} value={formData.email} required />
             
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder='Password' name='password'  onChange={handleChange} value={formData.password} required />
        
                  </div>
                  <div className='mb-3'>
                    {error && <div className='text-danger'>{error}</div>}
                  </div>

                 
                  { loading ? (
                      <button type='submit' className='btn btn-primary' disabled> <FontAwesomeIcon icon={faSpinner} spin /> Logging in...</button>
                    ) : (
                      <button type='submit' className='btn btn-primary'>Login</button>
                    )}
                  
              </form>

              </div>
              
            </div>
              
          </div>
        </div>
    </div>
    </>
  )
}

export default Login