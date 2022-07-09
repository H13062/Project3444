import React from 'react';
import './register.css';
import {images} from '../../constants';
import {Navbar} from "../../component"

const Register = () =>  {
    return(
        <>
            <div className="login-page">
                <Navbar />

                {/**Header */}
                <div className="login-header">
                    <h1>
                         LOGIN
                    </h1>
                    <p>
                        Log in to your account to make orders, get our restaurant updates, and more!
                    </p>
                </div>
                {/**End header */}

                <div className="login-registration">
                    {/* Left */}
                    <div class="split left">
                        <div class="centered">
                            <div className="form">
                                <div className="header">
                                    <h2>Login</h2>
                                </div>
                                <div className="form-body">
                                    <div className="username">
                                       
                                        <input className="form__input" type="text" id="username" placeholder="Username"/>
                                    </div>
                                        <div className="email">
                                            
                                            <input  type="email" id="email" className="form__input" placeholder="Email"/>
                                        </div>
                                    </div>

                                    <div class="footer">
                                        <button type="submit" class="btn">Login</button>
                                    </div>
                                </div> 
                            </div>
                    </div>
                    {/* End left */}
                    <div className='dash'></div>
                    {/* Right */}
                    <div class="split right">
                        <div class="centered">
                            <div className="form">
                                <div className="header">
                                    <h2>Register</h2>
                                </div>
                                <div className="form-body">
                                    <div className="username">
                                        
                                        <input className="form__input" type="text" id="username" placeholder="Username"/>
                                    </div>
                                    <div className="email">
                                        
                                        <input  type="email" id="email" className="form__input" placeholder="Email"/>
                                    </div>
                                    <div className="password">
                                        
                                        <input className="form__input" type="password"  id="password" placeholder="Password"/>
                                    </div>
                                    <div className="confirm-password">
                                       
                                        <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
                                    </div>
                                </div>
                                <div class="footer">
                                    <button type="submit" class="btn">Register</button>
                                </div>
                            </div>  
                        </div>
                    </div>
                    {/**End right */}
                </div>
            </div>
        </>
    )
}

export default Register;