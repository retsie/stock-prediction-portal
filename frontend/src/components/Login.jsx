import React from 'react'
import Button from './Button'

const Login = () => {
  return (
    <>
    <div className="container">
        <div className="card mt-5 ">
            <div className="card-header">
                Register
            </div>
            <div className="card-body">
                <h5 className="card-title">Login</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <Button text="Login" class="btn-outline-info" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Login