import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { BsHandIndexThumb } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import './Header.css'

import logo from '../Image/logo 1.png'

const Header = () => {
    return (
        <div>
            {/* social-header start */}
            <div className="social-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="social-icon">
                                <Link><FaFacebookF></FaFacebookF></Link>
                                <Link><FaLinkedinIn></FaLinkedinIn></Link>
                                <Link><FaTwitter></FaTwitter></Link>
                                <Link><FaInstagram></FaInstagram></Link>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="social-text">
                                <Link><BsHandIndexThumb></BsHandIndexThumb></Link>
                                <p>Join the fight, Become a Volunteer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* social-header end */}
            {/* header menu area start */}
            <div className="header-menu">
                <div className="container">
                    <div className="menu-area">
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                        <div className="menu">
                            <ul>
                                <li><Link className='active'>Home <FiArrowUpRight></FiArrowUpRight></Link></li>
                                <li><Link>Our Cause <FiArrowUpRight></FiArrowUpRight></Link></li>
                                <li><Link>Contact Us <FiArrowUpRight></FiArrowUpRight></Link></li>
                                <li><Link>Cases<FiArrowUpRight></FiArrowUpRight></Link></li>
                                <li><Link>Our Benefactors<FiArrowUpRight></FiArrowUpRight></Link></li>
                            </ul>
                        </div>
                        <div className="search-area">
                            <Link><CiSearch></CiSearch></Link>
                            <button className='help-btu'>Help us Fight</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;