import React from 'react'
import './contact.css'
import { BsTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp, IoTimeSharp } from 'react-icons/io5';
import {BsInstagram, BsTwitter, BsFacebook} from 'react-icons/bs'; 
import {Navbar} from "../../component"

const contact = () => {
    return (
        <div className='app__contact'>
            <Navbar />
            <div className='app__contact-header'>
                <h1>Contact Us</h1>
                <p>Get in touch with us if you have any question</p>
            </div>
            <div className='app__contact-content'>
                <div className='app__contact-content_work'>
                    <div className='app__contact-content_phonemail'>
                        <div className='app__contact-content_phone'>
                            <div className='phone'>
                                <BsTelephoneFill style={{fontSize: '20px'}}/>
                                <h2>Phone Number</h2>
                            </div>
                            <p>+1 (123)-456-7890</p>
                        </div>
                        <div className='app__contact-content_mail'>
                            <div className='mail'>
                                <IoMdMail style={{fontSize: '25px'}}/>
                                <h2>Email Address</h2>
                            </div>
                            <p>example@email.com</p>
                        </div>
                    </div>
                    <div className='dash'/>
                    <div className='app__contact-content_location'>
                        <div className='location'>
                            <IoLocationSharp style={{fontSize: '25px'}}/>
                            <h2>Location</h2>
                        </div>
                        <div className='location-p'>
                            <p>123 Sample St, City1, State1, 00000</p><br></br>
                            <p>456 Example St, City2, State2, 99999</p>
                        </div>
                    </div>
                    <div className='dash'/>
                    <div className='app__contact-content_hour'>
                        <div className='hour'>
                            <IoTimeSharp style={{fontSize: '25px'}} />
                            <h2>Working Hour</h2>
                        </div>
                        <div className='hour-p'>
                        <p>Mon - Fri: 9am - 4pm</p><br></br>
                        <p>Sat - Sun: 10am - 2pm</p>
                        </div>
                    </div>
                </div>
                <div className='app__contact-content_icons'>
                    <div><BsInstagram /></div>
                    <div><BsTwitter /></div>
                    <div><BsFacebook /></div>
                </div>
            </div>
        </div>
    )
    }

export default contact;