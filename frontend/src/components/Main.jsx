import React, {useEffect} from 'react'
import Button from './Button'
// import axiosInstance from './axiosinstance'

const Main = () => {

  return (
    <>
    
    <div className="container">
        <div className="card mt-5 ">
            <div className="card-header">
                Featured
            </div>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <Button text="Explore Now" class="btn-outline-info" url="/dashboard" />
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Main