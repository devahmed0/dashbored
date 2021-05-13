import React from 'react'
 import img1 from '../img/1.jpg'
const Header = () => {
 
    return (

        < >
            <header  >
                <div className="titel_header">
                    <h3>
                        <label htmlFor="nav_toggle">
                            <span className="fa fa-bars crouser"></span>
                        </label>
                    </h3>
                </div>

                <div className="user_wrapper">
                    <img src={img1} width="40px" height="40px" alt="user" />
                    <div>
                        <h4> ahmed hameed</h4> 
                   admin

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
