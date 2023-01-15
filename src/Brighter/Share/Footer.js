import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

import './Footer.css'
const Footer = () => {
    return (
        <div>
            <div className="footer-area">
                <div className="container">
                    <div className="footer-border">
                        <div className="row">
                            <div className="footer-right">
                                <h1>ENVIRONMENTAL</h1>
                                <div className="footer-social">
                                    <Link><FaFacebookF></FaFacebookF></Link>
                                    <Link><FaLinkedinIn></FaLinkedinIn></Link>
                                    <Link><FaTwitter></FaTwitter></Link>
                                    <Link><FaInstagram></FaInstagram></Link>
                                </div>
                            </div>
                            <div className="footer-center">
                                
                                    <ul>
                                        <li><Link>Our Cause</Link></li>
                                        <li><Link>Contact Us</Link></li>
                                        <li><Link>Cause</Link></li>
                                        <li><Link>Our Benefactors</Link></li>
                                    </ul>
                               
                                <h3>Join our Cause, Become a Member</h3>
                                <div className="footer-email">
                                    <input type="email" placeholder='Enter your email address' />
                                    <button type='submit' className='submit-btu'>JOIN</button>
                                </div>
                            </div>
                            
                            <div className="footer-left">
                                <div>

                                    
                                    <p>
                                    4517 Washington Ave. Manchester, Kentucky 39495
                                    </p>
                                    <p>(505) 555-0125, (406) 555-0120</p>
                                    <p>binhan628@gmail.com</p>
                                    <p>manhhachkt08@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copy-right-area">
                        <p>All rights reserved Elysian Multipurpose Theme</p>
                        <div className='copy-right'>
                            <Link>Terms & Conditions</Link>
                            <Link>Privacy & Cookies</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;