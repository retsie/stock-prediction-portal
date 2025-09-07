import React, {useState} from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Register = () => {

  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

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

  const handleRegistration = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/register/', formData);
      console.log('response:', response.data);
      console.log('Registration Successful');
      setErrors({});
      setSuccess(true);
    } catch(error) {
      setErrors(error.response.data);
      console.error('Registration Error:', error.response.data);
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
              <div className="card-header mb-3">Register</div>
              <div className="card-body">
                <form onSubmit={handleRegistration}>
                  <div className="mb-3">
                    <label htmlFor="firstname" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="firstname" placeholder='First Name' name='first_name'  onChange={handleChange} value={formData.first_name} required />
                    <small>{errors.first_name && <div className='text-danger'>{errors.first_name}</div>}</small>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="lastname" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lastname" placeholder='Last Name'name='last_name'  onChange={handleChange} value={formData.last_name} required />
                    <small>{errors.last_name && <div className='text-danger'>{errors.last_name}</div>}</small>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" placeholder='Username' name='username'  onChange={handleChange} value={formData.username} required />
                    <small>{errors.username && <div className='text-danger'>{errors.username}</div>}</small>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder='Email' name='email'  onChange={handleChange} value={formData.email} required />
                    <small>{errors.email && <div className='text-danger'>{errors.email}</div>}</small>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder='Password' name='password'  onChange={handleChange} value={formData.password} required />
                    <small>{errors.password && <div className='text-danger'>{errors.password}</div>}</small>
                  </div>
                  {success && <div className='alert alert-success'>Registration Successful</div>}
                  { loading ? (
                    <button type='submit' className='btn btn-primary' disabled> <FontAwesomeIcon icon={faSpinner} spin /> Please wait...</button>
                  ) : (
                    <button type='submit' className='btn btn-primary'>Register</button>
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

export default Register