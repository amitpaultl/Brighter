import React from 'react';
import './Benefactors.css'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import benefactors from '../../../Image/image 76.png'
import { Link } from 'react-router-dom';
const Benefactors = () => {
    return (
        <div>
            <div className="benefactors-area">
                <div className="container">
                    <div className="title-area">
                        <h2>Our Benefactors</h2>
                    </div>
                    <div className="benefactors-card">
                        <div className="benefactors-single-card">
                            <img src={benefactors} alt="" />
                            <div className="benefactors-social">
                                <Link><FaLinkedinIn></FaLinkedinIn></Link>
                                <Link><FaTwitter></FaTwitter></Link>
                                <Link><FaInstagram></FaInstagram></Link>
                            </div>
                        </div>
                        <div className="benefactors-single-card">
                            <img src={benefactors} alt="" />
                            <div className="benefactors-social">
                                <Link><FaLinkedinIn></FaLinkedinIn></Link>
                                <Link><FaTwitter></FaTwitter></Link>
                                <Link><FaInstagram></FaInstagram></Link>
                            </div>
                        </div>
                        <div className="benefactors-single-card">
                            <img src={benefactors} alt="" />
                            <div className="benefactors-social">
                                <Link><FaLinkedinIn></FaLinkedinIn></Link>
                                <Link><FaTwitter></FaTwitter></Link>
                                <Link><FaInstagram></FaInstagram></Link>
                            </div>
                        </div>
                        <div className="benefactors-single-card">
                            <img src={benefactors} alt="" />
                            <div className="benefactors-social">
                                <Link><FaLinkedinIn></FaLinkedinIn></Link>
                                <Link><FaTwitter></FaTwitter></Link>
                                <Link><FaInstagram></FaInstagram></Link>
                            </div>
                        </div>
                        <div className="benefactors-single-card">
                            <img src={benefactors} alt="" />
                            <div className="benefactors-social">
                                <Link><FaLinkedinIn></FaLinkedinIn></Link>
                                <Link><FaTwitter></FaTwitter></Link>
                                <Link><FaInstagram></FaInstagram></Link>
                            </div>
                        </div>
                        <div className="benefactors-single-card">
                            <img src={benefactors} alt="" />
                            <div className="benefactors-social">
                                <Link><FaLinkedinIn></FaLinkedinIn></Link>
                                <Link><FaTwitter></FaTwitter></Link>
                                <Link><FaInstagram></FaInstagram></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefactors;