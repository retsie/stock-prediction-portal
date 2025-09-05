import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <>
      <nav className="navbar bg-primary border-bottom border-body navbar-expand-lg" data-bs-theme="dark">
        <div className="container">
            <a className="navbar-brand" href="#">Prediction Portal</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {/* <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">dgfdfd</a>
                    </li> */}
                </ul>
                <span className="navbar-text">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <Button text='Login' class="btn-primary" />
                        </li>
                        <li className="nav-item">
                            <Button text='Register' class="btn-primary"/>
                        </li>
                    </ul>
                </span>
            </div>
        </div>
        </nav>
    </>
  )
}

export default Header