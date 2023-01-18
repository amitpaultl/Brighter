import React from 'react';
import './Benefactors.css'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import benefactors from '../../../Image/image 76.png'
import benefactors2 from '../../../Image/image 80.png'
import benefactors3 from '../../../Image/image 81.png'
import benefactors4 from '../../../Image/image 82.png'
import benefactors5 from '../../../Image/image 83.png'
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
                            <img src={benefactors2} alt="" />
                            <div className="benefactors-social">
                                <Link><FaLinkedinIn></FaLinkedinIn></Link>
                                <Link><FaTwitter></FaTwitter></Link>
                                <Link><FaInstagram></FaInstagram></Link>
                            </div>
                        </div>
                        <div className="benefactors-single-card">
                            <img src={benefactors3} alt="" />
                            <div className="benefactors-social">
                                <Link><FaLinkedinIn></FaLinkedinIn></Link>
                                <Link><FaTwitter></FaTwitter></Link>
                                <Link><FaInstagram></FaInstagram></Link>
                            </div>
                        </div>
                        <div className="benefactors-single-card">
                            <img src={benefactors4} alt="" />
                            <div className="benefactors-social">
                                <Link><FaLinkedinIn></FaLinkedinIn></Link>
                                <Link><FaTwitter></FaTwitter></Link>
                                <Link><FaInstagram></FaInstagram></Link>
                            </div>
                        </div>
                        <div className="benefactors-single-card">
                            <img src={benefactors5} alt="" />
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